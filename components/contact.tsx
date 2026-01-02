"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Calendar } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { BookingModal } from "./booking-modal"

export function Contact() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const eventType = "on-site-electrical-service"
  const isMobile = useIsMobile()
  const calUsername = "ca-electrician"

  const handleBooking = () => {
    if (isMobile) {
      window.location.href = `https://cal.com/${calUsername}/${eventType}`
      return
    }

    setBookingOpen(true)
  }

  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">联系我们</h2>
          <p className="text-pretty text-lg text-muted-foreground">随时与我们联系，我们将尽快回复</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold">在线预约</h3>
                  <p className="text-sm text-muted-foreground mb-3">选择您方便的时间，查看实时可用时段</p>
                  <Button onClick={handleBooking} size="sm">
                    立即预约
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">电话</h3>
                  <p className="text-sm text-muted-foreground">致电预约服务</p>
                  <a href="tel:9493004828" className="mt-2 block text-lg font-semibold text-primary hover:underline">
                    9493004828
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
                  <h3 className="mb-1 font-semibold">邮箱</h3>
                  <p className="text-sm text-muted-foreground">发送邮件咨询</p>
                  <a
                    href="mailto:info@ca-electrician.com"
                    className="mt-2 block text-primary hover:underline"
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
                  <h3 className="mb-1 font-semibold">营业时间</h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>周一至周五：8:00 AM - 8:00 PM</p>
                    <p>周六：9:00 AM - 6:00 PM</p>
                    <p>周日：10:00 AM - 4:00 PM</p>
                    <p className="mt-2 font-semibold text-primary">提供紧急服务</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    姓名 *
                  </label>
                  <Input id="name" placeholder="您的姓名" required />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    电话 *
                  </label>
                  <Input id="phone" type="tel" placeholder="(714) 555-0123" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    邮箱
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    留言 *
                  </label>
                  <Textarea id="message" placeholder="请描述您的电器问题..." rows={4} required />
                </div>
                <Button type="submit" className="w-full">
                  提交预约
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} eventType={eventType} />
    </section>
  )
}
