import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Edit3, Users, Sparkles, TrendingUp } from "lucide-react"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white">
      <div className="container mx-auto px-6 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-green-100 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-green-600 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                ARTICLES
              </h1>
              <Edit3 className="w-8 h-8 text-teal-600 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">Community Written Content</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Discover insightful articles, research papers, and thought pieces written by our passionate community
              members. From technical deep-dives to market analysis, explore diverse perspectives on blockchain
              technology and decentralized systems.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Featured Content */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100 hover:border-green-300 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Community Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Explore articles written by our vibrant community members, covering various topics related to MIRA,
                  blockchain technology, and decentralized systems. Each piece reflects unique insights and expertise.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Technical Analysis & Research
                  </div>
                  <div className="flex items-center text-sm text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Market Insights & Trends
                  </div>
                  <div className="flex items-center text-sm text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Community Perspectives
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-teal-100 hover:border-teal-300 bg-gradient-to-br from-white to-teal-50/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Latest Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Stay updated with the latest insights, analysis, and thought pieces from our community of writers and
                  researchers. Discover emerging trends and cutting-edge developments in the ecosystem.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-teal-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Weekly Research Updates
                  </div>
                  <div className="flex items-center text-sm text-teal-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Expert Commentary
                  </div>
                  <div className="flex items-center text-sm text-teal-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Industry Analysis
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Article Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Article Categories</h2>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { name: "Technical", color: "blue", count: "24+" },
                { name: "Research", color: "purple", count: "18+" },
                { name: "Analysis", color: "orange", count: "32+" },
                { name: "Opinion", color: "pink", count: "15+" },
              ].map((category, index) => (
                <Card
                  key={index}
                  className={`text-center p-4 border-2 border-${category.color}-100 hover:border-${category.color}-300 hover:shadow-lg transition-all cursor-pointer`}
                >
                  <CardContent className="p-4">
                    <h3 className={`font-bold text-lg text-${category.color}-600 mb-2`}>{category.name}</h3>
                    <p className="text-gray-500 text-sm">{category.count} articles</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-green-600 to-teal-600 border-0 shadow-2xl">
              <CardContent className="p-8">
                <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Contribute Your Voice</h2>
                <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
                  Have insights to share? Join our community of writers and contribute your unique perspective to the
                  MIRA ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-3 text-lg shadow-lg"
                  >
                    Submit Article
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 font-bold px-8 py-3 text-lg bg-transparent"
                  >
                    Browse All Articles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
