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
  const pdfPath = getBulletinPdfPath(volume)

  const handleDownload = () => {
    // If we're in the browser, create a download link
    if (typeof window !== "undefined") {
      const link = document.createElement("a")
      link.href = pdfPath
      link.setAttribute("download", `ibc-bulletin-${volume}.pdf`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
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
