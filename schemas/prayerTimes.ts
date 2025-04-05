import { defineField, defineType } from "sanity"

export default defineType({
  name: "prayerTimes",
  title: "Prayer Times",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'A title for this prayer times entry (e.g., "Winter 2023")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      description: "The start date for this prayer times schedule",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "The end date for this prayer times schedule",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fajr",
      title: "Fajr",
      type: "string",
      description: 'The time for Fajr prayer (e.g., "5:30 AM")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sunrise",
      title: "Sunrise",
      type: "string",
      description: 'The time for sunrise (e.g., "6:45 AM")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dhuhr",
      title: "Dhuhr",
      type: "string",
      description: 'The time for Dhuhr prayer (e.g., "12:30 PM")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "asr",
      title: "Asr",
      type: "string",
      description: 'The time for Asr prayer (e.g., "3:45 PM")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "maghrib",
      title: "Maghrib",
      type: "string",
      description: 'The time for Maghrib prayer (e.g., "6:15 PM")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isha",
      title: "Isha",
      type: "string",
      description: 'The time for Isha prayer (e.g., "7:30 PM")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "jummahTime",
      title: "Jummah Time",
      type: "string",
      description: 'The time for Jummah prayer (e.g., "1:30 PM")',
    }),
    defineField({
      name: "jummahLocation",
      title: "Jummah Location",
      type: "string",
      description: "The location for Jummah prayer",
    }),
    defineField({
      name: "notes",
      title: "Notes",
      type: "text",
      description: "Any additional notes about prayer times",
    }),
  ],
  preview: {
    select: {
      title: "title",
      startDate: "startDate",
      endDate: "endDate",
    },
    prepare({ title, startDate, endDate }) {
      const dateRange = startDate && endDate ? `${startDate} to ${endDate}` : ""
      return {
        title,
        subtitle: dateRange,
      }
    },
  },
})

