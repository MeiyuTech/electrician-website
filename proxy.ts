import createMiddleware from "next-intl/middleware"
import { defaultLocale, locales } from "./i18n/request"

const proxy = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
})

export default proxy
export { proxy }

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
