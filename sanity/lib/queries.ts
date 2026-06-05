import { defineQuery } from "next-sanity";

export const servicesQuery = defineQuery(`
*[
  _type == "service" &&
  defined(title) &&
  defined(description) &&
  defined(image.asset)
] | order(title asc){
  _id,
  title,
  "slug": slug.current,
  description,
  "image": image.asset->url,
  features
}
`);

export const featuredGalleryQuery = defineQuery(`
*[
  _type == "gallery" &&
  defined(title) &&
  defined(category) &&
  defined(image.asset)
] | order(_createdAt desc)[0...6]{
  _id,
  title,
  category,
  "image": image.asset->url
}
`);

export const galleryQuery = defineQuery(`
*[
  _type == "gallery" &&
  defined(title) &&
  defined(category) &&
  defined(image.asset)
] | order(_createdAt desc){
  _id,
  title,
  category,
  "image": image.asset->url
}
`);

export const galleryCategoriesQuery = defineQuery(`
array::unique(*[_type == "gallery" && defined(category)].category) | order(@ asc)
`);

export const testimonialsQuery = defineQuery(`
*[
  _type == "testimonial" &&
  defined(name) &&
  defined(eventType) &&
  defined(review) &&
  defined(image.asset)
] | order(_createdAt desc){
  _id,
  name,
  eventType,
  review,
  "image": image.asset->url
}
`);

export const faqQuery = defineQuery(`
*[_type == "faq" && defined(question) && defined(answer)] | order(_createdAt asc){
  _id,
  question,
  answer
}
`);

export const teamQuery = defineQuery(`
*[_type == "team"] | order(_createdAt asc){
  _id,
  name,
  role,
  bio,
  "image": image.asset->url
}
`);
