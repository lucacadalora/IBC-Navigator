"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Bookmark, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { SubscriptionModal } from "@/components/subscription-modal"
import { useState } from "react"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  // This would normally come from a database or CMS
  const articleData = {
    title: "Lean Strategy Making",
    subtitle: "How to dramatically improve decision-making and performance",
    author: "Jane Smith",
    authorTitle: "Professor of Strategy, Harvard Business School",
    publishDate: "May 12, 2025",
    readTime: "12 min read",
    summary:
      "In today's fast-paced business environment, traditional strategic planning processes are often too slow and rigid. Learn how leading companies are adopting lean strategy making to stay agile and competitive.",
    content: [
      "In the rapidly evolving business landscape, traditional strategic planning processes—annual cycles, thick binders of analysis, and rigid implementation plans—are increasingly out of step with the pace of change. Organizations need a more agile, responsive approach to strategy making that can adapt to shifting market conditions while maintaining coherence and direction.",
      "Lean strategy making draws inspiration from lean manufacturing principles but applies them to the realm of strategic decision-making. Just as lean manufacturing seeks to eliminate waste and improve flow in production processes, lean strategy making aims to streamline strategic planning, reduce bureaucratic overhead, and create a more responsive strategic posture.",
      "The core principles of lean strategy making include:",
      "1. Continuous iteration rather than annual planning cycles",
      "2. Hypothesis-driven experimentation rather than exhaustive analysis",
      "3. Distributed decision-making rather than top-down directives",
      "4. Real-time feedback rather than lagging indicators",
      "5. Adaptive implementation rather than rigid execution",
      "Companies that have adopted lean strategy making report significant improvements in their ability to respond to market changes, identify emerging opportunities, and align their organizations around strategic priorities. However, the transition from traditional to lean strategy making is not without challenges.",
    ],
  }

  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/magazine" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Magazine
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{articleData.title}</h1>
          <p className="text-xl text-gray-700 mb-6">{articleData.subtitle}</p>

          <div className="flex items-center mb-8">
            <Image
              src="/professional-headshot.png"
              alt={articleData.author}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{articleData.author}</p>
              <p className="text-gray-600 text-sm">{articleData.authorTitle}</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
            <div className="text-gray-600 text-sm">
              <span>{articleData.publishDate}</span>
              <span className="mx-2">•</span>
              <span>{articleData.readTime}</span>
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
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xl font-medium mb-6">{articleData.summary}</p>

          <Image
            src="/diverse-business-meeting.png"
            alt="Article feature image"
            width={900}
            height={500}
            className="w-full h-auto mb-6"
          />

          <div className="prose prose-lg max-w-none">
            {articleData.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Image
                src="/placeholder.svg?height=200&width=350&query=business meeting"
                alt="Related article"
                width={350}
                height={200}
                className="w-full h-auto mb-3"
              />
              <h3 className="font-medium mb-1">
                <Link href="/article/psychological-safety" className="hover:text-gray-700">
                  What People Get Wrong About Psychological Safety
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">May 2025</p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=350&query=leadership team"
                alt="Related article"
                width={350}
                height={200}
                className="w-full h-auto mb-3"
              />
              <h3 className="font-medium mb-1">
                <Link href="/article/strategic-genius" className="hover:text-gray-700">
                  The Strategic Genius of Modern Leadership
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">April 2025</p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=350&query=innovation workshop"
                alt="Related article"
                width={350}
                height={200}
                className="w-full h-auto mb-3"
              />
              <h3 className="font-medium mb-1">
                <Link href="/article/innovation-culture" className="hover:text-gray-700">
                  Building an Innovation Culture That Lasts
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">February 2025</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Business Insights</h2>
          <p className="mb-6 max-w-lg mx-auto">
            Get unlimited access to all our premium content, including archives, webinars, and exclusive research.
          </p>
          <Button variant="destructive" className="rounded-none px-8" onClick={() => setIsSubscriptionModalOpen(true)}>
            Subscribe Today
          </Button>
        </div>
      </article>
      <SubscriptionModal isOpen={isSubscriptionModalOpen} onClose={() => setIsSubscriptionModalOpen(false)} />
    </main>
  )
}
