import Link from "next/link"
import { Instagram, Linkedin, Youtube, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* About Indonesian Business Council */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold">About Indonesian Business Council</h3>
            <p className="mt-4 text-gray-600">
              The Indonesian Business Council is an association of Indonesia's business and industry leaders, committed
              to advancing the nation's competitiveness and long-term prosperity through strategic and effective public
              policy.
            </p>
          </div>

          {/* Research Team */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold">Research Team</h3>
            <p className="mt-4 text-gray-600">The IBC Institute</p>
            <p className="mt-1 text-gray-600 italic">Research. Collaboration. Impact</p>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://youtube.com" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://ibc-institute.id" className="text-gray-600 hover:text-gray-900">
                <Globe className="h-6 w-6" />
                <span className="sr-only">Website</span>
              </Link>
            </div>
            <p className="mt-4 text-gray-600">ibc-institute.id | business-council.id</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-lg bg-gray-50 p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 rounded-full border border-gray-200 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-gray-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              This report provides a quick analysis intended as an initial alert and insight for readers. It is
              synthesized from multiple sources and is not a comprehensive assessment. Readers are encouraged to conduct
              further analysis and verification to gain a deeper understanding. While efforts have been made to ensure
              accuracy, this report may contain errors, omissions, or imperfections. IBC assumes no liability for any
              decisions or actions taken based on this report, and readers are advised to exercise their own judgment
              and due diligence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
