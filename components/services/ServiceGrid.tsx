"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import type { ServiceItem } from "@/sanity/lib/types";

const serviceHighlights = [
  "Design direction and colour planning",
  "Venue styling and setup",
  "Decor materials matched to scope",
  "Event-day finishing checks",
];

type ServicesGridProps = {
  services: ServiceItem[];
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  const shouldReduceMotion = useReducedMotion();

  if (services.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300">
            What We Offer
          </span>

          <h2
            id="services-heading"
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Event services shaped
            <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              around your occasion
            </span>
          </h2>
        </div>

        <div className="mt-20 space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.24),
                duration: shouldReduceMotion ? 0 : 0.45,
              }}
              className="grid gap-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl lg:grid-cols-2"
            >
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                  priority={index === 0}
                  quality={85}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <ul
                  className="mt-8 space-y-4 text-gray-300"
                  aria-label={`${service.title} highlights`}
                >
                  {(service.features?.length
                    ? service.features
                    : serviceHighlights
                  ).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 flex-none text-pink-400"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://wa.me/2348165392277?text=Hello%20BB%20Creative%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${service.title} on WhatsApp`}
                  className="mt-10 inline-flex w-fit rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(255,61,129,0.35)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-pink active:scale-95"
                >
                  Book This Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}