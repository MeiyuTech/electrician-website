import { getRequestConfig } from "next-intl/server"

export const locales = ["en", "es", "zh"] as const
export const defaultLocale = "en"

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locales.includes(locale as (typeof locales)[number]) ? locale : defaultLocale

  return {
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  }
})
