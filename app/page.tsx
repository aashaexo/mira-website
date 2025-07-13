import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"
import Yappers from "./yappers/page"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-7xl font-bold text-black tracking-wide">MIRA</h1>
            <Sparkles className="w-8 h-8 text-purple-600 ml-3" />
          </div>
          <p className="text-xl text-gray-600 font-medium tracking-wide">THE REALM OF MIRA</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mira Yappers */}
          <Link href="/yappers" className="group">
            <Card className="h-72 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/30">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">mira yappers</h2>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50/50 group-hover:border-blue-300 transition-colors bg-[url('/mirayappers.png')] bg-cover bg-center">
                  {/* <Yappers person={person} /> */}
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Articles */}
          <Link href="/articles" className="group">
            <Card className="h-72 border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/30">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">articles</h2>
                  <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50/50 group-hover:border-green-300 transition-colors bg-[url('/article2.png')] bg-cover bg-center">

                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Whitepaper */}
          <Link href="/whitepaper" className="group">
            <Card className="h-72 border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/30">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">whitepaper</h2>
                  <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50/50 group-hover:border-green-300 transition-colors bg-[url('/whitepaper1.jpg')] bg-cover bg-center">

                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Apps powered by Mira */}
          <Link href="/tools" className="group">
            <Card className="h-72 border-2 border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/30">
              <CardContent className="p-8 h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-lg">⚡</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Apps powered by Mira</h2>
                  <ArrowRight className="w-5 h-5 text-orange-600 mx-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Podcast */}
          <Link href="/podcast" className="group">
            <Card className="h-72 border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-red-50/30">
              <CardContent className="p-8 h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">🎙️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Podcast</h2>
                  <ArrowRight className="w-5 h-5 text-red-600 mx-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Community */}
          <Link href="/community" className="group">
            <Card className="h-72 border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-teal-50/30">
              <CardContent className="p-8 h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-lg">👥</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Community</h2>
                  <ArrowRight className="w-5 h-5 text-teal-600 mx-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-20">
          <a
            href="https://scrolls.mira.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            visit scroll.mira.com to know more
          </a>
        </div>
      </div>
    </div>
  )
}
