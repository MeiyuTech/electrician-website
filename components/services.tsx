import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AirVent, Refrigerator, WashingMachine, Utensils } from "lucide-react"
import { useTranslations } from "next-intl"

const serviceIcons = [AirVent, Refrigerator, WashingMachine, Utensils] as const

export function Services() {
  const t = useTranslations("Services")
  const services = t.raw("items") as Array<{
    title: string
    description: string
    features: string[]
    featured?: boolean
  }>

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("title")}</h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? AirVent

            return (
              <Card key={`${service.title}-${index}`} className={service.featured ? "border-primary bg-primary/5" : ""}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
