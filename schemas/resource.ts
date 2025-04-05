import { defineField, defineType } from "sanity"

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Articles", value: "articles" },
          { title: "Videos", value: "videos" },
          { title: "Apps", value: "apps" },
          { title: "Educational", value: "educational" },
          { title: "Lifestyle", value: "lifestyle" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A short description of the resource",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "link",
      title: "External Link",
      type: "url",
      description: "Link to the external resource",
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
      description: "Upload a file for this resource (if not using an external link)",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Optional detailed content about this resource",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Whether this resource should be featured",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
    },
    prepare({ title, category }) {
      return {
        title,
        subtitle: category,
      }
    },
  },
})

