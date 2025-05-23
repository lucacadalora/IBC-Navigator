/**
 * Get the PDF file path for a specific bulletin volume
 * @param volume The volume number (e.g., "vol5")
 * @returns The path to the PDF file
 */
export function getBulletinPdfPath(volume: string): string {
  const pdfMap: Record<string, string> = {
    vol1: "/pdfs/ibc-bulletin-vol1-tariff-increases.pdf",
    vol2: "/pdfs/ibc-bulletin-vol2-ai-disruption.pdf",
    vol3: "/pdfs/ibc-bulletin-vol3a-us-tariff-impacts.pdf",
    vol4: "/pdfs/ibc-bulletin-vol4-indonesia-ev-ecosystem.pdf",
    vol5: "/pdfs/ibc-bulletin-vol5-premanisme.pdf",
  }

  return pdfMap[volume.toLowerCase()] || ""
}
