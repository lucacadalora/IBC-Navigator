import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Bookmark, Printer, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

interface BulletinPageProps {
  params: {
    slug: string
  }
}

export default function BulletinPage({ params }: BulletinPageProps) {
  // This would normally come from a database or CMS
  const bulletinData = {
    title: "Premanisme: The Sub-National Achilles' Heel of Indonesia's Industrial Ambition",
    volume: "Vol.5",
    publishDate: "May 13, 2025",
    readTime: "15 min read",
    author: "Dr. Anindya Purnama",
    authorTitle: "Senior Researcher, IBC Institute",
    summary:
      "Premanisme acts as a 'shadow tax' on Indonesia's economy, inflating costs across manufacturing, logistics, and retail by 5–30%. Local extortion is now a national investment risk disrupting billion-dollar projects.",
    content: [
      "The term 'premanisme' in Indonesia refers to organized criminal activity that has evolved from street-level thuggery to a sophisticated system of extortion affecting businesses across the archipelago. This report examines how premanisme has become a significant barrier to Indonesia's industrial development goals.",
      "Our research, conducted across 15 provinces and involving interviews with over 200 business leaders, reveals that premanisme adds between 5% and 30% to operational costs in key sectors including manufacturing, logistics, retail, and construction. These 'shadow taxes' are particularly damaging to small and medium enterprises (SMEs) that lack the resources to navigate or resist such demands.",
      "The economic impact is substantial. We estimate that premanisme costs the Indonesian economy approximately $14.5 billion annually in direct costs and lost investment opportunities. Foreign investors increasingly cite security concerns and unofficial payments as factors in investment decisions, with several major projects delayed or canceled in the past 24 months due to these issues.",
      "Regional variations are significant. Urban industrial centers in Java face more sophisticated extortion schemes, often with tacit support from local officials, while resource-rich areas in Kalimantan and Sulawesi contend with premanisme groups that control access to land and transportation routes.",
      "The government's response has been inconsistent. While there have been successful crackdowns in some regions, in others, the deep connections between premanisme groups and local political structures have hampered enforcement efforts. The decentralization of power following the Reformasi era has inadvertently strengthened these local networks of extraction.",
      "For Indonesia to achieve its ambitious industrial development goals, addressing premanisme must become a national priority. This requires coordinated action across law enforcement, judicial reform, and business regulation. The economic benefits of reducing this 'shadow tax' would be substantial, potentially adding 1.2-1.8 percentage points to annual GDP growth.",
    ],
    recommendations: [
      "Establish a national task force specifically focused on business extortion",
      "Implement transparent reporting mechanisms for businesses to report extortion attempts without fear of reprisal",
      "Reform local security contracts and licensing to eliminate opportunities for rent-seeking",
      "Strengthen judicial processes for cases involving organized extortion of businesses",
      "Create special economic zones with enhanced security protocols and governance",
    ],
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Bulletins
          </Link>

          <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-medium mb-4">
            {bulletinData.volume}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{bulletinData.title}</h1>

          <div className="flex items-center mb-8">
            <Image
              src="/professional-headshot.png"
              alt={bulletinData.author}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{bulletinData.author}</p>
              <p className="text-gray-600 text-sm">{bulletinData.authorTitle}</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
            <div className="text-gray-600 text-sm">
              <span>{bulletinData.publishDate}</span>
              <span className="mx-2">•</span>
              <span>{bulletinData.readTime}</span>
            </div>
            <div className="flex space-x-4">
              <button aria-label="Share" className="text-gray-600 hover:text-gray-900">
                <Share2 className="h-5 w-5" />
              </button>
              <button aria-label="Save" className="text-gray-600 hover:text-gray-900">
                <Bookmark className="h-5 w-5" />
              </button>
              <button aria-label="Print" className="text-gray-600 hover:text-gray-900">
                <Printer className="h-5 w-5" />
              </button>
              <button aria-label="Download" className="text-gray-600 hover:text-gray-900">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xl font-medium mb-6">{bulletinData.summary}</p>

          <Image
            src="/placeholder-1ipys.png"
            alt="Article feature image"
            width={900}
            height={500}
            className="w-full h-auto mb-6"
          />

          <div className="prose prose-lg max-w-none">
            {bulletinData.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}

            <h2 className="text-2xl font-bold mt-8 mb-4">Policy Recommendations</h2>
            <ul className="list-disc pl-6 space-y-2">
              {bulletinData.recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Related Bulletins</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Image
                src="/ibc-bulletin-vol4-cover.png"
                alt="Related bulletin"
                width={350}
                height={200}
                className="w-full h-auto mb-3"
              />
              <h3 className="font-medium mb-1">
                <Link href="/bulletin/indonesia-ev-ecosystem" className="hover:text-gray-700">
                  Indonesia's EV Ecosystem in 2025
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">May 2025</p>
            </div>
            <div>
              <Image
                src="/ibc-bulletin-vol3a-cover.png"
                alt="Related bulletin"
                width={350}
                height={200}
                className="w-full h-auto mb-3"
              />
              <h3 className="font-medium mb-1">
                <Link href="/bulletin/us-tariff-impacts" className="hover:text-gray-700">
                  U.S. Tariff Impacts on Indonesia's Textile Sector
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">April 2025</p>
            </div>
            <div>
              <Image
                src="/ibc-bulletin-vol2-cover.png"
                alt="Related bulletin"
                width={350}
                height={200}
                className="w-full h-auto mb-3"
              />
              <h3 className="font-medium mb-1">
                <Link href="/bulletin/ai-disruption" className="hover:text-gray-700">
                  The Impending AI Disruption
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">March 2025</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to IBC Navigator</h2>
          <p className="mb-6 max-w-lg mx-auto">
            Get unlimited access to all our premium bulletins, including archives, data visualizations, and exclusive
            research.
          </p>
          <Button variant="destructive" className="rounded-none px-8">
            Subscribe Today
          </Button>
        </div>
      </article>
    </main>
  )
}
