import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText, Eye } from "lucide-react"
import Image from "next/image"

interface Whitepaper {
  language: string;
  flag: string;
  image: string;
  pdfPath: string;
  externalLink: string;
}

interface WhitepaperCardProps {
  whitepaper: Whitepaper;
}

function WhitepaperCard({ whitepaper }: WhitepaperCardProps) {
  const titleSnippet = whitepaper.language.length > 30 
    ? `${whitepaper.language.substring(0, 30)}...` 
    : whitepaper.language;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col">
      <div className="relative aspect-[1838/608] bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={whitepaper.image}
          alt={`${whitepaper.language} Whitepaper`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          {/* <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm font-medium">{whitepaper.language}</span> */}
        </div>
      </div>

      <div className="bg-black text-white p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-3">{whitepaper.flag}</span>
          <h3 className="text-xl font-bold">{titleSnippet}</h3>
        </div>

        <div className="flex gap-3 mt-auto">
          <Link
            href={whitepaper.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-2" />
            Read
          </Link>
          <Link
            href={whitepaper.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Open
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function WhitepaperPage() {
  const whitepapers: Whitepaper[] = [
    {
      language: "English",
      flag: "🇺🇸",
      image: "/Mira Whitepaper English.png",
      pdfPath: "/Mira Whitepaper English.pdf",
      externalLink: "https://mira.network/research/mira-whitepaper.pdf",
    },
    {
      language: "Chinese",
      flag: "🇨🇳",
      image: "/Mira Whitepaper Chinese.png",
      pdfPath: "/Mira Whitepaper Chinese.pdf",
      externalLink: "https://drive.google.com/file/d/12ReVhSi1TCs_xJX--HTUnnAFUq_s0Dcf/view",
    },
    {
      language: "Korean",
      flag: "🇰🇷",
      image: "/Mira Whitepaper Korean.png",
      pdfPath: "/Mira Whitepaper Korean.pdf",
      externalLink: "https://drive.google.com/file/d/1rs-EAYgeWbrzr3vF3VTEs5LRmbEvkaP5/view",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
            Whitepaper
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitepapers.map((whitepaper, index) => (
            <WhitepaperCard key={index} whitepaper={whitepaper} />
          ))}
        </div>

        {whitepapers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No whitepapers to display yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
