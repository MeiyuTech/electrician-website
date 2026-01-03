"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, Calendar } from "lucide-react"
import { useTranslations } from "next-intl"

export function Contact() {
  const t = useTranslations("Contact")
  const calUsername = String("ca-electrician")
  const eventType = "service-inquiry-message-only"
  const namespace = eventType

  useEffect(() => {
    if (calUsername === "YOUR_CAL_USERNAME") {
      return
    }

    ;(async () => {
      const cal = await getCalApi({ namespace })
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#f18600" },
          dark: { "cal-brand": "#f18600" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [calUsername, namespace])

  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("title")}</h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold">{t("booking.title")}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{t("booking.description")}</p>
                  <p className="text-sm text-muted-foreground">{t("booking.note")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{t("phone.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("phone.description")}</p>
                  <a href="tel:9493004828" className="mt-2 block text-lg font-semibold text-primary hover:underline">
                    (949) 300-4828
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{t("email.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("email.description")}</p>
                  <a
                    href="mailto:info@ca-electrician.com"
                    className="mt-2 block text-lg font-semibold text-primary hover:underline"
                  >
                    info@ca-electrician.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{t("hours.title")}</h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>{t("hours.weekday")}</p>
                    <p>{t("hours.saturday")}</p>
                    <p>{t("hours.sunday")}</p>
                    <p className="mt-2 font-semibold text-primary">{t("hours.emergency")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="h-[720px] w-full overflow-hidden rounded-lg ">
                <Cal
                  namespace={namespace}
                  calLink={`${calUsername}/${eventType}`}
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
