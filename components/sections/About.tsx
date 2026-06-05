"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const studioNotes = [
  {
    title: "Design With Purpose",
    description:
      "We plan colour, layout, focal points, and guest experience before the first item enters the venue.",
  },
  {
    title: "Clear Client Communication",
    description:
      "You get practical guidance on what fits your venue, timeline, and budget before decisions are made.",
  },
  {
    title: "Reliable Setup Team",
    description:
      "We arrive prepared, style with care, and handle finishing checks before your guests walk in.",
  },
];

export default function About() {
  return (
    <section
      className="
        relative
        py-28
        overflow-hidden
        bg-[#050505]
      "
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* LEFT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
          "
        >
          {/* MAIN IMAGE */}
          <div
            className="
              relative
              rounded-2xl
              overflow-hidden
              border
              border-white/10
            "
          >
            <Image
              src="/assets/images/corporate_1.jpeg"
              alt="Luxury Event Decoration"
              width={700}
              height={800}
              className="
                object-cover
                w-full
                h-[600px]
              "
            />
          </div>

          {/* FLOATING IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              absolute
              -bottom-10
              -right-6
              w-52
              rounded-2xl
              overflow-hidden
              border
              border-white/10
              shadow-2xl
            "
          >
            <Image
              src="/assets/images/Corporate_2.jpeg"
              alt="Elegant Event Setup"
              width={300}
              height={350}
              className="
                object-cover
                w-full
                h-full
              "
            />
          </motion.div>

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="
              absolute
              top-6
              left-6
              bg-black/70
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              px-6
              py-4
            "
          >
            <h3
              className="
                font-heading
                text-4xl
                font-semibold
                text-white
              "
            >
              5+
            </h3>

            <p
              className="
                text-sm
                text-gray-300
              "
            >
              Years Experience
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* SMALL LABEL */}
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              border
              border-pink-500/20
              bg-white/5
              text-pink-300
              text-xs
              uppercase
              tracking-[0.25em]
            "
          >
            About BB Creative Events
          </span>

          {/* HEADING */}
          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-semibold
              leading-none
              text-white
            "
          >
            We Make Events
            <span
              className="
                block
                text-pink-200
              "
            >
              Feel Considered
            </span>
            From First Look To Final Detail
          </h2>

          {/* PARAGRAPH */}
          <p
            className="
              mt-8
              text-lg
              text-gray-300
              leading-relaxed
            "
          >
            BB Creative Events works with clients who want a beautiful event
            without the stress of guessing what goes where. We help shape the
            look, source the right decorative details, and set up the venue so
            the day feels coordinated, warm, and ready for guests.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            Whether it is a family celebration, a traditional ceremony, a
            church wedding, or a corporate dinner, our work is guided by your
            venue, budget, guest flow, and the atmosphere you want people to
            remember.
          </p>

          <div className="mt-10 grid gap-4">
            {studioNotes.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ x: 6 }}
                className="grid grid-cols-[56px_1fr] gap-4 border-t border-white/10 py-5"
              >
                <span className="font-heading text-4xl font-semibold leading-none text-pink-200/80">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-violet-600
                text-white
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_0_35px_rgba(255,61,129,0.35)]
              "
            >
              Let’s Plan Your Event
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
