export type ServiceItem = {
  _id: string;
  title: string;
  slug?: string | null;
  description: string;
  image: string;
  features?: string[] | null;
};

export type GalleryItem = {
  _id: string;
  title: string;
  category: string;
  image: string;
};

export type TestimonialItem = {
  _id: string;
  name: string;
  eventType: string;
  review: string;
  image: string;
};

export type FaqItem = {
  _id: string;
  question: string;
  answer: string;
};

export type TeamMember = {
  _id: string;
  name: string;
  role?: string;
  bio?: string;
  image?: string;
};
