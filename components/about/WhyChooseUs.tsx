"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    label: "01",
    title: "Refined Styling",
    description:
      "Elegant ideas shaped around your venue, colours, guest flow, and event type.",
  },
  {
    label: "02",
    title: "Practical Planning",
    description:
      "A beautiful setup still needs logistics, timing, access, and budget discipline.",
  },
  {
    label: "03",
    title: "Warm Client Care",
    description:
      "We listen closely, explain clearly, and keep the process calm from enquiry to setup.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-none text-white md:text-6xl">
            Design decisions that
            <span className="block text-pink-200">
              make the day feel effortless
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <span className="font-heading text-6xl font-semibold leading-none text-pink-200/75">
                {reason.label}
              </span>

              <h3 className="mt-8 font-heading text-3xl font-semibold leading-none text-white">
                {reason.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
