import { defineField, defineType } from "sanity"

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'The title displayed in the hero section (e.g., "DMSA")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The background image for the hero section",
    }),
    defineField({
      name: "heroText",
      title: "Hero Arabic Text",
      type: "string",
      description: "The Arabic text displayed in the hero section",
    }),
    defineField({
      name: "quoteText",
      title: "Quote Text",
      type: "string",
      description: "The quote text displayed in the hero section",
    }),
    defineField({
      name: "quoteReference",
      title: "Quote Reference",
      type: "string",
      description: 'The reference for the quote (e.g., "Quran 20:114")',
    }),
    defineField({
      name: "welcomeTitle",
      title: "Welcome Section Title",
      type: "string",
      description: "The title for the welcome section",
    }),
    defineField({
      name: "welcomeContent",
      title: "Welcome Content",
      type: "array",
      of: [{ type: "block" }],
      description: "The content for the welcome section",
    }),
    defineField({
      name: "welcomeImage",
      title: "Welcome Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The image for the welcome section",
    }),
    defineField({
      name: "prayerTimesTitle",
      title: "Prayer Times Section Title",
      type: "string",
      description: "The title for the prayer times section",
    }),
    defineField({
      name: "prayerTimesContent",
      title: "Prayer Times Content",
      type: "text",
      description: "The content for the prayer times section",
    }),
    defineField({
      name: "ctaTitle",
      title: "Call to Action Title",
      type: "string",
      description: "The title for the call to action section",
    }),
    defineField({
      name: "ctaContent",
      title: "Call to Action Content",
      type: "text",
      description: "The content for the call to action section",
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
    prepare({ title }) {
      return {
        title: title || "Home Page",
      }
    },
  },
})

