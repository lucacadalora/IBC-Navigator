import Image from "next/image"
import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">IBC Bulletin</h1>
        </div>

        <div className="bg-gray-100 p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/ibc-bulletin-vol5-cover.png"
                alt="IBC Bulletin Vol.5 Cover"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
              <div className="mt-4">
                <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium">Vol.5</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-6">
                <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">CURRENT ISSUE</span>
                <h2 className="text-3xl font-bold mt-2 mb-1">May 2025</h2>
                <p className="text-gray-700">
                  Discover the latest analysis and insights on international business trends affecting Indonesia.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="uppercase text-gray-500 text-sm font-medium tracking-wider mb-3">FEATURING</h3>
                <ul className="space-y-3">
                  <li className="text-gray-900 hover:text-gray-700">
                    <Link href="/bulletin/premanisme-the-sub-national-achilles-heel">
                      Premanisme: The Sub-National Achilles' Heel of Indonesia's Industrial Ambition
                    </Link>
                  </li>
                  <li className="text-gray-900 hover:text-gray-700 text-sm text-gray-500 mt-1">
                    Published: 13 May, 2025
                  </li>
                  <li className="text-gray-600 mt-2 text-sm">
                    Premanisme acts as a "shadow tax" on Indonesia's economy, inflating costs across manufacturing,
                    logistics, and retail by 5–30%. Local extortion is now a national investment risk disrupting
                    billion-dollar projects.
                  </li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" className="rounded-none border-black text-black hover:bg-gray-100">
                  Table of Contents
                </Button>
                <Link href="/bulletin/premanisme-the-sub-national-achilles-heel">
                  <Button variant="default" className="rounded-none bg-gray-900 hover:bg-gray-800">
                    Read Now
                  </Button>
                </Link>
                <Button variant="ghost" className="rounded-none text-gray-700 hover:text-gray-900">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">The Archive</h2>
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search bulletins"
                className="pl-4 pr-4 py-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8 mb-12">
            <div className="md:col-span-1">
              <Image
                src="/ibc-bulletin-vol4-cover.png"
                alt="IBC Bulletin Vol.4 Cover"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
              <div className="mt-4">
                <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium">Vol.4</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/indonesia-ev-ecosystem" className="hover:text-gray-700">
                    Indonesia's EV Ecosystem in 2025: Progress and Regional Leadership Prospects
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm">Published: 5 May, 2025</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  Comprehensive analysis of Indonesia's electric vehicle market growth with 151% YoY increase in BEV
                  sales, challenges in charging infrastructure, battery technology shifts, and regional competitiveness
                  factors.
                </p>
              </div>

              <div className="flex space-x-4">
                <Link href="/bulletin/indonesia-ev-ecosystem">
                  <Button variant="default" className="rounded-none bg-gray-900 hover:bg-gray-800">
                    Read Now
                  </Button>
                </Link>
                <Button variant="ghost" className="rounded-none text-gray-700 hover:text-gray-900">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8 mb-12">
            <div className="md:col-span-1">
              <Image
                src="/ibc-bulletin-vol3a-cover.png"
                alt="IBC Bulletin Vol.3A Cover"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
              <div className="mt-4">
                <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium">Vol.3A</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/us-tariff-impacts" className="hover:text-gray-700">
                    Evaluating the Impacts of U.S. Tariff Strategies on Indonesia's Textile and Footwear Sector
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm">Published: 5 April, 2025</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  Analysis of potential GDP reduction, job losses, and policy interventions to mitigate negative impacts
                  on vulnerable populations.
                </p>
              </div>

              <div className="flex space-x-4">
                <Link href="/bulletin/us-tariff-impacts">
                  <Button variant="default" className="rounded-none bg-gray-900 hover:bg-gray-800">
                    Read Now
                  </Button>
                </Link>
                <Button variant="ghost" className="rounded-none text-gray-700 hover:text-gray-900">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8 mb-12">
            <div className="md:col-span-1">
              <Image
                src="/ibc-bulletin-vol2-cover.png"
                alt="IBC Bulletin Vol.2 Cover"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/ai-disruption" className="hover:text-gray-700">
                    <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium mr-2">
                      Vol.2
                    </span>
                    March-April 2025
                    <br />
                    Too Big to Miss, Too Late to Wait – The Impending AI Disruption and a Wake-Up Call for Indonesia
                  </Link>
                </h2>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  Strategic analysis of AI adoption and policy recommendations for strengthening Indonesia's position in
                  the rapidly evolving tech landscape.
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • Indonesia ranks 42nd globally in AI readiness, behind Singapore (2nd) and Malaysia (23rd).
                    </li>
                    <li>
                      • AI to add $366B to Indonesia's economy by 2030, part of $1T regional growth and $15.7T global
                      growth.
                    </li>
                    <li>• Strategic AI implementation shows 30-45% productivity gains in enabled sectors.</li>
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link href="/bulletin/ai-disruption">
                  <Button variant="default" className="rounded-none bg-gray-900 hover:bg-gray-800">
                    Read Now
                  </Button>
                </Link>
                <Button variant="ghost" className="rounded-none text-gray-700 hover:text-gray-900">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8 mb-12">
            <div className="md:col-span-1">
              <Image
                src="/ibc-bulletin-vol1-cover.png"
                alt="IBC Bulletin Vol.1 Cover"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
              <div className="mt-4">
                <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium">Vol.1</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/tariff-increases" className="hover:text-gray-700">
                    Assessing Indonesian Industry in the Face of Trump's Tariff Increases
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm">Published: 8 March, 2025</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  Comprehensive analysis of $27.9B US export market at risk with proposed 10-20% tariffs on imports and
                  impact on key sectors.
                </p>
              </div>

              <div className="flex space-x-4">
                <Link href="/bulletin/tariff-increases">
                  <Button variant="default" className="rounded-none bg-gray-900 hover:bg-gray-800">
                    Read Now
                  </Button>
                </Link>
                <Button variant="ghost" className="rounded-none text-gray-700 hover:text-gray-900">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-none border-black text-black hover:bg-gray-100">
              View All Bulletins
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to IBC Navigator</h2>
            <p className="text-gray-700 mb-8">
              Get exclusive access to premium intelligence reports, strategic analysis, and insights on Indonesia's
              business landscape.
            </p>
            <Button variant="destructive" className="rounded-none px-8 py-6 text-lg">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About IBC</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-600 hover:text-gray-900">
                    Research Team
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
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/research" className="text-gray-600 hover:text-gray-900">
                    Custom Research
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="text-gray-600 hover:text-gray-900">
                    Strategic Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/events" className="text-gray-600 hover:text-gray-900">
                    Executive Briefings
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/bulletins" className="text-gray-600 hover:text-gray-900">
                    Bulletins Archive
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-gray-600 hover:text-gray-900">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/data" className="text-gray-600 hover:text-gray-900">
                    Data & Visuals
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
            <p>© 2025 IBC Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
