"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

import GalleryModal from "@/components/ui/GalleryModal";
import type { GalleryItem } from "@/sanity/lib/types";

type SelectedImage = {
  title: string;
  category: string;
  image: string;
};

type GalleryGridProps = {
  categories: string[];
  galleryItems: GalleryItem[];
};

export default function GalleryGrid({
  categories,
  galleryItems,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") return galleryItems;

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  if (galleryItems.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-28">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300">
            Event Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Explore Our
            <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              Decoration Works
            </span>
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-pink-500 bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-[0_0_25px_rgba(255,61,129,0.25)]"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-pink-500/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGallery.map((item, index) => (
            <motion.button
              layout
              key={`${item._id}-${activeCategory}`}
              type="button"
              onClick={() => setSelectedImage(item)}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left outline-none transition-all duration-300 hover:border-pink-500/40 focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm font-medium text-pink-200 backdrop-blur-md">
                  {item.category}
                </div>

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-5 w-5" />
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-pink-300">
                    Click to view full image
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
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
