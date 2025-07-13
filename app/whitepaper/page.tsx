import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Download, Globe, Sparkles } from "lucide-react"

export default function WhitepaperPage() {
  const whitepapers = [
    {
      language: "English",
      flag: "🇺🇸",
      color: "blue",
      description: "Comprehensive technical documentation in English",
      pages: "48 pages",
    },
    {
      language: "Chinese",
      flag: "🇨🇳",
      color: "red",
      description: "完整的中文技术文档",
      pages: "48 页",
    },
    {
      language: "Korean",
      flag: "🇰🇷",
      color: "green",
      description: "한국어로 된 포괄적인 기술 문서",
      pages: "48 페이지",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white">
      <div className="container mx-auto px-6 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-purple-100 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-purple-600 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                WHITEPAPER
              </h1>
              <Globe className="w-8 h-8 text-pink-600 ml-3" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Whitepaper Cards */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {whitepapers.map((paper, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-${paper.color}-100 hover:border-${paper.color}-300 bg-gradient-to-br from-white to-${paper.color}-50/30`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-${paper.color}-500 to-${paper.color}-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-3xl">{paper.flag}</span>
                  </div>
                  <CardTitle className="text-2xl text-gray-800 flex items-center justify-center gap-2">
                    {paper.language}
                    <FileText className={`w-5 h-5 text-${paper.color}-600`} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 leading-relaxed">{paper.description}</p>
                  <div className={`bg-${paper.color}-50 rounded-lg p-3 mb-6`}>
                    <p className={`text-sm text-${paper.color}-700 font-medium`}>{paper.pages}</p>
                  </div>
                  <Button
                    className={`w-full bg-${paper.color}-600 hover:bg-${paper.color}-700 text-white shadow-lg group-hover:shadow-xl transition-all`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
