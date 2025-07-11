import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Brain, TrendingUp, Users, Sparkles } from "lucide-react"

export default function YappersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white">
      <div className="container mx-auto px-6 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-blue-100 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MIRA YAPPERS
              </h1>
              <Sparkles className="w-8 h-8 text-purple-600 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our vibrant community of thought leaders, researchers, and innovators shaping the future of
              decentralized systems.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Chain of Thought</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Explore deep analytical discussions and structured reasoning processes that drive innovation in the
                  MIRA ecosystem.
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700 font-medium">Community-driven insights</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100 hover:border-green-300 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Messari</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Access comprehensive research, market analysis, and data-driven insights from one of the leading
                  crypto research platforms.
                </p>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">Research & Analysis</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Yappers</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Connect with active community contributors, thought leaders, and passionate advocates who shape the
                  MIRA narrative.
                </p>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700 font-medium">Community Leaders</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Join the Conversation</h2>
                <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                  Become part of our growing community of innovators and thought leaders. Share your insights, learn
                  from others, and help shape the future.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 text-lg shadow-lg"
                >
                  Get Started Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
