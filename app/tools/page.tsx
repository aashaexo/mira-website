import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Tool {
  name: string;
  url: string;
  image: string;
  description: string;
}

interface ToolCardProps {
  tool: Tool;
}

function ToolCard({ tool }: ToolCardProps) {
  const titleSnippet = tool.name.length > 30 
    ? `${tool.name.substring(0, 30)}...` 
    : tool.name;
    
  const descriptionSnippet = tool.description.length > 100 
    ? `${tool.description.substring(0, 100)}...` 
    : tool.description;

  return (
    <Link href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col">
        <div className="relative aspect-[2.5/1] bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={tool.image}
            alt={tool.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm font-medium">MIRA Tool</span>
          </div>
        </div>

        <div className="bg-black text-white p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{titleSnippet}</h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
            {descriptionSnippet}
          </p>

          <div className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors mt-auto">
            <span>Visit Tool</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ToolsPage() {
  const tools: Tool[] = [
    {
      name: "Klok",
      url: "https://klokapp.ai/",
      image: "/klok.png",
      description: "AI-powered scheduling and time management application with smart scheduling, AI integration, and time optimization features.",
    },
    {
      name: "Yap Map",
      url: "https://yap-map.vercel.app/",
      image: "/yapmap.png",
      description: "Interactive mapping and visualization tool for community insights with data visualization and community building features.",
    },
    {
      name: "WikiSentry",
      url: "https://wikisentry.vercel.app/",
      image: "/wikisentry.png",
      description: "Advanced wiki monitoring and content management system with content monitoring, version control, and automated alerts.",
    },
    {
      name: "Prove You Right",
      url: "https://proveyouright.vercel.app/",
      image: "/proveyouright.png",
      description: "Verification and validation platform for claims and statements with fact verification, source validation, and truth scoring.",
    },
    {
      name: "Kaito-tok",
      url: "https://kaito-tok.vercel.app",
      image: "/kaitotok.png",
      description: "Next-generation communication and collaboration platform with real-time chat, collaboration tools, and community building.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
            Tools Powered by MIRA
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>

        {tools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No tools to display yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
