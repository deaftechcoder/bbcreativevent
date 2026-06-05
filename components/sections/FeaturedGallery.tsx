"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

import GalleryModal from "@/components/ui/GalleryModal";
import type { GalleryItem } from "@/sanity/lib/types";

type SelectedImage = {
  image: string;
  title: string;
  category: string;
};

type FeaturedGalleryProps = {
  featuredGallery: GalleryItem[];
};

export default function FeaturedGallery({
  featuredGallery,
}: FeaturedGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );

  if (featuredGallery.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300"
            >
              Featured Gallery
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              Moments Designed
              <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
                To Be Remembered
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
            >
              Explore some of our favorite event setups, from elegant weddings
              to stylish birthdays and premium celebrations.
            </motion.p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-pink-500/40 hover:bg-white/10"
          >
            View Full Gallery
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredGallery.map((item, index) => (
            <motion.button
              key={item._id}
              type="button"
              onClick={() =>
                setSelectedImage({
                  image: item.image,
                  title: item.title,
                  category: item.category,
                })
              }
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left outline-none transition-all duration-300 hover:border-pink-500/40 focus-visible:ring-2 focus-visible:ring-pink-500 ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
              aria-label={`Open ${item.title} image`}
            >
              <div className="relative h-[360px] overflow-hidden md:h-[430px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-violet-500/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm font-medium text-pink-200 backdrop-blur-md">
                  {item.category}
                </div>

                <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-5 w-5" />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-300">
                    Premium styling, creative details, and elegant decoration.
                  </p>

                  <p className="mt-4 text-sm font-medium text-pink-300">
                    Click to view full image
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <GalleryModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage?.image ?? ""}
        title={selectedImage?.title ?? ""}
        category={selectedImage?.category ?? ""}
      />
    </section>
  );
}