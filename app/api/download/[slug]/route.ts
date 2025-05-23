import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug

  // Map slug to PDF file path
  const pdfMap: Record<string, string> = {
    vol1: "ibc-bulletin-vol1-tariff-increases.pdf",
    vol2: "ibc-bulletin-vol2-ai-disruption.pdf",
    vol3: "ibc-bulletin-vol3a-us-tariff-impacts.pdf",
    vol4: "ibc-bulletin-vol4-indonesia-ev-ecosystem.pdf",
    vol5: "ibc-bulletin-vol5-premanisme.pdf",
  }

  const filename = pdfMap[slug]

  if (!filename) {
    return new NextResponse("PDF not found", { status: 404 })
  }

  const filePath = path.join(process.cwd(), "public", "pdfs", filename)

  try {
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error("Error reading PDF file:", error)
    return new NextResponse("Error reading PDF file", { status: 500 })
  }
}
