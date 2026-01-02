"use client"

import { useEffect, type ComponentProps } from "react"
import { getCalApi } from "@calcom/embed-react"
import { Button } from "@/components/ui/button"

interface CalBookingButtonProps extends ComponentProps<typeof Button> {
  eventType: string
  label: string
  calUsername?: string
}

export function CalBookingButton({
  eventType,
  label,
  calUsername = "ca-electrician",
  ...buttonProps
}: CalBookingButtonProps) {
  useEffect(() => {
    if (calUsername === "YOUR_CAL_USERNAME") {
      return
    }

    ;(async () => {
      const cal = await getCalApi({ namespace: eventType })
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#f18600" },
          dark: { "cal-brand": "#f18600" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [eventType, calUsername])

  return (
    <Button
      type="button"
      data-cal-namespace={eventType}
      data-cal-link={`${calUsername}/${eventType}`}
      data-cal-config='{"layout":"month_view"}'
      {...buttonProps}
    >
      {label}
    </Button>
  )
}
