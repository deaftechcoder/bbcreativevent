"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#111]
        backdrop-blur-xl
        shadow-[0_24px_80px_rgba(0,0,0,0.28)]
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          h-[420px]
          overflow-hidden
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-1000
            group-hover:scale-105
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/45
            to-transparent
          "
        />

        <div
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-white/15
            bg-black/35
            px-4
            py-2
            text-xs
            uppercase
            tracking-[0.2em]
            text-pink-100
            backdrop-blur-md
          "
        >
          BB Creative
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          p-6
        "
      >
        <h3
          className="font-heading text-3xl font-semibold leading-none text-white"
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-gray-300
            leading-relaxed
            text-sm
          "
        >
          {description}
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/15
            bg-white/10
            px-4
            py-2.5
            text-sm
            text-white
            font-semibold
            backdrop-blur-md
            hover:border-pink-300/50
            hover:bg-pink-500/15
            hover:text-white
            transition-all
          "
        >
          Discuss this service

          <ArrowUpRight
            aria-hidden="true"
            className="
              w-4
              h-4
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </Link>
      </div>
    </motion.div>
  );
}