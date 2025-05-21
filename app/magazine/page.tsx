import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"

export default function MagazinePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">The Magazine</h1>
          <Button variant="destructive" className="rounded-none">
            Subscribe Today
          </Button>
        </div>

        <div className="bg-gray-100 p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/placeholder.svg?height=500&width=400&query=business magazine cover with strategy theme and red string between hands"
                alt="Current Magazine Cover"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-6">
                <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">CURRENT ISSUE</span>
                <h2 className="text-3xl font-bold mt-2 mb-1">May–June 2025</h2>
                <p className="text-gray-700">
                  A Better Way to Make Strategy: How to dramatically improve decision-making and performance.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="uppercase text-gray-500 text-sm font-medium tracking-wider mb-3">FEATURING</h3>
                <ul className="space-y-3">
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/lean-strategy">Lean Strategy Making</Link>
                  </li>
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/psychological-safety">What People Get Wrong About Psychological Safety</Link>
                  </li>
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/wnba">
                      The Commissioner of the WNBA on Transforming the League Ahead of a Breakout Season
                    </Link>
                  </li>
                </ul>
              </div>

              <Button variant="outline" className="rounded-none border-black text-black hover:bg-gray-100">
                Table of Contents
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">The Archive</h2>
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Find a specific article" className="pl-10 rounded-none border-gray-300 w-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8 mb-12">
            <div className="md:col-span-1">
              <Image
                src="/placeholder.svg?height=500&width=400&query=business magazine cover with strategic success theme and blue illustration"
                alt="Archive Magazine Cover"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mt-2 mb-1">March–April 2025</h2>
                <p className="text-gray-700">
                  The Seven Essential Elements of Strategic Success: How to maximize value for all your stakeholders
                </p>
              </div>

              <div className="mb-6">
                <h3 className="uppercase text-gray-500 text-sm font-medium tracking-wider mb-3">FEATURING</h3>
                <ul className="space-y-3">
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/women-workplace">How Women Can Win in the Workplace</Link>
                  </li>
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/low-cost-operators">The Secrets of Extraordinary Low-Cost Operators</Link>
                  </li>
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/strategic-genius">The Strategic Genius of Modern Leadership</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8 mb-12">
            <div className="md:col-span-1">
              <Image
                src="/placeholder.svg?height=500&width=400&query=business magazine cover with innovation theme and green elements"
                alt="Archive Magazine Cover"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mt-2 mb-1">January–February 2025</h2>
                <p className="text-gray-700">
                  Innovation at Scale: How leading organizations build sustainable innovation engines
                </p>
              </div>

              <div className="mb-6">
                <h3 className="uppercase text-gray-500 text-sm font-medium tracking-wider mb-3">FEATURING</h3>
                <ul className="space-y-3">
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/innovation-culture">Building an Innovation Culture That Lasts</Link>
                  </li>
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/ai-transformation">AI Transformation: Beyond the Hype</Link>
                  </li>
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/article/sustainable-growth">The New Rules of Sustainable Growth</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-600 hover:text-gray-900">
                    Editorial Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Subscription</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/subscribe" className="text-gray-600 hover:text-gray-900">
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link href="/gift" className="text-gray-600 hover:text-gray-900">
                    Gift a Subscription
                  </Link>
                </li>
                <li>
                  <Link href="/corporate" className="text-gray-600 hover:text-gray-900">
                    Corporate Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="text-gray-600 hover:text-gray-900">
                    Copyright Notice
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-600">
            <p>© 2025 Business Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
