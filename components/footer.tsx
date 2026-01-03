import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Footer")
  const services = t.raw("services") as string[]
  const areas = t.raw("areas") as string[]

  return (
    <footer className="border-t bg-secondary py-12 text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("brandName")}</h3>
            <p className="text-sm text-secondary-foreground/80">{t("brandDescription")}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("servicesTitle")}</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              {services.map((service, index) => (
                <li key={`${service}-${index}`}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("areasTitle")}</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              {areas.map((area, index) => (
                <li key={`${area}-${index}`}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("contactTitle")}</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                {t("phoneLabel")}:{" "}
                <a href="tel:9493004828" className="hover:underline">
                  (949) 300-4828
                </a>
              </li>
              <li>
                {t("emailLabel")}:{" "}
                <a href="mailto:info@ca-electrician.com" className="hover:underline">
                  info@ca-electrician.com
                </a>
              </li>
              <li>{t("license")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
