import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Gallery Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});