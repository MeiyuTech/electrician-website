import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, DollarSign } from "lucide-react"
import { useTranslations } from "next-intl"

export function Pricing() {
  const t = useTranslations("Pricing")
  const visitFeeFeatures = t.raw("visitFeeFeatures") as string[]
  const acceptQuoteFeatures = t.raw("acceptQuoteFeatures") as string[]

  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("title")}</h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{t("visitFeeTitle")}</CardTitle>
              <div className="pt-4">
                <div className="text-4xl font-bold">{t("visitFeeAmount")}</div>
                <p className="text-sm text-muted-foreground">{t("visitFeePriceLabel")}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {visitFeeFeatures.map((feature, index) => (
                  <li key={`${feature}-${index}`} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                {t("visitFeeCta")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-primary/5">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">{t("acceptQuoteTitle")}</CardTitle>
              <div className="pt-4">
                <div className="text-4xl font-bold text-primary">{t("acceptQuoteAmount")}</div>
                <p className="text-sm text-muted-foreground">{t("acceptQuotePriceLabel")}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {acceptQuoteFeatures.map((feature, index) => (
                  <li key={`${feature}-${index}`} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{t("acceptQuoteCta")}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">{t("footnote")}</p>
        </div>
      </div>
    </section>
  )
}
