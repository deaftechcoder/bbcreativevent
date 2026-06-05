"use client";

import { motion } from "framer-motion";

const cards = [
  {
    label: "Mission",
    title: "Make the planning feel lighter.",
    description:
      "We create event spaces that look polished, feel personal, and are planned with the practical realities of Nigerian venues in mind.",
  },
  {
    label: "Vision",
    title: "Become a trusted styling partner.",
    description:
      "Our aim is to be known for thoughtful decoration, clear communication, and setups clients can confidently recommend.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <span className="text-xs uppercase tracking-[0.28em] text-pink-200">
              Our {card.label}
            </span>

            <h3 className="mt-8 font-heading text-5xl font-semibold leading-none text-white">
              {card.title}
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
