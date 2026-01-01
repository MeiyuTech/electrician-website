import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function ServiceArea() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">服务地区</h2>
            <p className="text-pretty text-lg text-muted-foreground">我们自豪地为橙县及周边地区提供服务</p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="mb-6 text-2xl font-bold text-primary">橙县 (Orange County)</div>
              <p className="mb-6 text-muted-foreground">覆盖橙县所有城市，包括：</p>
              <div className="grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-3">
                <div>阿纳海姆 (Anaheim)</div>
                <div>尔湾 (Irvine)</div>
                <div>亨廷顿海滩 (Huntington Beach)</div>
                <div>圣安娜 (Santa Ana)</div>
                <div>新港滩 (Newport Beach)</div>
                <div>富勒顿 (Fullerton)</div>
                <div>科斯塔梅萨 (Costa Mesa)</div>
                <div>图斯汀 (Tustin)</div>
                <div>及更多地区...</div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-sm text-muted-foreground">不确定您的地区是否在服务范围内？请致电咨询！</p>
        </div>
      </div>
    </section>
  )
}
