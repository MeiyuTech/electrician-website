"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  eventType: string
}

export function BookingModal({ open, onOpenChange, eventType }: BookingModalProps) {
  const t = useTranslations("BookingModal")
  const calUsername: string = "ca-electrician"
  const calUrl = `https://cal.com/${calUsername}/${eventType}`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6">
          {calUsername === "YOUR_CAL_USERNAME" ? (
            <div className="flex items-center justify-center py-12 border rounded-lg bg-muted/30">
              <div className="text-center space-y-4 max-w-md px-4">
                <p className="text-muted-foreground">{t("setupPending")}</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">{t("stepsTitle")}</p>
                  <ol className="text-left space-y-2 list-decimal list-inside">
                    <li>
                      {t.rich("steps.createAccount", {
                        link: (chunks) => (
                          <a
                            href="https://cal.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            {chunks}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ),
                      })}
                    </li>
                    <li>
                      {t.rich("steps.createEventType", {
                        eventType,
                        code: (chunks) => <code className="bg-muted px-1 py-0.5 rounded text-xs">{chunks}</code>,
                      })}
                    </li>
                    <li>
                      {t.rich("steps.updateUsername", {
                        file: (chunks) => <code className="bg-muted px-1 py-0.5 rounded text-xs">{chunks}</code>,
                        placeholder: (chunks) => <code className="bg-muted px-1 py-0.5 rounded text-xs">{chunks}</code>,
                      })}
                    </li>
                    <li>{t("steps.connectCalendar")}</li>
                  </ol>
                  <div className="pt-2">
                    <Button size="sm" asChild>
                      <a href="https://cal.com/signup" target="_blank" rel="noopener noreferrer">
                        {t("setupCta")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-[600px] border rounded-lg overflow-hidden">
              <iframe
                src={`${calUrl}?embed=true`}
                width="100%"
                height="100%"
                frameBorder="0"
                title={t("iframeTitle")}
                allow="camera; microphone; fullscreen; display-capture"
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
