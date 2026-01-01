import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary-foreground"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
              <path d="M13 2 10 5" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-secondary">橙县电器维修</h1>
            <p className="text-xs text-muted-foreground">专业·快速·可靠</p>
          </div>
        </div>
        <Button className="gap-2" asChild>
          <a href="tel:9493004828">
            <Phone className="h-4 w-4" />
            立即致电
          </a>
        </Button>
      </div>
    </header>
  )
}
