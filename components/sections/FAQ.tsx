"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import type { FaqItem } from "@/sanity/lib/types";

type FAQProps = {
  faqs: FaqItem[];
};

export default function FAQ({ faqs }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  if (faqs.length === 0) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-28">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300"
          >
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Questions Clients
            <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              Usually Ask
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400"
          >
            Clear answers about booking, budgets, inspiration, setup timing,
            and what we need before giving a useful quote.
          </motion.p>

          <motion.a
            href="https://wa.me/2348165392277?text=Hello%20BB%20Creative%20Events%2C%20I%20would%20like%20to%20ask%20about%20event%20decoration."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(255,61,129,0.35)] transition-all duration-300 hover:scale-105"
          >
            <MessageCircleQuestion className="h-5 w-5" />
            Ask on WhatsApp
          </motion.a>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={faq._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                  aria-expanded={isActive}
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 ${
                      isActive ? "rotate-180 bg-pink-500/20 text-pink-200" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 leading-relaxed text-gray-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}