import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Zap, Map, Shield, CheckCircle, MessageSquare, Sparkles } from "lucide-react"

export default function ToolsPage() {
  const tools = [
    {
      name: "Klok",
      url: "https://klokapp.ai/",
      description: "AI-powered scheduling and time management application",
      icon: Zap,
      color: "blue",
      features: ["Smart Scheduling", "AI Integration", "Time Optimization"],
    },
    {
      name: "Yap Map",
      url: "https://yap-map.vercel.app/",
      description: "Interactive mapping and visualization tool for community insights",
      icon: Map,
      color: "green",
      features: ["Interactive Maps", "Data Visualization", "Community Insights"],
    },
    {
      name: "WikiSentry",
      url: "https://wikisentry.vercel.app/",
      description: "Advanced wiki monitoring and content management system",
      icon: Shield,
      color: "purple",
      features: ["Content Monitoring", "Version Control", "Automated Alerts"],
    },
    {
      name: "Prove You Right",
      url: "https://proveyouright.vercel.app/",
      description: "Verification and validation platform for claims and statements",
      icon: CheckCircle,
      color: "orange",
      features: ["Fact Verification", "Source Validation", "Truth Scoring"],
    },
    {
      name: "Kaito-tok",
      url: "https://kaito-tok.vercel.app",
      description: "Next-generation communication and collaboration platform",
      icon: MessageSquare,
      color: "pink",
      features: ["Real-time Chat", "Collaboration Tools", "Community Building"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white">
      <div className="container mx-auto px-6 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-orange-100 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-orange-600 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                TOOLS POWERED BY MIRA
              </h1>
              <Sparkles className="w-8 h-8 text-red-600 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">Innovative Applications & Services</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Discover our suite of cutting-edge tools and applications built on the MIRA ecosystem. Each tool is
              designed to enhance productivity, foster community engagement, and drive innovation.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Tools Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-${tool.color}-100 hover:border-${tool.color}-300 bg-gradient-to-br from-white to-${tool.color}-50/30`}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${tool.color}-500 to-${tool.color}-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 flex items-center justify-center gap-2">
                      {tool.name}
                      <ExternalLink
                        className={`w-4 h-4 text-${tool.color}-600 opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed text-center">{tool.description}</p>

                    <div className="space-y-2 mb-6">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 bg-${tool.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className={`w-full bg-${tool.color}-600 hover:bg-${tool.color}-700 text-white shadow-lg group-hover:shadow-xl transition-all`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Tool
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Stats Section */}
          <div className="grid gap-6 md:grid-cols-4 mb-12">
            {[
              { label: "Active Tools", value: "5+", color: "blue" },
              { label: "Total Users", value: "10K+", color: "green" },
              { label: "Integrations", value: "25+", color: "purple" },
              { label: "Uptime", value: "99.9%", color: "orange" },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`text-center border-2 border-${stat.color}-100 hover:border-${stat.color}-300 hover:shadow-lg transition-all`}
              >
                <CardContent className="p-6">
                  <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-0 shadow-2xl">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Build with MIRA</h2>
                <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
                  Ready to create your own tool powered by MIRA? Join our developer community and start building
                  innovative applications today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 text-lg shadow-lg"
                  >
                    Developer Docs
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-3 text-lg bg-transparent"
                  >
                    API Reference
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
