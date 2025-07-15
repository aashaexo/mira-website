import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Twitter } from "lucide-react"
import Yappers from "./yappers/page"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            
            <img
              src="/MiraLogo.png"
              alt="Mira Logo"
              className="mx-auto w-48 h-auto"
            />
            
          </div>
          <p className="text-xl text-gray-600 font-medium tracking-wide">THE REALM OF MIRA</p>
          
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
                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50/50 group-hover:border-blue-300 transition-colors bg-[url('/miranewyappers1.jpg')] bg-cover bg-center">
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
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">apps powered by mira</h2>
                  <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50/50 group-hover:border-green-300 transition-colors bg-[url('/appspowered.jpg')] bg-cover bg-center">

                </div>
                
                
                {/* <div className="w-full aspect-[2.5/1] border-2 border-dashed border-orange-300 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50/50 group-hover:border-orange-400 transition-colors">
                  <img src="/placeholder-logo.png" alt="Apps powered by Mira" className="object-cover w-full h-full" />
                </div> */}
              </CardContent>
            </Card>
          </Link>

          {/* Podcast */}
          <Link href="/podcast" className="group">
            <Card className="h-72 border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-red-50/30">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">podcast</h2>
                  <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50/50 group-hover:border-green-300 transition-colors bg-[url('/apps1.jpg')] bg-cover bg-center">

                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Community */}
          <Link href="/community" className="group">
            <Card className="h-72 border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-teal-50/30">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">community</h2>
                  <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50/50 group-hover:border-green-300 transition-colors bg-[url('/apps.jpg')] bg-cover bg-center">

                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-20">
          <div className="flex flex-col items-center gap-1 mt-4 text-gray-500 font-sans text-sm">
            <span className="tracking-wide font-medium">Powered by <a href="https://twitter.com/aashatwt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline underline-offset-2 transition-colors">Aasha</a></span>
          </div>
          <a
            href="https://scrolls.mira.network"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 mt-6 text-base font-sans font-semibold tracking-wide text-gray-800 hover:text-blue-700 transition-colors underline-offset-4 hover:underline"
          >
            visit scroll.mira.network to know more
            <ArrowRight className="w-4 h-4 mb-0.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
