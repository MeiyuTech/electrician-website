import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AirVent, Refrigerator, WashingMachine, Utensils } from "lucide-react"

const services = [
  {
    icon: AirVent,
    title: "空调维修与安装",
    description: "专业的空调维修、安装、保养服务。我们处理各种品牌的中央空调和分体式空调系统。",
    features: ["维修与诊断", "安装新系统", "定期保养", "24/7紧急服务"],
    featured: true,
  },
  {
    icon: Refrigerator,
    title: "冰箱维修",
    description: "快速诊断和修复冰箱问题，包括制冷故障、漏水、噪音等各类问题。",
    features: ["制冷系统维修", "温控修复", "密封条更换", "压缩机维修"],
  },
  {
    icon: WashingMachine,
    title: "洗衣机维修",
    description: "修复各种洗衣机问题，包括不排水、不转动、漏水等常见故障。",
    features: ["排水系统", "电机维修", "控制面板", "零件更换"],
  },
  {
    icon: Utensils,
    title: "洗碗机安装与维修",
    description: "专业的洗碗机安装和维修服务，确保您的洗碗机正常运行。",
    features: ["新机安装", "漏水修复", "清洗系统", "电路检查"],
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">我们的服务</h2>
          <p className="text-pretty text-lg text-muted-foreground">提供全方位的电器维修与安装服务</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className={service.featured ? "border-primary bg-primary/5" : ""}>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <service.icon className="h-6 w-6" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
