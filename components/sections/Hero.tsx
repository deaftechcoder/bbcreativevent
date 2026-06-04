"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const trustSignals = [
  "Weddings",
  "Traditional ceremonies",
  "Corporate events",
];

const quickStats = [
  ["250+", "celebrations styled"],
  ["5+", "years in events"],
  ["15+", "venue types handled"],
];

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        pt-40
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero_banner.png"
          alt="Luxury Event Decoration"
          fill
          priority
          className="
            object-cover
            object-center
          "
        />
      </div>

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/70
        "
      />

      {/* GRADIENT OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/50
          to-transparent
        "
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#050505,transparent)]" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          w-full
        "
      >
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="max-w-4xl">
          {/* SMALL LABEL */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-block
              mb-6
              px-4
              py-2
              rounded-full
              border
              border-pink-500/30
              bg-white/5
              backdrop-blur-md
              text-pink-300
              text-xs
              tracking-[0.22em]
              uppercase
            "
          >
            Event Decoration & Styling in Nigeria
          </motion.span>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-semibold
              leading-[0.94]
              text-white
            "
          >
            Thoughtful decor for
            <span
              className="
                block
                text-pink-200
              "
            >
              well-planned events
            </span>
            your guests remember
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              mt-6
              text-lg
              md:text-xl
              text-gray-300
              max-w-2xl
              leading-relaxed
            "
          >
            BB Creative Events styles weddings, traditional ceremonies,
            birthdays, corporate events, and private celebrations with a clear
            plan, reliable setup, and details that feel personal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-8 flex max-w-3xl flex-wrap gap-3"
          >
            {trustSignals.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -3 }}
                className="rounded-full border border-white/15 bg-black/35 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-md"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                text-white
                font-semibold
                bg-gradient-to-r
                from-pink-500
                to-violet-600
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_0_35px_rgba(255,61,129,0.35)]
              "
            >
              Book Your Event
              <ArrowUpRight aria-hidden="true" className="ml-2 h-5 w-5" />
            </Link>

            {/* SECONDARY CTA */}
            <a
              href="https://wa.me/2348165392277"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
                text-white
                font-semibold
                hover:bg-white/10
                transition-all
                duration-300
              "
            >
              <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="mt-8 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10"
          >
            {quickStats.map(([value, label]) => (
              <div key={label} className="bg-black/45 px-4 py-4 backdrop-blur-md">
                <p className="font-heading text-3xl font-semibold leading-none text-white">
                  {value}
                </p>
                <p className="mt-2 text-xs leading-snug text-gray-300">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="hidden rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src="/assets/images/portrait.png"
              alt="Detailed BB Creative Events table styling"
              fill
              sizes="360px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs uppercase tracking-[0.22em] text-pink-200">
                Available across Nigeria
              </p>
              <p className="mt-2 font-heading text-3xl font-semibold leading-none text-white">
                Styled with real venue flow in mind.
              </p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-32
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />
    </section>
  );
}
