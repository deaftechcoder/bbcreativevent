"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { TestimonialItem } from "@/sanity/lib/types";

import "swiper/css";
import "swiper/css/pagination";

type TestimonialSliderProps = {
  testimonials: TestimonialItem[];
};

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  const shouldReduceMotion = useReducedMotion();

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden bg-[#050505] py-16 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="inline-block rounded-full border border-pink-500/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-pink-300"
          >
            Client Stories
          </motion.span>

          <motion.h2
            id="testimonials-heading"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            What Our Clients
            <span className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
            className="mt-6 text-lg leading-relaxed text-gray-400"
          >
            Real experiences from clients who trusted us to create beautiful,
            memorable, and elegant event spaces.
          </motion.p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[A11y, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            watchSlidesProgress={true}
            loop={!shouldReduceMotion}
            autoplay={
              shouldReduceMotion
                ? false
                : {
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            pagination={{
              clickable: true,
            }}
            a11y={{
              enabled: true,
              paginationBulletMessage: "Go to testimonial {{index}}",
            }}
            grabCursor={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 hover:bg-white/10">
                  <div className="mb-6 flex items-center justify-between">
                    <Quote aria-hidden="true" className="h-10 w-10 text-pink-400" />

                    <div
                      className="flex gap-1 text-pink-300"
                      aria-label="5 out of 5 stars"
                    >
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          aria-hidden="true"
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="min-h-32 text-lg leading-relaxed text-gray-300">
                    <p>{testimonial.review}</p>
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
                      <Image
                        src={testimonial.image}
                        alt={`Portrait of ${testimonial.name}`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {testimonial.name}
                      </h3>

                      <p className="text-sm text-pink-300">
                        {testimonial.eventType}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}