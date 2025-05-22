"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo and title - smaller on mobile */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ibc-logo-2yCgyMX8kA2sLVlMI93vcG2SSSVu3Q.png"
                alt="IBC Institute Logo"
                width={100}
                height={50}
                className="w-[80px] md:w-[120px] h-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">IBC Navigator</h1>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                  Intelligence and Strategic Compass for Indonesia
                </p>
              </div>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="text-gray-600 hover:text-gray-900" aria-label="Search">
              <Search size={20} />
            </button>
            <Button variant="destructive" className="rounded-none text-xs md:text-sm px-2 md:px-4 py-1 md:py-2">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-gray-600 font-medium">
                Home
              </Link>
              <Link href="/archive" className="text-gray-800 hover:text-gray-600 font-medium">
                Archive
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-gray-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
