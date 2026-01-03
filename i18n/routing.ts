import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "es", "zh"] as const,
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
  },
})
