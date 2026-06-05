import { client } from "./client";
import {
  faqQuery,
  featuredGalleryQuery,
  galleryCategoriesQuery,
  galleryQuery,
  servicesQuery,
  teamQuery,
  testimonialsQuery,
} from "./queries";
import type {
  FaqItem,
  GalleryItem,
  ServiceItem,
  TeamMember,
  TestimonialItem,
} from "./types";

const fetchOptions = {
  next: {
    revalidate: 60,
  },
};

export function getServices() {
  return client.fetch<ServiceItem[]>(servicesQuery, {}, fetchOptions);
}

export function getFeaturedGallery() {
  return client.fetch<GalleryItem[]>(featuredGalleryQuery, {}, fetchOptions);
}

export function getGallery() {
  return client.fetch<GalleryItem[]>(galleryQuery, {}, fetchOptions);
}

export async function getGalleryCategories() {
  const categories = await client.fetch<string[]>(
    galleryCategoriesQuery,
    {},
    fetchOptions
  );

  return ["All", ...categories];
}

export function getTestimonials() {
  return client.fetch<TestimonialItem[]>(testimonialsQuery, {}, fetchOptions);
}

export function getFaqs() {
  return client.fetch<FaqItem[]>(faqQuery, {}, fetchOptions);
}

export function getTeam() {
  return client.fetch<TeamMember[]>(teamQuery, {}, fetchOptions);
}