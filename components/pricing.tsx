import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, DollarSign } from "lucide-react"

export function Pricing() {
  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">透明的价格</h2>
          <p className="text-pretty text-lg text-muted-foreground">没有隐藏费用，明码标价</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">上门服务费</CardTitle>
              <div className="pt-4">
                <div className="text-4xl font-bold">$50</div>
                <p className="text-sm text-muted-foreground">一次性费用</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">专业技师上门诊断</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">详细问题评估</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">维修方案建议</span>
                </li>
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                预约诊断
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-primary/5">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">接受报价</CardTitle>
              <div className="pt-4">
                <div className="text-4xl font-bold text-primary">免费</div>
                <p className="text-sm text-muted-foreground">免除上门费</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">详细的维修报价</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">接受报价后免除上门费</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">专业维修服务</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">服务保证</span>
                </li>
              </ul>
              <Button className="w-full">立即预约</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * 上门费用于诊断和评估。如果您接受我们的维修报价，上门费将被免除。
          </p>
        </div>
      </div>
    </section>
  )
}
