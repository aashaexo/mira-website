import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Play, Clock, Users, Sparkles } from "lucide-react"

export default function PodcastPage() {
  const podcasts = [
    {
      name: "The Rollup",
      url: "https://x.com/i/broadcasts/1DXxyqbveXPxM",
      platform: "Twitter Spaces",
      duration: "Live",
      description: "Real-time discussions about the latest in blockchain and DeFi",
      color: "blue",
    },
    {
      name: "Beacon",
      url: "https://youtu.be/AqhCsI3MwXk?feature=shared",
      platform: "YouTube",
      duration: "45 min",
      description: "Deep dive into MIRA's technical architecture and vision",
      color: "red",
    },
    {
      name: "Blockster",
      url: "https://www.youtube.com/watch?v=_ty2tN7UwaE",
      platform: "YouTube",
      duration: "32 min",
      description: "Industry insights and market analysis with expert guests",
      color: "green",
    },
    {
      name: "BlockFuel",
      url: "https://x.com/BlockFuel/status/1915431088123527679",
      platform: "Twitter",
      duration: "Thread",
      description: "Comprehensive thread covering MIRA's latest developments",
      color: "purple",
    },
    {
      name: "Blocmates",
      url: "https://t.co/lm6PEnuUen",
      platform: "Twitter",
      duration: "Discussion",
      description: "Community-driven conversations and networking",
      color: "orange",
    },
    {
      name: "Delphi Digital",
      url: "https://youtu.be/Ig2NZ1LFGms?si=21K6AvPc2nVbgHJv",
      platform: "YouTube",
      duration: "58 min",
      description: "Professional research and institutional perspective",
      color: "pink",
    },
    {
      name: "Outpost",
      url: "https://youtu.be/nDJgI_9vC7U?si=u3yBgoL3Zy-QWEZp",
      platform: "YouTube",
      duration: "41 min",
      description: "Exploring the future of decentralized systems",
      color: "teal",
    },
    {
      name: "Jax Dwyer",
      url: "https://youtu.be/JBhBohe_Nq4?si=V5AqwBy7mgSMdjAv",
      platform: "YouTube",
      duration: "29 min",
      description: "Personal insights from industry thought leaders",
      color: "indigo",
    },
    {
      name: "CrunchDAO Panel",
      url: "https://youtu.be/IICxn-nIdiE?si=jVyiioR49aMRrL40",
      platform: "YouTube",
      duration: "1h 15min",
      description: "Panel discussion with multiple industry experts",
      color: "cyan",
    },
    {
      name: "OpenAGI Summit",
      url: "https://www.youtube.com/live/wgtPtFvG1zo?feature=shared&t=18043",
      platform: "YouTube Live",
      duration: "2h 30min",
      description: "Live summit covering AI and blockchain convergence",
      color: "emerald",
    },
  ]

  const platformIcons = {
    YouTube: "🎥",
    "YouTube Live": "🔴",
    "Twitter Spaces": "🎙️",
    Twitter: "🐦",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white">
      <div className="container mx-auto px-6 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-red-100 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Play className="w-8 h-8 text-red-600 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                PODCAST
              </h1>
              <Sparkles className="w-8 h-8 text-pink-600 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">Audio & Video Content</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Tune in to our comprehensive collection of podcasts, interviews, and discussions featuring MIRA team
              members, community leaders, and industry experts sharing insights about blockchain technology and
              decentralized systems.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-4 mb-12">
            <Card className="text-center border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Episodes</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">15h+</div>
                <div className="text-gray-600 font-medium">Total Content</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-gray-600 font-medium">Platforms</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Total Views</div>
              </CardContent>
            </Card>
          </div>

          {/* Podcast List */}
          <div className="space-y-6 mb-12">
            {podcasts.map((podcast, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-${podcast.color}-100 hover:border-${podcast.color}-300 bg-gradient-to-r from-white to-${podcast.color}-50/30`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-${podcast.color}-500 to-${podcast.color}-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <Play className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-xl text-gray-800">{podcast.name}</h3>
                          <span className="text-2xl">{platformIcons[podcast.platform]}</span>
                        </div>

                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-1" />
                            {podcast.platform}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {podcast.duration}
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">{podcast.description}</p>
                      </div>
                    </div>

                    <div className="ml-6">
                      <a
                        href={podcast.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 bg-${podcast.color}-600 hover:bg-${podcast.color}-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg group-hover:shadow-xl`}
                      >
                        <Play className="w-4 h-4" />
                        <span>Listen</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-red-600 to-pink-600 border-0 shadow-2xl">
              <CardContent className="p-8">
                <Play className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Episode</h2>
                <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
                  Subscribe to our channels and stay updated with the latest podcasts, interviews, and community
                  discussions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-3 text-lg shadow-lg"
                  >
                    Subscribe Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-3 text-lg bg-transparent"
                  >
                    View All Episodes
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
