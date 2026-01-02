"use client"

import { CheckCircle2 } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                专业电器维修服务
              </h2>
              <p className="text-pretty text-lg text-secondary-foreground/80 md:text-xl">
                服务橙县地区，提供快速、可靠的电器维修与安装服务
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>持证专业技师</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>同日服务</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>价格透明</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>服务保证</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CalBookingButton size="lg" className="text-base" eventType="on-site-electrical-service" label="上门预约" />
              <CalBookingButton
                size="lg"
                variant="outline"
                className="text-base border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
                eventType="service-inquiry-message-only"
                label="留言咨询"
              />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-muted">
              <img
                src="/professional-technician-repairing-air-conditioning.jpg"
                alt="专业技师维修空调"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
