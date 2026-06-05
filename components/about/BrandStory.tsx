"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function BrandStory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-16 md:py-28"
      aria-labelledby="brand-story-heading"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image
              src="/assets/images/Corporate_2.jpeg"
              alt="BB Creative Events luxury event styling"
              width={700}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[420px] w-full object-cover md:h-[650px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        >
          <span className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300">
            Our Story
          </span>

          <h2
            id="brand-story-heading"
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Passion For Elegant
            <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              Event Styling
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400">
            BB Creative Events was founded with the vision of transforming
            celebrations into unforgettable experiences filled with beauty,
            elegance, and creativity.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            We believe every event tells a story. Through luxury decoration,
            premium styling, lighting, floral arrangements, and attention to
            detail, we create moments people will always remember.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            From intimate celebrations to large luxury weddings and corporate
            experiences, our goal remains the same — delivering excellence with
            creativity and professionalism.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
