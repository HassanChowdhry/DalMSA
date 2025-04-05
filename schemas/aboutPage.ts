import { defineField, defineType } from "sanity"

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "The main content for the about page",
    }),
    defineField({
      name: "image",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The main image for the about page",
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
      description: "The mission statement",
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      description: "The vision statement",
    }),
    defineField({
      name: "team",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "teamMember" }],
        },
      ],
      description: "References to team members",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "SEO Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "SEO Description",
          type: "text",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
})

