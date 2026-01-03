"use client"

import { CheckCircle2 } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("Hero")
  const bullets = t.raw("bullets") as string[]

  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t("title")}
              </h2>
              <p className="text-pretty text-lg text-secondary-foreground/80 md:text-xl">
                {t("subtitle")}
              </p>
            </div>

            <div className="space-y-3">
              {bullets.map((bullet, index) => (
                <div key={`${bullet}-${index}`} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CalBookingButton
                size="lg"
                className="text-base"
                eventType="on-site-electrical-service"
                label={t("primaryCta")}
              />
              <CalBookingButton
                size="lg"
                variant="outline"
                className="text-base border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
                eventType="service-inquiry-message-only"
                label={t("secondaryCta")}
              />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-muted">
              <img
                src="/professional-technician-repairing-air-conditioning.jpg"
                alt={t("imageAlt")}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
