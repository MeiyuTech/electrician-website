export function Footer() {
  return (
    <footer className="border-t bg-secondary py-12 text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">橙县电器维修</h3>
            <p className="text-sm text-secondary-foreground/80">专业、快速、可靠的电器维修服务，服务橙县及周边地区。</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">服务项目</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>空调维修与安装</li>
              <li>冰箱维修</li>
              <li>洗衣机维修</li>
              <li>洗碗机安装</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">服务地区</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>橙县所有城市</li>
              <li>阿纳海姆</li>
              <li>尔湾</li>
              <li>亨廷顿海滩</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">联系方式</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>电话: (949) 300-4828</li>
              <li>邮箱: info@ocappliancerepair.com</li>
              <li>持证经营 · 保险齐全</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2026 橙县电器维修。保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}
