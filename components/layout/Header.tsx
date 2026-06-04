"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

import { navLinks } from "@/constants/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isOpen, setIsOpen] =
    useState(false);

  const isScrolledRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;

        const nextIsScrolled = window.scrollY > 20;
        if (isScrolledRef.current !== nextIsScrolled) {
          isScrolledRef.current = nextIsScrolled;
          setIsScrolled(nextIsScrolled);
        }
      });
    };

    handleScroll();
    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        className={`
          fixed
          top-0
          left-0
          w-full
          z-40
          transition-all
          duration-300
          ${
            isScrolled
              ? `
                bg-black/80
                backdrop-blur-xl
                border-b
                border-white/10
                py-4
              `
              : `
                bg-transparent
                py-6
              `
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <Link href="/" aria-label="BB Creative Events home">
            <Image
              src="/assets/images/bbcreative.png"
              alt="BB Creative Events"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden
              md:flex
              items-center
              gap-8
            "
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
              />
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/2348165392277"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r
                from-pink-500
                to-violet-600
                px-6
                py-3
                rounded-full
                text-white
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_0_25px_rgba(255,61,129,0.35)]
              "
            >
              Book Now
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="rounded-full p-2 text-white transition-colors hover:text-brand-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-pink md:hidden"
          >
            <Menu aria-hidden="true" className="h-8 w-8" />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={navLinks}
      />
    </>
  );
}
