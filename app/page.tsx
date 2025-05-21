import Header from "@/components/header"
import Highlights from "@/components/highlights"
import Introduction from "@/components/introduction"
import Section1 from "@/components/section1"
import Section2 from "@/components/section2"
import Section3 from "@/components/section3"
import Section4 from "@/components/section4"
import Section5 from "@/components/section5"
import Section6 from "@/components/section6"
import References from "@/components/references"
import MetricGrid from "@/components/metric-grid"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container max-w-5xl px-4 py-8">
        <Header />
        <Highlights />
        <MetricGrid />
        <Introduction />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <References />
        <Footer />
      </div>
    </main>
  )
}
