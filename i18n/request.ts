import { getRequestConfig } from "next-intl/server"

export const locales = ["en", "es", "zh"] as const
export const defaultLocale = "en"

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "en"
  const resolvedLocale = locales.includes(locale as (typeof locales)[number]) ? locale : defaultLocale

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  }
})
