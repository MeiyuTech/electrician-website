"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const calUsername = "YOUR_CAL_USERNAME"
  const eventType = "appliance-repair"
  const calUrl = `https://cal.com/${calUsername}/${eventType}`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>预约电器维修服务</DialogTitle>
          <DialogDescription>选择您方便的时间，我们将为您提供专业的电器维修服务</DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6">
          {calUsername === "YOUR_CAL_USERNAME" ? (
            <div className="flex items-center justify-center py-12 border rounded-lg bg-muted/30">
              <div className="text-center space-y-4 max-w-md px-4">
                <p className="text-muted-foreground">Cal.com 预约系统准备中...</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">设置步骤：</p>
                  <ol className="text-left space-y-2 list-decimal list-inside">
                    <li>
                      前往{" "}
                      <a
                        href="https://cal.com/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Cal.com
                        <ExternalLink className="h-3 w-3" />
                      </a>{" "}
                      注册免费账号
                    </li>
                    <li>创建名为 "appliance-repair" 的活动类型（30分钟维修咨询）</li>
                    <li>
                      在 <code className="bg-muted px-1 py-0.5 rounded text-xs">components/booking-modal.tsx</code> 中将{" "}
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">YOUR_CAL_USERNAME</code> 替换为您的用户名
                    </li>
                    <li>连接 Google Calendar 以自动同步您的空闲时间</li>
                  </ol>
                  <div className="pt-2">
                    <Button size="sm" asChild>
                      <a href="https://cal.com/signup" target="_blank" rel="noopener noreferrer">
                        前往 Cal.com 设置
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
                title="预约服务"
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
