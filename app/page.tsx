import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import TrustedBrands from "@/components/sections/TrustedBrands";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import FeaturedGallery from "@/components/sections/FeaturedGallery";
import StatisticsCounter from "@/components/sections/StatisticsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import {
  getFaqs,
  getFeaturedGallery,
  getServices,
  getTestimonials,
} from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Event Decoration & Styling Services in Nigeria",
  description:
    "Book BB Creative Events for wedding decoration, birthday setup, traditional ceremony styling, corporate event decor, and private celebrations across Nigeria.",
};


export default async function Home() {
  const [services, featuredGallery, testimonials, faqs] = await Promise.all([
    getServices(),
    getFeaturedGallery(),
    getTestimonials(),
    getFaqs(),
  ]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* HERO SECTION */}
      <Hero />
      <TrustedBrands />
      <About />
      <Service services={services} />
      <FeaturedGallery featuredGallery={featuredGallery} />
      <StatisticsCounter />
      <TestimonialSlider testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <Contact />
    </div>
  );
}