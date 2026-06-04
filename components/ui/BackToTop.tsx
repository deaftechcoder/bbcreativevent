"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;

        const nextIsVisible = window.scrollY > 300;
        if (isVisibleRef.current !== nextIsVisible) {
          isVisibleRef.current = nextIsVisible;
          setIsVisible(nextIsVisible);
        }
      });
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.8 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="
            fixed bottom-40 right-6 z-50 
            flex h-12 w-12 items-center justify-center 
            rounded-full bg-black/60 backdrop-blur-md 
            text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] 
            transition-colors hover:bg-black/80
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-brand-pink
          "
          aria-label="Back to top"
        >
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full -rotate-90 p-1"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              className="text-white/10"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#back-to-top-gradient)"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
            <defs>
              <linearGradient
                id="back-to-top-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </svg>
          <ChevronUp aria-hidden="true" className="relative z-10 h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
