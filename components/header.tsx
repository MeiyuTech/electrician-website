"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Phone } from "lucide-react"
import {Link, usePathname} from '@/i18n/navigation'

import { useLocale, useTranslations } from "next-intl"

export function Header() {
  const t = useTranslations("Header")
  const locale = useLocale()
  const pathname = usePathname()
  const languages = [
    { locale: "en", label: "EN" },
    { locale: "zh", label: "中文" },
    { locale: "es", label: "ES" },
  ]
  const currentLanguage = languages.find((item) => item.locale === locale)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary-foreground"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
              <path d="M13 2 10 5" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-secondary">{t("brandName")}</h1>
            <p className="text-xs text-muted-foreground">{t("tagline")}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase">
                  {currentLanguage?.label ?? "EN"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[8rem]">
              {languages.map((language) => (
                <DropdownMenuItem key={language.locale} asChild>
                  <Link
                    href={pathname}
                    locale={language.locale}
                    className="flex w-full items-center gap-2"
                  >
                    <span
                      className={
                        locale === language.locale
                          ? "text-primary"
                          : "text-muted-foreground"
                      }
                    >
                      ●
                    </span>
                    <span>{language.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="gap-2" asChild>
            <a href="tel:9493004828">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{t("cta")}</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
