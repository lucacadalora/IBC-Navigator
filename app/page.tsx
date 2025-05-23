"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { SubscriptionModal } from "@/components/subscription-modal"
import { PdfDownloadButton } from "@/components/pdf-download-button"

export default function Home() {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="bg-gray-100 p-4 md:p-8 mb-8 md:mb-16">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-1">
              <Image
                src="/ibc-bulletin-vol5-cover.png"
                alt="IBC Bulletin Vol.5 Cover - Premanisme in Indonesia"
                width={400}
                height={500}
                className="w-full h-auto border border-gray-300 mx-auto md:mx-0 max-w-[250px] md:max-w-full"
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-3 md:mb-4">
                <h2 className="text-xl md:text-2xl font-bold mt-2 mb-1">
                  <Link href="/bulletin/premanisme-the-sub-national-achilles-heel" className="hover:text-gray-700">
                    <span className="inline-block bg-gray-800 text-white px-2 py-0.5 text-xs md:text-sm font-medium mr-2">
                      Vol.5
                    </span>
                    May 2025
                    <br />
                    Premanisme: The Sub-National Achilles' Heel of Indonesia's Industrial Ambition
                  </Link>
                </h2>
              </div>

              <div className="mb-4 md:mb-6">
                <p className="text-sm md:text-base text-gray-700">
                  Premanisme acts as a "shadow tax" on Indonesia's economy, inflating costs across manufacturing,
                  logistics, and retail by 5–30%. Local extortion is now a national investment risk disrupting
                  billion-dollar projects.
                </p>

                <div className="mt-3 md:mt-4">
                  <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Highlights</h3>
                  <ul className="space-y-1 text-xs md:text-sm">
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

              <div className="flex flex-wrap gap-3 md:space-x-4">
                <Link href="/bulletin/premanisme-the-sub-national-achilles-heel">
                  <Button
                    variant="default"
                    className="rounded-none bg-gray-900 hover:bg-gray-800 text-xs md:text-sm py-1 h-auto"
                  >
                    Read Now
                  </Button>
                </Link>
                <PdfDownloadButton volume="vol5" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">The Archive</h2>
            <div className="relative w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search bulletins"
                  className="pl-10 pr-4 py-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Archive items - making them more responsive */}
          {[
            {
              image: "/ibc-bulletin-vol4-cover.png",
              alt: "IBC Bulletin Vol.4 Cover - Indonesia's EV Ecosystem",
              volume: "Vol.4",
              date: "May 2025",
              title: "Indonesia's EV Ecosystem in 2025: Progress and Regional Leadership Prospects",
              description:
                "Comprehensive analysis of Indonesia's electric vehicle market growth with 151% YoY increase in BEV sales, challenges in charging infrastructure, battery technology shifts, and regional competitiveness factors.",
              highlights: [
                "Indonesia's EV sales hit record highs in 2024, with 43,188 battery electric vehicles (BEVs) sold, a 151% increase from the previous year, yet penetration remains low at just 5% of total car sales.",
                "Two-wheelers remain key to scale, with Indonesia projected to become the world's third-largest electric two-wheeler market by 2030, reaching ~2 million units annually.",
                "Public charging infrastructure lags adoption: With only ~1,500 public charging stations nationwide by 2024, Indonesia targets over 63,000 by 2030. PLN and VinFast each plan tens of thousands more to support national electrification.",
                "Indonesia's nickel-driven EV battery advantage is at risk, as global automakers increasingly shift to LFP (lithium iron phosphate) batteries, which don't require nickel, due to cost, safety, and supply stability.",
              ],
              link: "/bulletin/indonesia-ev-ecosystem",
            },
            {
              image: "/ibc-bulletin-vol3a-cover.png",
              alt: "IBC Bulletin Vol.3A Cover - US Tariff Impacts",
              volume: "Vol.3A",
              date: "April-May 2025",
              title: "Evaluating the Impacts of U.S. Tariff Strategies on Indonesia's Textile and Footwear Sector",
              description:
                "Analysis of potential GDP reduction, job losses, and policy interventions to mitigate negative impacts on vulnerable populations.",
              highlights: [
                "A 32% U.S. tariff would reduce Indonesian GDP by 0.3-0.5% annually in the short term, with partial recovery by 2030",
                "Advanced CGE simulations project that the textile and footwear sector could lose between 250,000 and 400,000 jobs, while a broader comparative scenario analysis—including indirect and multiplier effects—suggests total losses could range from 480,000 to 650,000 jobs",
                "Regional impacts are highly concentrated in West Java, Central Java, and Banten provinces",
              ],
              link: "/bulletin/us-tariff-impacts",
            },
            {
              image: "/ibc-bulletin-vol2-cover.png",
              alt: "IBC Bulletin Vol.2 Cover - AI Disruption",
              volume: "Vol.2",
              date: "March-April 2025",
              title: "Too Big to Miss, Too Late to Wait – The Impending AI Disruption and a Wake-Up Call for Indonesia",
              description:
                "Strategic analysis of AI adoption and policy recommendations for strengthening Indonesia's position in the rapidly evolving tech landscape.",
              highlights: [
                "Indonesia ranks 42nd globally in AI readiness, behind Singapore (2nd) and Malaysia (23rd).",
                "AI to add $366B to Indonesia's economy by 2030, part of $1T regional growth and $15.7T global growth.",
                "Strategic AI implementation shows 30-45% productivity gains in enabled sectors.",
              ],
              link: "/bulletin/ai-disruption",
            },
            {
              image: "/ibc-bulletin-vol1-cover.png",
              alt: "IBC Bulletin Vol.1 Cover - Tariff Increases",
              volume: "Vol.1",
              date: "March-April 2025",
              title: "Assessing Indonesian Industry in the Face of Trump's Tariff Increases",
              description:
                "Comprehensive analysis of $27.9B US export market at risk with proposed 10-20% tariffs on imports and impact on key sectors.",
              highlights: [
                "US slaps broad 10-20% tariffs—plus 25% on electronics and rubber—putting Indonesia squarely in the trade-war crosshairs.",
                "$27.9 billion of Indonesian exports to the US, led by electronics (8.5%), palm oil (6.1%) and seafood (5.6%), are suddenly at heightened risk.",
                "Rupiah tumbles to 16,578 while the Jakarta Composite Index is down 11% YTD, signalling mounting market stress from the tariff shock.",
              ],
              link: "/bulletin/tariff-increases",
            },
          ].map((bulletin, index) => (
            <div
              key={index}
              className="grid md:grid-cols-3 gap-4 md:gap-8 border-t border-gray-200 pt-6 md:pt-8 mb-8 md:mb-12"
            >
              <div className="md:col-span-1">
                <Image
                  src={bulletin.image || "/placeholder.svg"}
                  alt={bulletin.alt}
                  width={400}
                  height={500}
                  className="w-full h-auto border border-gray-300 mx-auto md:mx-0 max-w-[200px] md:max-w-full"
                />
              </div>
              <div className="md:col-span-2">
                <div className="mb-3 md:mb-4">
                  <h2 className="text-lg md:text-2xl font-bold mt-2 mb-1">
                    <Link href={bulletin.link} className="hover:text-gray-700">
                      <span className="inline-block bg-gray-800 text-white px-2 py-0.5 text-xs md:text-sm font-medium mr-2">
                        {bulletin.volume}
                      </span>
                      {bulletin.date}
                      <br />
                      {bulletin.title}
                    </Link>
                  </h2>
                </div>

                <div className="mb-4 md:mb-6">
                  <p className="text-sm md:text-base text-gray-700">{bulletin.description}</p>

                  <div className="mt-3 md:mt-4">
                    <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Highlights</h3>
                    <ul className="space-y-1 text-xs md:text-sm">
                      {bulletin.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 md:space-x-4">
                  <Link href={bulletin.link}>
                    <Button
                      variant="default"
                      className="rounded-none bg-gray-900 hover:bg-gray-800 text-xs md:text-sm py-1 h-auto"
                    >
                      Read Now
                    </Button>
                  </Link>
                  <PdfDownloadButton volume={bulletin.volume.toLowerCase().replace(".", "").replace("/", "")} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Subscribe to IBC Navigator</h2>
            <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8">
              Get unlimited access to all our premium bulletins, including archives, data visualizations, and exclusive
              research.
            </p>
            <Button
              variant="destructive"
              className="rounded-none px-6 md:px-8 py-2 md:py-6 text-sm md:text-lg"
              onClick={() => setIsSubscriptionModalOpen(true)}
            >
              Subscribe Today
            </Button>
          </div>
        </div>
      </section>

      <SubscriptionModal isOpen={isSubscriptionModalOpen} onClose={() => setIsSubscriptionModalOpen(false)} />
    </main>
  )
}
