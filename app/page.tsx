import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
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
                alt="IBC Bulletin Vol.5 Cover - Premanisme in Indonesia"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/premanisme-the-sub-national-achilles-heel" className="hover:text-gray-700">
                    <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium mr-2">
                      Vol.5
                    </span>
                    May 2025
                    <br />
                    Premanisme: The Sub-National Achilles' Heel of Indonesia's Industrial Ambition
                  </Link>
                </h2>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  Premanisme acts as a "shadow tax" on Indonesia's economy, inflating costs across manufacturing,
                  logistics, and retail by 5–30%. Local extortion is now a national investment risk disrupting
                  billion-dollar projects.
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • Local extortion is now a national investment risk — disrupting billion-dollar projects like the
                      BYD EV plant in West Java.
                    </li>
                    <li>
                      • Rp 16 billion/month was lost to extortion at Tanjung Priok Port alone; similar losses are
                      replicated across key sectors and regions.
                    </li>
                    <li>
                      • Indonesia's high ICOR ({">"}6) reflects how inefficient capital becomes under extortion pressure
                      — more money spent for less growth.
                    </li>
                    <li>
                      • Investors compare locations — Indonesia's "shadow costs" make it less attractive than Vietnam,
                      Malaysia, or Thailand.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
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
                alt="IBC Bulletin Vol.4 Cover - Indonesia's EV Ecosystem"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/indonesia-ev-ecosystem" className="hover:text-gray-700">
                    <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium mr-2">
                      Vol.4
                    </span>
                    May 2025
                    <br />
                    Indonesia's EV Ecosystem in 2025: Progress and Regional Leadership Prospects
                  </Link>
                </h2>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  Comprehensive analysis of Indonesia's electric vehicle market growth with 151% YoY increase in BEV
                  sales, challenges in charging infrastructure, battery technology shifts, and regional competitiveness
                  factors.
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • Indonesia's EV sales hit record highs in 2024, with 43,188 battery electric vehicles (BEVs)
                      sold, a 151% increase from the previous year, yet penetration remains low at just 5% of total car
                      sales.
                    </li>
                    <li>
                      • Two-wheelers remain key to scale, with Indonesia projected to become the world's third-largest
                      electric two-wheeler market by 2030, reaching ~2 million units annually.
                    </li>
                    <li>
                      • Public charging infrastructure lags adoption: With only ~1,500 public charging stations
                      nationwide by 2024, Indonesia targets over 63,000 by 2030. PLN and VinFast each plan tens of
                      thousands more to support national electrification.
                    </li>
                    <li>
                      • Indonesia's nickel-driven EV battery advantage is at risk, as global automakers increasingly
                      shift to LFP (lithium iron phosphate) batteries, which don't require nickel, due to cost, safety,
                      and supply stability.
                    </li>
                  </ul>
                </div>
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
                alt="IBC Bulletin Vol.3A Cover - US Tariff Impacts"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/us-tariff-impacts" className="hover:text-gray-700">
                    <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium mr-2">
                      Vol.3A
                    </span>
                    April-May 2025
                    <br />
                    Evaluating the Impacts of U.S. Tariff Strategies on Indonesia's Textile and Footwear Sector
                  </Link>
                </h2>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  Analysis of potential GDP reduction, job losses, and policy interventions to mitigate negative impacts
                  on vulnerable populations.
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • A 32% U.S. tariff would reduce Indonesian GDP by 0.3-0.5% annually in the short term, with
                      partial recovery by 2030
                    </li>
                    <li>
                      • Advanced CGE simulations project that the textile and footwear sector could lose between 250,000
                      and 400,000 jobs, while a broader comparative scenario analysis—including indirect and multiplier
                      effects—suggests total losses could range from 480,000 to 650,000 jobs
                    </li>
                    <li>• Regional impacts are highly concentrated in West Java, Central Java, and Banten provinces</li>
                  </ul>
                </div>
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
                alt="IBC Bulletin Vol.2 Cover - AI Disruption"
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
                alt="IBC Bulletin Vol.1 Cover - Tariff Increases"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/tariff-increases" className="hover:text-gray-700">
                    <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium mr-2">
                      Vol.1
                    </span>
                    March-April 2025
                    <br />
                    Assessing Indonesian Industry in the Face of Trump's Tariff Increases
                  </Link>
                </h2>
              </div>
              <div className="mb-6">
                <p className="text-gray-700">
                  Comprehensive analysis of $27.9B US export market at risk with proposed 10-20% tariffs on imports and
                  impact on key sectors.
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • US slaps broad 10-20% tariffs—plus 25% on electronics and rubber—putting Indonesia squarely in
                      the trade-war crosshairs.
                    </li>
                    <li>
                      • $27.9 billion of Indonesian exports to the US, led by electronics (8.5%), palm oil (6.1%) and
                      seafood (5.6%), are suddenly at heightened risk.
                    </li>
                    <li>
                      • Rupiah tumbles to 16,578 while the Jakarta Composite Index is down 11% YTD, signalling mounting
                      market stress from the tariff shock.
                    </li>
                  </ul>
                </div>
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
        </div>
      </section>
    </main>
  )
}
