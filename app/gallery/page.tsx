import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import { getGallery, getGalleryCategories } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore BB Creative Events gallery featuring luxury wedding decoration, birthdays, traditional weddings, corporate events, and stylish celebrations across Nigeria.",
};

export default async function GalleryPage() {
  const [galleryItems, categories] = await Promise.all([
    getGallery(),
    getGalleryCategories(),
  ]);

  return (
    <main className="bg-[#050505]">
      <GalleryHero />
      <GalleryGrid categories={categories} galleryItems={galleryItems} />
      <GalleryCTA />
    </main>
  );
}