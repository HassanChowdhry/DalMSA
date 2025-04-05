export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions) {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const mergedOptions = options ? { ...defaultOptions, ...options } : defaultOptions

  return new Date(date).toLocaleDateString("en-US", mergedOptions)
}

export function formatTime(date: string | Date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

export function formatDateTime(date: string | Date) {
  return `${formatDate(date)} at ${formatTime(date)}`
}

export function formatDateRange(startDate: string | Date, endDate?: string | Date) {
  if (!endDate) {
    return formatDate(startDate)
  }

  const start = new Date(startDate)
  const end = new Date(endDate)

  // Same day
  if (start.toDateString() === end.toDateString()) {
    return `${formatDate(start)} from ${formatTime(start)} to ${formatTime(end)}`
  }

  // Different days
  return `${formatDate(start)} to ${formatDate(end)}`
}

