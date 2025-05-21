import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">IBC Navigator</h1>
            <p className="text-sm text-gray-600 mt-1">
              Intelligence and Strategic Compass for Indonesia's Public and Private Sector
            </p>
          </div>
          <div>
            <Button variant="destructive" className="rounded-none">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
