"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/about banner.png"
          alt="About BB Creative Events"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* GLOW */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300"
        >
          About Us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Creating Beautiful
          <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
            Event Experiences
          </span>
          Across Nigeria
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300"
        >
          BBCreative Events transforms ordinary spaces into elegant,
          unforgettable celebrations through luxury event styling and creative
          decoration experiences.
        </motion.p>
      </div>
    </section>
  );
}