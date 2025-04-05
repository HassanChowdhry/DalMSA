import { defineField, defineType } from "sanity"

export default defineType({
  name: "event",
  title: "Event",
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
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "datetime",
      description: "Optional end date for multi-day events",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "The location of the event",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The main image for the event",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      description: "A short description of the event (for previews)",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "The full content/description of the event",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Whether this event should be featured on the home page",
      initialValue: false,
    }),
    defineField({
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
      description: "Optional link for event registration",
    }),
    defineField({
      name: "organizers",
      title: "Organizers",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "teamMember" }],
        },
      ],
      description: "References to team members organizing this event",
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "image",
    },
    prepare({ title, date, media }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : ""

      return {
        title,
        subtitle: formattedDate,
        media,
      }
    },
  },
})

