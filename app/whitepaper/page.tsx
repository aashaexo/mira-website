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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">Technical Documentation & Vision</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Dive deep into MIRA's technical architecture, tokenomics, and roadmap. Our comprehensive whitepaper is
              available in multiple languages to serve our global community.
            </p>
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

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What's Inside</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">🏗️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Technical Architecture</h3>
                      <p className="text-gray-600">
                        Detailed explanation of MIRA's underlying technology and infrastructure
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">💰</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Tokenomics</h3>
                      <p className="text-gray-600">Comprehensive breakdown of token distribution and economic model</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">🗺️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Roadmap</h3>
                      <p className="text-gray-600">Strategic milestones and development timeline for the future</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">🔬</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Research & Analysis</h3>
                      <p className="text-gray-600">In-depth market research and competitive analysis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-2xl">
              <CardContent className="p-8">
                <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Dive Deeper?</h2>
                <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
                  Download our comprehensive whitepaper and discover the technical innovation behind MIRA's ecosystem.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-8 py-3 text-lg shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download All Languages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
