"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { statistics } from "@/constants/statistics";

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatisticsCounter() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300"
          >
            Our Impact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Practical experience,
            <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              not just pretty pictures
            </span>
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 hover:bg-white/10"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.24em] text-pink-200/80">
                    0{index + 1}
                  </span>
                  <span className="h-px flex-1 bg-white/10 ml-4" />
                </div>

                <h3 className="font-heading text-6xl font-semibold leading-none text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>

                <p className="mt-4 text-lg font-semibold text-white">
                  {stat.label}
                </p>

                <p className="mt-3 leading-relaxed text-gray-400">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
