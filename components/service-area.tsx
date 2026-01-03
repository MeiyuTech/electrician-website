import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export function ServiceArea() {
  const t = useTranslations("ServiceArea")
  const cities = t.raw("cities") as string[]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("title")}</h2>
            <p className="text-pretty text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="mb-6 text-2xl font-bold text-primary">{t("regionTitle")}</div>
              <p className="mb-6 text-muted-foreground">{t("regionSubtitle")}</p>
              <div className="grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-3">
                {cities.map((city, index) => (
                  <div key={`${city}-${index}`}>{city}</div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-sm text-muted-foreground">{t("cta")}</p>
        </div>
      </div>
    </section>
  )
}
