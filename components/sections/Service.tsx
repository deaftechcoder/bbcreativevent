"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import type { ServiceItem } from "@/sanity/lib/types";

type ServicesProps = {
  services: ServiceItem[];
};

export default function Services({ services }: ServicesProps) {
  if (services.length === 0) {
    return null;
  }

  return (
    <section
      className="
        relative
        py-28
        overflow-hidden
        bg-[#0A0A0A]
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          right-0
          w-96
          h-96
          bg-violet-500/10
          blur-[140px]
          rounded-full
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
        "
      >
        {/* HEADER */}
        <div
          className="
            max-w-3xl
            mx-auto
            text-center
          "
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              inline-block
              px-4
              py-2
              rounded-full
              border
              border-pink-500/20
              bg-white/5
              text-pink-300
              text-sm
              uppercase
              tracking-[0.25em]
            "
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
              text-white
            "
          >
            Elegant Decorations
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
              For Every Celebration
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              mt-6
              text-lg
              text-gray-400
              leading-relaxed
            "
          >
            From luxury weddings and birthdays
            to premium corporate experiences,
            we create visually stunning events
            tailored to your vision.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div
          className="
            mt-20
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}