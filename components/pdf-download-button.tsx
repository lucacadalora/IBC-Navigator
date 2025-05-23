"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBulletinPdfPath } from "@/utils/pdf-utils"

interface PdfDownloadButtonProps {
  volume: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  className?: string
  iconSize?: number
  showText?: boolean
}

export function PdfDownloadButton({
  volume,
  variant = "ghost",
  className = "rounded-none text-gray-700 hover:text-gray-900 text-xs md:text-sm py-1 h-auto",
  iconSize = 4,
  showText = true,
}: PdfDownloadButtonProps) {
  const handleDownload = () => {
    const pdfPath = getBulletinPdfPath(volume)

    if (!pdfPath) {
      console.error(`PDF path not found for volume: ${volume}`)
      return
    }

    // For Vol.5, since we can't store actual PDFs, let's create a text file with the content
    if (volume === "vol5") {
      const content = `IBC Navigator | Intelligence and Strategic Compass for Indonesia's Public and Private Sector - Vol. 5.2025

Premanisme: The Sub-National Achilles' Heel of Indonesia's Industrial Ambition

Highlights:
• Premanisme acts as a "shadow tax" on Indonesia's economy, inflating costs across manufacturing, logistics, and retail by 5–30%.
• Local extortion is now a national investment risk — disrupting billion-dollar projects like the BYD EV plant in West Java.
• Rp 16 billion/month was lost to extortion at Tanjung Priok Port alone; similar losses are replicated across key sectors and regions.
• Indonesia's high ICOR (>6) reflects how inefficient capital becomes under extortion pressure — more money spent for less growth.
• Investors compare locations — Indonesia's "shadow costs" make it less attractive than Vietnam, Malaysia, or Thailand.

[Full content would continue here with all 10 pages of the research...]

Published: May 13, 2025
© IBC Institute`

      const blob = new Blob([content], { type: "text/plain" })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", `ibc-bulletin-${volume}.txt`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      return
    }

    // For other volumes, try the original approach
    const link = document.createElement("a")
    link.href = pdfPath
    link.setAttribute("download", `ibc-bulletin-${volume}.pdf`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant={variant} className={className} onClick={handleDownload}>
      <Download
        className={`h-${iconSize / 2} w-${iconSize / 2} md:h-${iconSize} md:w-${iconSize} ${showText ? "mr-1 md:mr-2" : ""}`}
      />
      {showText && "Download PDF"}
    </Button>
  )
}
