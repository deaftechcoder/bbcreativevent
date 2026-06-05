"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  category: string;
}

export default function GalleryModal({
  isOpen,
  onClose,
  image,
  title,
  category,
}: GalleryModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Close image preview"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A]"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.88, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative h-[75vh] w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 md:p-8">
              <span className="inline-block rounded-full border border-pink-500/20 bg-pink-500/20 px-4 py-2 text-sm text-pink-200">
                {category}
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                {title}
              </h2>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}