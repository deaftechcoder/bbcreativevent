"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: {
    label: string;
    href: string;
  }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      onClose();
      return;
    }

    if (event.key !== "Tab" || !menuRef.current) {
      return;
    }

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) {
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
          animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.35 }}
          onKeyDown={handleKeyDown}
          className="
            fixed
            inset-0
            w-full
            min-h-dvh
            bg-black/95
            backdrop-blur-xl
            z-50
            flex
            flex-col
            overflow-y-auto
            p-6
          "
        >
          <div className="flex justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close mobile menu"
              className="rounded-full p-2 text-white transition-colors hover:text-brand-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-pink"
            >
              <X aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="
                  text-2xl
                  font-bold
                  font-heading
                  text-white
                  hover:text-brand-pink
                  transition-colors
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-8
                  focus-visible:outline-brand-pink
                "
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="https://wa.me/+2348165392277"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="mt-6 btn-primary"
            >
              Book Now
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
