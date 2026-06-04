"use client";

import { motion } from "framer-motion";
import { brands } from "@/constants/brands";

export default function TrustedBrands() {
  return (
    <section
      className="
        relative
        py-20
        overflow-hidden
        border-y
        border-white/10
        bg-[#0A0A0A]
      "
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/3
          w-72
          h-72
          bg-pink-500/10
          blur-[120px]
          rounded-full
        "
      />

      {/* HEADER */}
      <div
        className="
          relative
          z-10
          text-center
          mb-14
          px-6
        "
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-pink-300
            mb-4
          "
        >
          What We Style
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            text-3xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Built For Real Nigerian
          <span
            className="
              block
              bg-gradient-to-r
              from-pink-400
              to-violet-500
              bg-clip-text
              text-transparent
            "
          >
            Celebrations And Venues
          </span>
        </motion.h2>
      </div>

      {/* BRANDS MARQUEE */}
      <div
        className="
          relative
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="
            flex
            gap-6
            min-w-max
          "
        >
          {[...brands, ...brands].map(
            (brand, index) => (
              <div
                key={index}
                className="
                  px-8
                  py-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  text-white/80
                  font-medium
                  whitespace-nowrap
                  hover:text-white
                  hover:border-pink-500/30
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                {brand}
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* BOTTOM TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="
          mt-14
          text-center
          px-6
        "
      >
        <p
          className="
            text-gray-400
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          From family compounds and church halls to hotels, event centres,
          gardens, and corporate venues, we adapt each setup to the space,
          guest count, and tone of the occasion.
        </p>
      </motion.div>
    </section>
  );
}
