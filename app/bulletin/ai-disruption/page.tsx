"use client"

import * as React from "react"
import { useState } from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import {
  Eye,
  Sparkles,
  Brain,
  BotIcon as Robot,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShoppingCart,
  Factory,
  BarChart3,
  Droplet,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  AlertTriangle,
} from "lucide-react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-white shadow-sm", className)} {...props} />
))
Card.displayName = "Card"

const Tabs = TabsPrimitive.Root
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground",
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", className)}
    {...props}
  />
)

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className)}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

function AiEvolution() {
  const [activePhase, setActivePhase] = useState<string | null>(null)
  const phases = [
    {
      id: "perception",
      year: "2015-2020",
      title: "Perception AI",
      icon: <Eye className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
      color: "bg-pro-lightblue",
      iconColor: "text-pro-blue",
      borderColor: "border-pro-blue",
      textColor: "text-pro-navy",
      description:
        "Computer vision and speech recognition systems that could perceive and interpret visual and audio data.",
    },
    {
      id: "generative",
      year: "2020-2025",
      title: "Generative AI",
      icon: <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
      color: "bg-pro-lightblue",
      iconColor: "text-pro-blue",
      borderColor: "border-pro-blue",
      textColor: "text-pro-navy",
      description:
        "Systems that translate between modalities like text to image and image to text, creating new content.",
    },
    {
      id: "agentic",
      year: "2022-2025",
      title: "Agentic AI",
      icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
      color: "bg-pro-lightblue",
      iconColor: "text-pro-blue",
      borderColor: "border-pro-blue",
      textColor: "text-pro-navy",
      description:
        "AI with the ability to perceive context, reason, plan, and take autonomous action to achieve goals.",
    },
    {
      id: "physical",
      year: "2025-",
      title: "Physical AI",
      icon: <Robot className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
      color: "bg-pro-lightblue",
      iconColor: "text-pro-blue",
      borderColor: "border-pro-blue",
      textColor: "text-pro-navy",
      description:
        "AI systems that understand and interact with the physical world, enabling advanced robotics and automation.",
    },
  ]

  return (
    <Card className="p-4 sm:p-6 border-pro-blue mb-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-pro-navy">The Evolution of AI</h3>
      <div className="relative h-64 sm:h-80 mb-16 hidden sm:block">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 240" preserveAspectRatio="none">
          <path d="M 50,200 C 200,180 400,100 750,20" stroke="#E5E7EB" strokeWidth="4" fill="none" />
        </svg>
        <div className="absolute bottom-10 left-[5%]">
          <div
            className={`relative ${activePhase === "perception" ? "z-20" : "z-10"}`}
            onMouseEnter={() => setActivePhase("perception")}
            onMouseLeave={() => setActivePhase(null)}
          >
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${phases[0].color} flex items-center justify-center cursor-pointer border-2 ${phases[0].borderColor} transition-all duration-200 ${activePhase === "perception" ? "scale-110 shadow-md" : ""}`}
            >
              <div className={phases[0].iconColor}>{phases[0].icon}</div>
            </div>
            <div className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <div className={`${phases[0].textColor} font-medium text-sm md:text-base`}>{phases[0].title}</div>
              <div className="text-xs text-pro-gray">{phases[0].year}</div>
            </div>
            {activePhase === "perception" && (
              <div
                className={`absolute top-24 left-1/2 -translate-x-1/2 w-40 md:w-48 p-2 md:p-3 rounded-lg shadow-lg ${phases[0].color} border ${phases[0].borderColor} text-xs md:text-sm`}
              >
                {phases[0].description}
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-20 left-[30%]">
          <div
            className={`relative ${activePhase === "generative" ? "z-20" : "z-10"}`}
            onMouseEnter={() => setActivePhase("generative")}
            onMouseLeave={() => setActivePhase(null)}
          >
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${phases[1].color} flex items-center justify-center cursor-pointer border-2 ${phases[1].borderColor} transition-all duration-200 ${activePhase === "generative" ? "scale-110 shadow-md" : ""}`}
            >
              <div className={phases[1].iconColor}>{phases[1].icon}</div>
            </div>
            <div className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <div className={`${phases[1].textColor} font-medium text-sm md:text-base`}>{phases[1].title}</div>
              <div className="text-xs text-pro-gray">{phases[1].year}</div>
            </div>
            {activePhase === "generative" && (
              <div
                className={`absolute top-24 left-1/2 -translate-x-1/2 w-40 md:w-48 p-2 md:p-3 rounded-lg shadow-lg ${phases[1].color} border ${phases[1].borderColor} text-xs md:text-sm`}
              >
                {phases[1].description}
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-40 left-[60%]">
          <div
            className={`relative ${activePhase === "agentic" ? "z-20" : "z-10"}`}
            onMouseEnter={() => setActivePhase("agentic")}
            onMouseLeave={() => setActivePhase(null)}
          >
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${phases[2].color} flex items-center justify-center cursor-pointer border-2 ${phases[2].borderColor} transition-all duration-200 ${activePhase === "agentic" ? "scale-110 shadow-md" : ""}`}
            >
              <div className={phases[2].iconColor}>{phases[2].icon}</div>
            </div>
            <div className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <div className={`${phases[2].textColor} font-medium text-sm md:text-base`}>{phases[2].title}</div>
              <div className="text-xs text-pro-gray">{phases[2].year}</div>
            </div>
            {activePhase === "agentic" && (
              <div
                className={`absolute top-24 left-1/2 -translate-x-1/2 w-40 md:w-48 p-2 md:p-3 rounded-lg shadow-lg ${phases[2].color} border ${phases[2].borderColor} text-xs md:text-sm`}
              >
                {phases[2].description}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-5 left-[85%]">
          <div
            className={`relative ${activePhase === "physical" ? "z-20" : "z-10"}`}
            onMouseEnter={() => setActivePhase("physical")}
            onMouseLeave={() => setActivePhase(null)}
          >
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${phases[3].color} flex items-center justify-center cursor-pointer border-2 ${phases[3].borderColor} transition-all duration-200 ${activePhase === "physical" ? "scale-110 shadow-md" : ""}`}
            >
              <div className={phases[3].iconColor}>{phases[3].icon}</div>
            </div>
            <div className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <div className={`${phases[3].textColor} font-medium text-sm md:text-base`}>{phases[3].title}</div>
              <div className="text-xs text-pro-gray">{phases[3].year}</div>
            </div>
            {activePhase === "physical" && (
              <div
                className={`absolute top-24 right-0 w-40 md:w-48 p-2 md:p-3 rounded-lg shadow-lg ${phases[3].color} border ${phases[3].borderColor} text-xs md:text-sm`}
              >
                {phases[3].description}
              </div>
            )}
          </div>
        </div>
        <div className="absolute -left-2 top-0 bottom-0 flex items-center">
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-xs sm:text-sm font-medium text-pro-gray">
            Capability & Impact
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 text-center text-xs sm:text-sm font-medium text-pro-gray">
          Timeline
        </div>
      </div>
      <div className="sm:hidden mb-8">
        <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-0.5 before:bg-pro-lightgray">
          {phases.map((phase) => (
            <div key={phase.id} className="mb-6 relative">
              <div
                className={`absolute left-0 -translate-x-1/2 w-6 h-6 rounded-full ${phase.color} flex items-center justify-center border-2 ${phase.borderColor}`}
              >
                <div className={phase.iconColor}>{phase.icon}</div>
              </div>
              <div className={`${phase.textColor} font-medium text-sm`}>
                {phase.title} <span className="text-xs text-pro-gray">({phase.year})</span>
              </div>
              <p className="text-xs text-pro-darkgray mt-1">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-8">
        {phases.map((phase) => (
          <div key={phase.id} className={`p-3 sm:p-4 rounded-lg border ${phase.borderColor} ${phase.color}`}>
            <div className="flex items-center mb-1 sm:mb-2">
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 ${phase.iconColor} bg-white`}
              >
                {phase.icon}
              </div>
              <h4 className={`font-semibold ${phase.textColor} text-sm sm:text-base`}>
                {phase.title} <span className="text-xs sm:text-sm font-normal text-pro-gray">({phase.year})</span>
              </h4>
            </div>
            <p className="text-pro-darkgray text-xs sm:text-sm">{phase.description}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

function AiFrameworks() {
  const [expandedBainSteps, setExpandedBainSteps] = useState<Record<string, boolean>>({})
  const toggleBainStep = (step: string) => {
    setExpandedBainSteps((prev) => ({
      ...prev,
      [step]: !prev[step],
    }))
  }

  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex items-center mb-4 sm:mb-5">
        <div className="bg-pro-navy text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 text-sm sm:text-base font-bold flex-shrink-0">
          4
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-pro-navy">AI Implementation Framework</h2>
      </div>
      <p className="text-base sm:text-lg mb-6 text-pro-darkgray">
        To successfully implement AI, organizations need a structured and systematic framework to maximize benefits
        while minimizing risks. Various frameworks and approaches have been developed by different implementors.
        Indonesian organizations can leverage these existing resources to accelerate and de-risk their AI adoption
        journey.
      </p>
      <Card className="p-4 sm:p-6 border-pro-blue mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-pro-navy mb-4">
          AI implementation approach (taking the example of a framework by Bain & Company)
        </h3>
        <p className="mb-4 text-sm sm:text-base text-pro-darkgray">
          This five-step framework guides organizations from initial strategy to full-scale implementation, ensuring AI
          initiatives deliver measurable business value while maintaining proper governance.
        </p>
        <div className="space-y-3">
          <div
            className="flex items-center cursor-pointer hover:bg-pro-lightblue rounded transition-colors"
            onClick={() => toggleBainStep("strategic")}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-pro-lightblue text-pro-navy flex items-center justify-center font-semibold mr-2 sm:mr-3 text-xs sm:text-sm md:text-base flex-shrink-0">
              1
            </div>
            <div className="flex-1 p-2 bg-pro-lightblue rounded text-xs sm:text-sm md:text-base text-pro-navy">
              Strategic Alignment
            </div>
            <div className="ml-2 text-pro-navy">
              {expandedBainSteps["strategic"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
          {expandedBainSteps["strategic"] && (
            <div className="ml-10 sm:ml-11 p-3 bg-white border border-pro-lightblue rounded-md text-xs sm:text-sm text-pro-darkgray">
              <p className="mb-2">Define clear AI objectives that align with business goals. This involves:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li>Identifying specific business challenges that AI can address</li>
                <li>Setting measurable KPIs to track progress and success</li>
                <li>Ensuring executive sponsorship for AI initiatives</li>
                <li>Creating a vision for how AI will transform specific business processes</li>
              </ul>
            </div>
          )}
          <div
            className="flex items-center cursor-pointer hover:bg-pro-lightblue rounded transition-colors"
            onClick={() => toggleBainStep("capability")}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-pro-lightblue text-pro-navy flex items-center justify-center font-semibold mr-2 sm:mr-3 text-xs sm:text-sm md:text-base flex-shrink-0">
              2
            </div>
            <div className="flex-1 p-2 bg-pro-lightblue rounded text-xs sm:text-sm md:text-base text-pro-navy">
              Capability Building
            </div>
            <div className="ml-2 text-pro-navy">
              {expandedBainSteps["capability"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
          {expandedBainSteps["capability"] && (
            <div className="ml-10 sm:ml-11 p-3 bg-white border border-pro-lightblue rounded-md text-xs sm:text-sm text-pro-darkgray">
              <p className="mb-2">Develop internal AI expertise through:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li>Training existing employees on AI fundamentals and applications</li>
                <li>Hiring AI specialists with domain expertise</li>
                <li>Partnering with external experts for knowledge transfer</li>
                <li>Building data infrastructure and governance processes</li>
              </ul>
            </div>
          )}
          <div
            className="flex items-center cursor-pointer hover:bg-pro-lightblue rounded transition-colors"
            onClick={() => toggleBainStep("pilot")}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-pro-lightblue text-pro-navy flex items-center justify-center font-semibold mr-2 sm:mr-3 text-xs sm:text-sm md:text-base flex-shrink-0">
              3
            </div>
            <div className="flex-1 p-2 bg-pro-lightblue rounded text-xs sm:text-sm md:text-base text-pro-navy">
              Pilot Projects
            </div>
            <div className="ml-2 text-pro-navy">
              {expandedBainSteps["pilot"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
          {expandedBainSteps["pilot"] && (
            <div className="ml-10 sm:ml-11 p-3 bg-white border border-pro-lightblue rounded-md text-xs sm:text-sm text-pro-darkgray">
              <p className="mb-2">Initiate AI pilots to demonstrate value and feasibility:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li>Start with high-impact, low-risk projects that can show quick wins</li>
                <li>Establish clear success metrics for each pilot</li>
                <li>Document learnings and challenges for future initiatives</li>
                <li>Involve end-users in the development process</li>
              </ul>
            </div>
          )}
          <div
            className="flex items-center cursor-pointer hover:bg-pro-lightblue rounded transition-colors"
            onClick={() => toggleBainStep("scaling")}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-pro-lightblue text-pro-navy flex items-center justify-center font-semibold mr-2 sm:mr-3 text-xs sm:text-sm md:text-base flex-shrink-0">
              4
            </div>
            <div className="flex-1 p-2 bg-pro-lightblue rounded text-xs sm:text-sm md:text-base text-pro-navy">
              Scaling
            </div>
            <div className="ml-2 text-pro-navy">
              {expandedBainSteps["scaling"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
          {expandedBainSteps["scaling"] && (
            <div className="ml-10 sm:ml-11 p-3 bg-white border border-pro-lightblue rounded-md text-xs sm:text-sm text-pro-darkgray">
              <p className="mb-2">Expand successful AI applications across the organization:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li>Create repeatable processes for AI deployment</li>
                <li>Establish centers of excellence to share best practices</li>
                <li>Develop a systematic approach to deploying AI solutions</li>
                <li>Implement change management strategies to drive adoption</li>
              </ul>
            </div>
          )}
          <div
            className="flex items-center cursor-pointer hover:bg-pro-lightblue rounded transition-colors"
            onClick={() => toggleBainStep("governance")}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-pro-lightblue text-pro-navy flex items-center justify-center font-semibold mr-2 sm:mr-3 text-xs sm:text-sm md:text-base flex-shrink-0">
              5
            </div>
            <div className="flex-1 p-2 bg-pro-lightblue rounded text-xs sm:text-sm md:text-base text-pro-navy">
              Governance
            </div>
            <div className="ml-2 text-pro-navy">
              {expandedBainSteps["governance"] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
          {expandedBainSteps["governance"] && (
            <div className="ml-10 sm:ml-11 p-3 bg-white border border-pro-lightblue rounded-md text-xs sm:text-sm text-pro-darkgray">
              <p className="mb-2">Establish policies for responsible AI use:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li>Create frameworks for data privacy and security</li>
                <li>Ensure algorithmic transparency and explainability</li>
                <li>Implement bias detection and mitigation strategies</li>
                <li>Develop ongoing monitoring systems for AI performance</li>
              </ul>
            </div>
          )}
        </div>
      </Card>
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-pro-navy mb-4">Real-World Case Studies (2023-2024)</h3>
        <Tabs defaultValue="coca-cola" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
            <TabsTrigger value="coca-cola" className="text-xs sm:text-sm">
              Coca-Cola
            </TabsTrigger>
            <TabsTrigger value="hera" className="text-xs sm:text-sm">
              Hera Group
            </TabsTrigger>
            <TabsTrigger value="amgen" className="text-xs sm:text-sm">
              Amgen
            </TabsTrigger>
            <TabsTrigger value="state-farm" className="text-xs sm:text-sm">
              State Farm
            </TabsTrigger>
          </TabsList>
          <TabsContent value="coca-cola">
            <Card className="p-4 sm:p-6 border-pro-blue">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-base sm:text-lg font-bold text-pro-navy">
                  Coca-Cola – Generative AI for Marketing Innovation
                </h4>
                <div className="bg-pro-lightblue text-pro-navy text-xs px-2 py-1 rounded-full">Marketing</div>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div>
                  <h5 className="font-semibold text-pro-black">Context & Approach:</h5>
                  <p className="text-pro-darkgray">
                    As the first company to engage in Bain's global AI alliance with OpenAI, Coca-Cola applied Bain's AI
                    implementation framework to revolutionize its marketing content creation. Bain and OpenAI jointly
                    developed <span className="font-semibold">"Create Real Magic,"</span> a generative AI platform that
                    uniquely combines GPT-4 (for text) and DALL·E (for images) to enable rapid creation of original
                    branded artwork.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-pro-black">Actions & Results:</h5>
                  <p className="text-pro-darkgray">
                    Using the new AI platform, Coca-Cola invited digital artists and marketers to generate content from
                    the company's iconic brand assets, dramatically speeding up ideation and personalization. Company
                    leaders touted this as "the next generation of creativity," noting that generative AI was enhancing
                    Coca-Cola's world-class marketing and consumer experiences. By embedding AI into its operations,
                    Coca-Cola not only accelerated creative output but also began exploring efficiency gains in broader
                    business processes.
                  </p>
                </div>
                <div className="bg-pro-lightblue p-3 rounded-md">
                  <h5 className="font-semibold text-pro-navy">Framework Elements Applied:</h5>
                  <ul className="space-y-1 pl-4 list-disc">
                    <li>Strategic alignment with marketing innovation goals</li>
                    <li>Partnership with AI experts (Bain and OpenAI)</li>
                    <li>Focused pilot with clear use case</li>
                    <li>Scaling from initial concept to broader applications</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-pro-lightgray flex items-center justify-between">
                <span className="text-xs text-pro-gray">Source: Bain & Company</span>
                <a
                  href="https://www.bain.com/about/media-center/press-releases/2023/bain--company-announces-services-alliance-with-openai-to-help-enterprise-clients-identify-and-realize-the-full-potential-and-maximum-value-of-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-pro-blue hover:text-pro-navy transition-colors"
                >
                  Read the full case study <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="hera">
            <Card className="p-4 sm:p-6 border-pro-blue">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-base sm:text-lg font-bold text-pro-navy">
                  Hera Group – Enterprise AI Roadmap and Operational Scale-Up
                </h4>
                <div className="bg-pro-lightblue text-pro-navy text-xs px-2 py-1 rounded-full">Utilities</div>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div>
                  <h5 className="font-semibold text-pro-black">Context & Approach:</h5>
                  <p className="text-pro-darkgray">
                    Hera Group, a large Italian multi-utility provider, partnered with Bain to infuse AI across its
                    energy, water, and waste services. Following Bain's AI maturity model, the project started with a{" "}
                    <span className="font-semibold">visioning phase</span> to identify high-impact areas and build
                    organizational readiness. In just three months, Bain worked closely with Hera's leadership to map
                    out <span className="font-semibold">150+ generative AI use cases</span> and organize them into three
                    waves of implementation spanning all business units.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-pro-black">Actions & Results:</h5>
                  <p className="text-pro-darkgray">
                    Early results demonstrate measurable impact.{" "}
                    <span className="font-semibold">Five priority use cases</span> were launched in the first wave,
                    including a proof-of-concept contact center chatbot to automate customer service inquiries. Bain
                    helped Hera establish a flexible, tech-agnostic AI platform and governance model to support these
                    solutions, effectively aligning the organization behind new AI-driven processes. As a result, Hera
                    swiftly stood up AI capabilities that improved operational efficiency and positioned the company to
                    continuously innovate and scale additional AI solutions in subsequent waves.
                  </p>
                </div>
                <div className="bg-pro-lightblue p-3 rounded-md">
                  <h5 className="font-semibold text-pro-navy">Framework Elements Applied:</h5>
                  <ul className="space-y-1 pl-4 list-disc">
                    <li>Comprehensive strategic planning (150+ use cases)</li>
                    <li>Phased implementation approach (three waves)</li>
                    <li>Prioritization of high-impact opportunities</li>
                    <li>Governance model established early</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-pro-lightgray flex items-center justify-between">
                <span className="text-xs text-pro-gray">Source: Bain & Company</span>
                <a
                  href="https://www.bain.com/client-results/ai/hera-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-pro-blue hover:text-pro-navy transition-colors"
                >
                  Read the full case study <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="amgen">
            <Card className="p-4 sm:p-6 border-pro-blue">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-base sm:text-lg font-bold text-pro-navy">
                  Amgen – Scaling AI in R&D and Enterprise Productivity
                </h4>
                <div className="bg-pro-lightblue text-pro-navy text-xs px-2 py-1 rounded-full">Biotech</div>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div>
                  <h5 className="font-semibold text-pro-black">Context & Approach:</h5>
                  <p className="text-pro-darkgray">
                    Global biotech firm Amgen embraced Bain's AI implementation strategy to transform both its
                    laboratory research and office operations. Guided by an enterprise-wide AI vision, Amgen initially{" "}
                    <span className="font-semibold">piloted</span> generative AI tools in a small cohort and invested in
                    employee upskilling – aligning with Bain's "crawl, walk, run" philosophy. This careful groundwork
                    allowed Amgen to responsibly integrate AI into workflows from the lab to corporate functions.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-pro-black">Actions & Results:</h5>
                  <p className="text-pro-darkgray">
                    Within 2023–2024, Amgen rapidly scaled these AI solutions across the company. For scientists,
                    advanced AI assistants now crunch vast datasets in seconds, cutting down research data analysis from
                    "days and weeks, to moments." This acceleration has sped up drug discovery and insights generation.
                    Simultaneously, Amgen rolled out generative AI productivity tools (like coding and document
                    assistants) to <span className="font-semibold">20,000 employees</span> after the initial trial
                    proved successful. By eliminating tedious manual tasks, Amgen's workforce can focus on higher-value
                    work, which has measurably boosted overall efficiency.
                  </p>
                </div>
                <div className="bg-pro-lightblue p-3 rounded-md">
                  <h5 className="font-semibold text-pro-navy">Framework Elements Applied:</h5>
                  <ul className="space-y-1 pl-4 list-disc">
                    <li>Small-scale pilot with controlled user group</li>
                    <li>Capability building through employee upskilling</li>
                    <li>Rapid scaling from pilot to 20,000 employees</li>
                    <li>Dual focus on R&D innovation and operational efficiency</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-pro-lightgray flex items-center justify-between">
                <span className="text-xs text-pro-gray">Source: Amgen</span>
                <a
                  href="https://www.amgen.com/stories/2024/05/from-the-office-to-the-lab-amgen-uses-ai-tools-to-unlock-innovation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-pro-blue hover:text-pro-navy transition-colors"
                >
                  Read the full case study <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="state-farm">
            <Card className="p-4 sm:p-6 border-pro-blue">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-base sm:text-lg font-bold text-pro-navy">
                  State Farm – From AI Pilots to Scaled Customer Service Transformation
                </h4>
                <div className="bg-pro-lightblue text-pro-navy text-xs px-2 py-1 rounded-full">Insurance</div>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div>
                  <h5 className="font-semibold text-pro-black">Context & Approach:</h5>
                  <p className="text-pro-darkgray">
                    At State Farm, one of the largest U.S. insurers, Bain's AI maturity model guided the company's
                    journey from isolated AI experiments to full-scale deployment. State Farm began with modest{" "}
                    <span className="font-semibold">proof-of-concepts</span> to learn and build AI capabilities, while
                    setting bold targets to operationalize successful tools within 12–18 months. This two-pronged "learn
                    fast and scale fast" approach ensured that early wins in generative AI could be quickly rolled out
                    enterprise-wide.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-pro-black">Actions & Results:</h5>
                  <p className="text-pro-darkgray">
                    A standout outcome is the introduction of a{" "}
                    <span className="font-semibold">generative AI-powered digital knowledge assistant</span> for State
                    Farm's call center agents. This AI assistant helps thousands of representatives instantly navigate
                    internal documentation and answer customer queries, significantly improving response times and
                    accuracy. Front-line employees can now resolve inquiries more efficiently and effectively, enhancing
                    customer satisfaction while reducing handling time. The organization has embraced an agile operating
                    model for AI, systematically converting pilot projects into production-grade tools across claims,
                    underwriting, and customer service.
                  </p>
                </div>
                <div className="bg-pro-lightblue p-3 rounded-md">
                  <h5 className="font-semibold text-pro-navy">Framework Elements Applied:</h5>
                  <ul className="space-y-1 pl-4 list-disc">
                    <li>Clear timeline for moving from pilot to production (12-18 months)</li>
                    <li>Focus on high-impact customer service use case</li>
                    <li>Agile operating model for AI implementation</li>
                    <li>Systematic scaling across multiple business functions</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-pro-lightgray flex items-center justify-between">
                <span className="text-xs text-pro-gray">Source: Bain & Company</span>
                <a
                  href="https://www.bain.com/insights/interview-from-ai-experiments-to-ai-at-scale-a-conversation-with-state-farms-fawad-ahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-pro-blue hover:text-pro-navy transition-colors"
                >
                  Read the full case study <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function IndonesiaFocus() {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-4 sm:mb-5">
        <div className="bg-pro-navy text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 text-sm sm:text-base font-bold flex-shrink-0">
          1
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-pro-navy">
          AI in Indonesia: From Missed Opportunities to Strategic Growth
        </h2>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-pro-navy mb-3">Economic Impact of AI in Indonesia</h3>
        <p className="text-sm md:text-base text-pro-darkgray mb-4">
          Indonesia is undergoing a transitional phase where coordinated AI implementation is expected to reshape its
          economic structure. Analyses indicate that strategic policies and close collaboration between government and
          industry could raise AI's contribution to GDP from approximately 2% to nearly 20% by 2030. This projection is
          based on systematic assessments of technological integration and economic efficiency, rather than subjective
          innovation narratives.
        </p>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200 flex flex-col items-center text-center">
              <div className="text-blue-800 font-bold text-2xl sm:text-3xl mb-2">~2%</div>
              <div className="text-xs sm:text-sm font-medium">Current GDP Contribution</div>
              <div className="w-full mt-3 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
              <p className="mt-3 text-xs text-gray-600">
                Limited adoption, primarily in tech startups and multinational corporations
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 border border-yellow-200 flex flex-col items-center text-center">
              <div className="text-yellow-800 font-bold text-2xl sm:text-3xl mb-2">~8%</div>
              <div className="text-xs sm:text-sm font-medium">Potential by 2030 (No Action)</div>
              <div className="w-full mt-3 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>
              <p className="mt-3 text-xs text-gray-600">
                Organic growth without coordinated national strategy or investment
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200 flex flex-col items-center text-center">
              <div className="text-green-800 font-bold text-2xl sm:text-3xl mb-2">~20%</div>
              <div className="text-xs sm:text-sm font-medium">Potential by 2030 (Strategic Action)</div>
              <div className="w-full mt-3 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <p className="mt-3 text-xs text-gray-600">
                Coordinated national AI strategy with public-private partnerships
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-6 text-center text-lg">
              Key Economic Indicators & Strategic Imperatives
            </h4>
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="md:w-5/12">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-lg">•</span>
                    <span>Potential GDP contribution: Up to $366 billion by 2030</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-lg">•</span>
                    <span>Job creation: 10+ million new AI-related roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-lg">•</span>
                    <span>Productivity gains: 30-45% in AI-enabled sectors</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-6/12 mt-4 md:mt-0">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    <span className="font-bold italic">Strategic imperative:</span> Indonesia must accelerate AI
                    adoption to remain competitive in ASEAN.{" "}
                    <span className="font-semibold">
                      Without coordinated action, the economic gap with Singapore, Malaysia, and Vietnam will widen
                      significantly by 2030.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-6 bg-red-50 border-red-200">
          <div className="flex items-center mb-4 text-red-600">
            <AlertTriangle className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">The Risks of Falling Behind</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4 py-1">
              <h4 className="font-semibold text-red-700">Economic Opportunity Loss</h4>
              <p className="text-gray-700">
                AI could add $1 trillion to Southeast Asia's economy, with Indonesia poised to capture up to 40% (~$366
                billion). Delays could see this potential slip away.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-4 py-1">
              <h4 className="font-semibold text-red-700">Competitive Vulnerability</h4>
              <p className="text-gray-700">
                Neighbors like Malaysia, Singapore, and Vietnam are deploying AI quickly. Late adoption could cede
                manufacturing, finance, and tech startups to those more advanced.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-4 py-1">
              <h4 className="font-semibold text-red-700">Workforce Disruption</h4>
              <p className="text-gray-700">
                Up to 23 million Indonesian jobs risk automation by 2030. Without upskilling, unemployment may rise, and
                inequality could worsen.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-gray-50 border-gray-200 md:col-span-2">
          <h3 className="text-xl font-bold text-gray-700 mb-4">What It Takes for Indonesia to Lead</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-gray-700">Talent & Infrastructure Investments</h4>
              <p>
                Government and private sectors must collaborate to fund digital literacy programs, advanced AI courses,
                and build robust data centers and broadband networks.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-gray-700">Supportive Policies and Governance</h4>
              <p>
                Finalize a practical AI regulatory framework (aligned with the National AI Strategy 2020–2045),
                incentivizing R&D and ensuring responsible AI usage.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-gray-700">Public-Private Partnerships</h4>
              <p>
                Startups, academia, and established enterprises working together (e.g., consortiums for AI solutions in
                manufacturing or healthcare).
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-gray-700">Focus on Key Industries</h4>
              <p>
                FMCG, manufacturing, finance, and oil & gas can be flagship sectors, showcasing Indonesia's capacity to
                embed AI across supply chains and customer experiences.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

function RegionalComparison() {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-4 sm:mb-5">
        <div className="bg-pro-navy text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 text-sm sm:text-base font-bold flex-shrink-0">
          2
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-pro-navy">
          Big Market but Slow Moves Hold Indonesia Back in the AI Game
        </h2>
      </div>
      <p className="text-lg mb-8 text-pro-darkgray">
        Indonesia's market potential is unmatched in Southeast Asia, but readiness lags behind. Regional peers are
        investing heavily, clarifying regulations, and moving from pilots to broad AI deployment. Without decisive
        action, Indonesia risks ceding its natural advantages.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-pro-navy text-white">
            <tr>
              <th className="py-4 px-6 text-left">Country</th>
              <th className="py-4 px-6 text-left">Initiatives & Advantages</th>
              <th className="py-4 px-6 text-center">Readiness</th>
              <th className="py-4 px-6 text-center">Global Rank</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-blue-50">
              <td className="py-4 px-6 font-medium">Singapore</td>
              <td className="py-4 px-6">
                <p>National AI Strategy, top-level R&D funding, strict governance</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-green-100 text-green-800">Strong Governance</Badge>
                  <Badge className="bg-green-100 text-green-800">High Investment</Badge>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">
                  <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-center font-bold">2nd</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="py-4 px-6 font-medium">Malaysia</td>
              <td className="py-4 px-6">
                <p>National AI Roadmap, MDEC incentives, public-private alliances</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-blue-100 text-blue-800">Clear Roadmap</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Tax Incentives</Badge>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">
                  <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-center font-bold">23rd</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="py-4 px-6 font-medium">Vietnam</td>
              <td className="py-4 px-6">
                <p>Strong policy execution, aims for top-4 AI in ASEAN, robust IT workforce</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-purple-100 text-purple-800">Fast Execution</Badge>
                  <Badge className="bg-purple-100 text-purple-800">IT Talent</Badge>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">
                  <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-center font-bold">~39th</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="py-4 px-6 font-medium">Thailand</td>
              <td className="py-4 px-6">
                <p>"Thailand 4.0" framework, strong push for gov AI adoption, organized guidelines</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-teal-100 text-teal-800">Digital Framework</Badge>
                  <Badge className="bg-teal-100 text-teal-800">Gov Adoption</Badge>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">
                  <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                    <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-center font-bold">~30s</td>
            </tr>
            <tr className="bg-pro-lightblue">
              <td className="py-4 px-6 font-medium">Indonesia</td>
              <td className="py-4 px-6">
                <p>
                  Large market, Digital Talent programs, some big tech investments; strategy still lacks strong
                  execution
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-amber-100 text-amber-800">Market Size</Badge>
                  <Badge className="bg-amber-100 text-amber-800">Growth Potential</Badge>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">
                  <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "55%" }}></div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-center font-bold">~42nd</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Card className="mt-8 p-6 border-amber-400">
        <h3 className="text-xl font-bold text-pro-navy mb-4">Indonesia's AI Infrastructure Growth Potential by 2030</h3>
        <p className="text-pro-darkgray mb-6">
          Despite current challenges, Indonesia has significant potential to transform its AI infrastructure by 2030.
          Strategic investments in key areas could dramatically improve the country's AI readiness and competitiveness:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-pro-lightgray shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-pro-navy">Data Centre Growth</h4>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">600%</span>
            </div>
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm text-gray-500">2023</div>
              <div className="text-sm text-gray-500">2030</div>
            </div>
            <div className="flex items-end space-x-2 mb-3">
              <div className="bg-amber-100 w-1/4 h-16 rounded-t-md flex items-end justify-center pb-1">
                <span className="text-amber-800 font-medium">64</span>
              </div>
              <div className="bg-red-400 w-3/4 h-28 rounded-t-md flex items-end justify-center pb-1">
                <span className="text-white font-medium">448</span>
              </div>
            </div>
            <p className="text-xs text-pro-darkgray">
              Indonesia should establish 448 data centers across its 5 main islands, with 50-100 per island, to
              effectively train and deploy advanced AI algorithms.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-pro-lightgray shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-pro-navy">Cloud Infrastructure</h4>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">45%</span>
            </div>
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm text-gray-500">2020</div>
              <div className="text-sm text-gray-500">2030</div>
            </div>
            <div className="flex items-end space-x-2 mb-3">
              <div className="bg-amber-100 w-2/5 h-20 rounded-t-md flex items-end justify-center pb-1">
                <span className="text-amber-800 font-medium">55</span>
              </div>
              <div className="bg-red-400 w-3/5 h-28 rounded-t-md flex items-end justify-center pb-1">
                <span className="text-white font-medium">80</span>
              </div>
            </div>
            <p className="text-xs text-pro-darkgray">
              The readiness index must achieve at least 80 to guarantee AI applications are capable of managing diverse
              workloads, from experimental to full-scale deployment.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-pro-lightgray shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-pro-navy">Supercomputers</h4>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">2x</span>
            </div>
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm text-gray-500">2023</div>
              <div className="text-sm text-gray-500">2030</div>
            </div>
            <div className="flex items-end space-x-2 mb-3">
              <div className="bg-amber-100 w-1/5 h-8 rounded-t-md flex items-end justify-center pb-1">
                <span className="text-amber-800 font-medium">0</span>
              </div>
              <div className="bg-red-400 w-4/5 h-28 rounded-t-md flex items-end justify-center pb-1">
                <span className="text-white font-medium">2</span>
              </div>
            </div>
            <p className="text-xs text-pro-darkgray">
              Integration of petaflop-capable supercomputers is essential to enhance computational processes for
              advanced AI use cases.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-pro-lightgray shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-pro-navy">Internet Speed</h4>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">7.5x</span>
            </div>
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm text-gray-500">2023</div>
              <div className="text-sm text-gray-500">2030</div>
            </div>
            <div className="flex items-end space-x-2 mb-3">
              <div className="bg-amber-100 w-1/5 h-12 rounded-t-md flex items-end justify-center pb-1">
                <span className="text-amber-800 font-medium">26</span>
              </div>
              <div className="bg-red-400 w-4/5 h-28 rounded-t-md flex items-end justify-center pb-1">
                <span className="text-white font-medium">220</span>
              </div>
            </div>
            <p className="text-xs text-pro-darkgray">
              A high-speed internet connection facilitates real-time data transfer, crucial for AI algorithms to learn
              and improve swiftly, enhancing effectiveness and efficiency.
            </p>
          </div>
        </div>
        <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
          <h4 className="font-semibold text-amber-800 mb-2">Strategic Imperative: Transform Existing Infrastructure</h4>
          <p className="text-sm text-pro-darkgray">
            To realize these ambitious targets, Indonesia must transform existing AI infrastructure and channel
            investments into advanced AI-focused startups. This requires coordinated action between government, private
            sector, and academic institutions to build the necessary technical foundation for AI innovation and
            deployment at scale.
          </p>
        </div>
      </Card>
    </section>
  )
}

function IndustryApplications() {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-4 sm:mb-5">
        <div className="bg-pro-navy text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 text-sm sm:text-base font-bold flex-shrink-0">
          3
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-pro-navy">
          Raising Awareness and Urgency Across Industries
        </h2>
      </div>
      <p className="text-lg mb-3 text-pro-darkgray max-w-[95%]">
        The rise of "dark factories" that operate without human labor—and therefore require no lighting—is a striking
        example of how AI (and robotics) are revolutionizing manufacturing. These smart factories demonstrate what's
        possible when technology is deeply and strategically integrated. For Indonesia, the risk lies not only in
        missing out on efficiency gains but also in widening the competitive gap.
      </p>
      <p className="text-lg mb-6 text-pro-darkgray max-w-[95%]">
        As noted in a PwC report, beyond 2025, very few companies will establish dominance, and the growing gap between
        AI leaders and laggards will extend to economies as well. To avoid being left behind, Indonesian industries must
        begin narrowing that gap—starting with awareness not only in manufacturing but across industries, then moving
        decisively toward action. Showcasing sector-specific use cases can help build the confidence needed to take that
        leap advantages:
      </p>
      <Tabs defaultValue="fmcg" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="fmcg" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            <span>FMCG</span>
          </TabsTrigger>
          <TabsTrigger value="manufacturing" className="flex items-center gap-2">
            <Factory className="h-4 w-4" />
            <span>Manufacturing</span>
          </TabsTrigger>
          <TabsTrigger value="finance" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Finance</span>
          </TabsTrigger>
          <TabsTrigger value="oil" className="flex items-center gap-2">
            <Droplet className="h-4 w-4" />
            <span>Oil & Gas</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="fmcg">
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-pro-navy mb-4">Fast-Moving Consumer Goods (FMCG)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-blue">Demand Forecasting</h4>
                <p className="text-pro-darkgray">
                  AI examines past sales, seasonality, promotions, and external factors (like weather) to accurately
                  predict shifts in demand, preventing stockouts or overstocks.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-blue">Personalized Marketing</h4>
                <p className="text-pro-darkgray">
                  Machine learning segues from broad promotions to hyper-targeted campaigns. Retailers and FMCG brands
                  can boost engagement by aligning offers with individual consumer behavior.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-blue">Inventory Management</h4>
                <p className="text-pro-darkgray">
                  Automated replenishment systems ensure the right stock levels in each location. AI flags potential
                  supply gaps earlier, improving lead times and reducing carrying costs.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="manufacturing">
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-pro-navy mb-4">Manufacturing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Predictive Maintenance</h4>
                <p className="text-pro-darkgray">
                  Real-time sensor data identifies equipment anomalies, allowing maintenance to occur before breakdowns
                  and cutting downtime.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Supply Chain Optimization</h4>
                <p className="text-pro-darkgray">
                  Machine learning spots bottlenecks, re-routes shipments, and optimizes production schedules.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Quality Control</h4>
                <p className="text-pro-darkgray">
                  Computer vision detects defects at lightning speed, slashing error rates and product rejections.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="finance">
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-pro-navy mb-4">Finance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Risk Assessment</h4>
                <p className="text-pro-darkgray">
                  AI-driven credit scoring expands lending with better accuracy. Real-time analytics measure portfolio
                  exposure.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Fraud Detection</h4>
                <p className="text-pro-darkgray">
                  Unsupervised and semi-supervised ML spot unusual patterns in transactions to halt fraud attempts
                  quickly.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Algorithmic Trading</h4>
                <p className="text-pro-darkgray">
                  Automated systems ingest market data, adjusting portfolios or making trades in microseconds.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Customer Service Automation</h4>
                <p className="text-pro-darkgray">
                  AI chatbots resolve routine banking queries around the clock, reducing operational costs.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="oil">
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-pro-navy mb-4">Oil & Gas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Predictive Asset Management</h4>
                <p className="text-pro-darkgray">
                  AI collects and analyzes sensor data to schedule maintenance for critical infrastructure.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Operational Efficiency</h4>
                <p className="text-pro-darkgray">
                  Intelligent systems dynamically adjust drilling parameters and supply flows, boosting throughput.
                </p>
              </div>
              <div className="bg-pro-lightblue p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-pro-navy">Risk Mitigation</h4>
                <p className="text-pro-darkgray">
                  Early detection of potential leaks or structural faults prevents environmental harm and costly
                  downtime.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

function ExecutiveSummary() {
  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex items-center mb-4 sm:mb-5">
        <div className="bg-pro-navy text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 text-sm sm:text-base font-bold flex-shrink-0">
          5
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-pro-navy">Conclusion</h2>
      </div>
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-pro-darkgray">
          AI is no longer a distant frontier—it's <span className="font-bold">actively reshaping</span> how industries
          operate, compete, and grow. And it's moving{" "}
          <span className="font-bold">faster than most organizations are prepared for</span>. Serious awareness and
          attention are still lacking throughout sectors. While public awareness is on the rise in few circles, too few
          companies are turning that awareness into <span className="font-bold">strategic action</span>. Indonesia
          cannot afford to remain in the exploratory phase while the rest of the region advances. The foundations are in
          place: a vast digital market, a young workforce, and a national AI strategy. What's missing is{" "}
          <span className="font-bold">execution</span>.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-pro-darkgray">
          Policy and infrastructure matter—but{" "}
          <span className="font-bold">real progress will depend on how the private sector responds</span>. Businesses
          are closest to the problems AI can solve, and they have the{" "}
          <span className="font-bold">agility to test, adapt, and scale</span> what works. By stepping up now,
          Indonesia's private sector won't just catch up—it can <span className="font-bold">lead</span>, setting the
          pace for the economy in an AI-driven future.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-pro-darkgray">
          By stepping up now, Indonesia's private sector has the opportunity not just to close the gap, but to{" "}
          <span className="font-bold">set the pace</span>—defining how the economy evolves in the AI era. This moment
          calls for <span className="font-bold">more than awareness</span>. It demands{" "}
          <span className="font-bold">bold action, shared learning, and a willingness to lead</span>.
        </p>
      </div>
    </section>
  )
}

function References() {
  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex items-center mb-4 sm:mb-5">
        <div className="bg-pro-navy text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 text-sm sm:text-base font-bold flex-shrink-0">
          6
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-pro-navy">References</h2>
      </div>
      <Card className="p-4 sm:p-8 bg-white border-pro-lightgray">
        <div className="space-y-6">
          <div>
            <p className="font-bold text-pro-black mb-2">1. AI to bring in $366b to Indonesia's GDP by 2030</p>
            <p className="text-pro-darkgray mb-2">
              The Jakarta Post article exploring how AI is poised to transform Indonesia's economy and contribute
              significantly to GDP growth.
            </p>
            <a
              href="https://www.thejakartapost.com/news/2020/10/09/ai-to-bring-in-366b-to-indonesias-gdp-by-2030.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pro-blue hover:text-pro-navy transition-colors"
            >
              Read more
            </a>
          </div>
          <div>
            <p className="font-bold text-pro-black mb-2">
              2. Indonesia's AI Journey: A Model for Change Management in Developing Countries
            </p>
            <p className="text-pro-darkgray mb-2">
              An in-depth look at how Indonesia is managing the challenges and opportunities of AI adoption at a
              national level.
            </p>
            <a
              href="https://moderndiplomacy.eu/2024/10/14/indonesias-ai-journey-a-model-for-change-management-in-developing-countries/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pro-blue hover:text-pro-navy transition-colors"
            >
              Read more
            </a>
          </div>
          <div>
            <p className="font-bold text-pro-black mb-2">
              3. Artificial Intelligence and the Future of Work in the Indonesian Public Sector
            </p>
            <p className="text-pro-darkgray mb-2">
              A scholarly article examining how AI impacts employment and public sector efficiency in Indonesia.
            </p>
            <a
              href="https://www.researchgate.net/publication/373703666_Artificial_Intelligence_and_the_Future_of_Work_in_the_Indonesian_Public_Sector"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pro-blue hover:text-pro-navy transition-colors"
            >
              Read the study
            </a>
          </div>
          <div>
            <p className="font-bold text-pro-black mb-2">
              4. Strategi Nasional Kecerdasan Artifisial Indonesia 2020-2045 [Indonesia National Artificial Intelligence
              Strategy 2020-2045]
            </p>
            <p className="text-pro-darkgray mb-2">
              The official national strategy document published by Indonesia's National Research and Innovation Agency
              (BRIN) that outlines Indonesia's vision and policy roadmap for AI adoption.
            </p>
            <a
              href="https://korika.id/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pro-blue hover:text-pro-navy transition-colors"
            >
              Download the document
            </a>
          </div>
          <div>
            <p className="font-bold text-pro-black mb-2">
              5. Navigating 2030: AI and the Attention Economy in Indonesia
            </p>
            <p className="text-pro-darkgray mb-2">
              A report that details Indonesia's digital transformation and the role of AI in shaping the future
              attention economy.
            </p>
            <a
              href="https://cdn.twimbit.com/uploads/2024/03/06073340/Navigating-2030-AI-and-Attention-Economy-Indonesia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pro-blue hover:text-pro-navy transition-colors"
            >
              Download the report
            </a>
          </div>
          <div>
            <p className="font-bold text-pro-black mb-2">6. US Giants Bet Big on AI in Indonesia</p>
            <p className="text-pro-darkgray mb-2">
              A news article discussing major investments from global tech players like Microsoft and NVIDIA in
              Indonesia's AI ecosystem.
            </p>
            <a
              href="https://asiamattersforamerica.org/articles/us-giants-bet-big-on-ai-in-indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pro-blue hover:text-pro-navy transition-colors"
            >
              Read more
            </a>
          </div>
          <div>
            <p className="font-bold text-pro-black mb-2">7. AI in Indonesia: The current state and its opportunities</p>
            <p className="text-pro-darkgray mb-2">
              East Ventures' analysis of Indonesia's AI landscape, examining current adoption levels and future growth
              opportunities across various sectors.
            </p>
            <a
              href="https://east.vc/news/insights/artificial-intelligence-in-indonesia-the-current-state-and-its-opportunities/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pro-blue hover:text-pro-navy transition-colors"
            >
              Read more
            </a>
          </div>
          <div>
            <p className="font-bold text-pro-black mb-2">8. The Macroeconomic Impact of AI</p>
            <p className="text-pro-darkgray mb-2">
              PwC UK's comprehensive report on how AI is expected to transform economies globally, with insights
              applicable to Indonesia's development trajectory.
            </p>
            <a
              href="https://www.pwc.co.uk/economic-services/assets/macroeconomic-impact-of-ai-technical-report-feb-18.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pro-blue hover:text-pro-navy transition-colors"
            >
              Download the report
            </a>
          </div>
        </div>
      </Card>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-pro-lightgray py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-pro-navy">About Indonesian Business Council</h3>
          <p className="text-pro-darkgray max-w-4xl text-sm sm:text-base">
            The Indonesian Business Council is an association of Indonesia's business and industry leaders, committed to
            advancing the nation's competitiveness and long-term prosperity through strategic and effective public
            policy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-6 sm:mb-8">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2 text-pro-navy">Research Team</h3>
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ibc_logo-HQre5SdwpnWWs1leUanE9awbtU3lTD.png"
                alt="IBC Institute"
                width={120}
                height={60}
                className="object-contain"
              />
              <div>
                <p className="text-pro-black font-medium text-sm sm:text-base">The IBC Institute</p>
                <p className="text-pro-gray text-xs sm:text-sm">Research. Collaboration. Impact</p>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Website</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center md:text-right text-gray-600 mb-4 sm:mb-6 text-sm">
          <p>ibc-institute.id | business-council.id</p>
        </div>
        <Separator className="my-4 sm:my-6" />
        <div className="bg-pro-lightgray p-3 sm:p-4 rounded-lg border border-pro-lightgray flex gap-2 sm:gap-3">
          <div className="flex-shrink-0 mt-1">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-pro-gray flex items-center justify-center text-pro-gray text-xs sm:text-sm">
              i
            </div>
          </div>
          <p className="text-xs sm:text-sm text-pro-darkgray">
            This report provides a quick analysis intended as an initial alert and insight for readers. It is
            synthesized from multiple sources and is not a comprehensive assessment. Readers are encouraged to conduct
            further analysis and verification to gain a deeper understanding. While efforts have been made to ensure
            accuracy, this report may contain errors, omissions, or imperfections. IBC assumes no liability for any
            decisions or actions taken based on this report, and readers are advised to exercise their own judgment and
            due diligence.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="border-b border-gray-100 py-4 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2">
            <div className="text-sm sm:text-base md:text-lg text-gray-700 text-center font-medium">
              IBC Navigator | Intelligence and Strategic Compass for Indonesia's Public and Private Sector
            </div>
            <div className="text-sm sm:text-base md:text-lg text-gray-700 sm:ml-4 font-medium">Vol.2/2025</div>
          </div>
        </div>
        <div className="py-6 sm:py-8 px-4 sm:px-6 mt-5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:hidden w-full flex justify-center mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ibc_logo-HQre5SdwpnWWs1leUanE9awbtU3lTD.png"
                alt="IBC Institute"
                width={180}
                height={90}
                className="object-contain"
              />
            </div>
            <div className="space-y-2 max-w-3xl text-center md:text-left">
              <h1 className="leading-tight">
                <span className="block text-lg sm:text-xl md:text-2xl font-medium text-pro-black mb-1">
                  Too Big to Miss, Too Late to Wait –
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-pro-black">
                  The Impending AI Disruption and a Wake-Up Call for Indonesia
                </span>
              </h1>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ibc_logo-HQre5SdwpnWWs1leUanE9awbtU3lTD.png"
                alt="IBC Institute"
                width={220}
                height={110}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12 py-4">
          <h2 className="text-lg sm:text-xl font-bold text-pro-black mb-5">Highlights</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium text-gray-400 uppercase tracking-wider mb-2">MARKET & ECONOMY</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-sm sm:text-base font-medium text-pro-black">
                  Indonesia ranks 42nd globally in AI readiness, behind Singapore (2nd) and Malaysia (23rd).
                </li>
                <li className="text-sm sm:text-base font-medium text-pro-black">
                  AI to add $366B to Indonesia's economy by 2030, part of $1T regional growth and $15.7T global growth.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-400 uppercase tracking-wider mb-2">SECTOR ANALYSIS</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-sm sm:text-base font-medium text-pro-black">
                  Strategic AI implementation shows 30-45% productivity gains in enabled sectors.
                </li>
                <li className="text-sm sm:text-base font-medium text-pro-black">
                  FMCG, manufacturing, finance, oil & gas identified as prime sectors for AI disruption.
                </li>
                <li className="text-sm sm:text-base font-medium text-pro-black">
                  Companies delaying AI adoption face 15-25% competitive disadvantage by 2027.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-400 uppercase tracking-wider mb-2">FROM THE FIELD</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-sm sm:text-base font-medium text-pro-black">
                  Nation-wide awareness is still deficient – adoption is insufficient.
                </li>
                <li className="text-sm sm:text-base font-medium text-pro-black">
                  Critical shortage of AI specialists threatens the speed to compete.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <IndonesiaFocus />
        <Separator className="my-8 sm:my-12" />
        <RegionalComparison />
        <Separator className="my-8 sm:my-12" />
        <IndustryApplications />
        <Separator className="my-8 sm:my-12" />
        <section className="mb-8 sm:mb-12 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4 font-serif">
            Box: Agentic AI Positioned to Reshape Industries
          </h2>
          <AiEvolution />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-700">
                Key reasons why agentic AI matters to enterprises:
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4 text-xs sm:text-sm">
                <li>
                  <span className="font-medium">Streamlined Operations:</span> Repetitive, rule-based processes become
                  fully or semi-automated.
                </li>
                <li>
                  <span className="font-medium">Scalable Decision-Making:</span> AI agents monitor real-time data,
                  alerting teams or autonomously correcting course.
                </li>
                <li>
                  <span className="font-medium">Faster Innovation:</span> Proactive "virtual teammates" can test
                  hypotheses, propose solutions, and iterate quickly.
                </li>
                <li>
                  <span className="font-medium">Advanced Analytics:</span> Integrating large language models with
                  planning algorithms yields deeper insight generation.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-700">Agentic AI characteristics:</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2 sm:mr-3 flex-shrink-0">
                    <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div>
                    <span className="font-medium">Autonomous decision-making</span>
                    <p className="text-xs sm:text-sm text-gray-600">Can make decisions without constant human input</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2 sm:mr-3 flex-shrink-0">
                    <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div>
                    <span className="font-medium">Self-directed goal pursuit</span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Plans and executes steps to achieve defined objectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2 sm:mr-3 flex-shrink-0">
                    <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div>
                    <span className="font-medium">Adapts to changing conditions</span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Modifies approach based on new information or obstacles
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2 sm:mr-3 flex-shrink-0">
                    <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div>
                    <span className="font-medium">Context awareness</span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Understands the broader environment and implications of actions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base mt-4 sm:mt-6">
            Especially in emerging markets like Indonesia, agentic AI has the potential to leapfrog traditional business
            models, enabling companies to compete on a global scale despite infrastructure or resource constraints.
          </p>
        </section>
        <Separator className="my-8 sm:my-12" />
        <AiFrameworks />
        <Separator className="my-8 sm:my-12" />
        <ExecutiveSummary />
        <Separator className="my-8 sm:my-12" />
        <References />
        <Separator className="my-8 sm:my-12" />
      </main>
      <Footer />
    </div>
  )
}
