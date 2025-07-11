import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, MessageCircle, Users, Globe, Sparkles, Heart, Zap } from "lucide-react"

export default function CommunityPage() {
  const communities = [
    {
      name: "Korea Telegram",
      icon: MessageCircle,
      description: "Join our vibrant Korean community for local discussions and updates",
      color: "blue",
      members: "2.5K+",
      activity: "Very Active",
    },
    {
      name: "Discord Server",
      icon: Users,
      description: "Connect with developers, traders, and enthusiasts in real-time",
      color: "purple",
      members: "8.2K+",
      activity: "24/7 Active",
    },
    {
      name: "Mira Citadel on Twitter",
      icon: MessageCircle,
      description: "Follow official updates, announcements, and community highlights",
      color: "sky",
      members: "15K+",
      activity: "Daily Updates",
    },
    {
      name: "Mira Yappers on Twitter",
      icon: MessageCircle,
      description: "Join the conversation with our most active community contributors",
      color: "green",
      members: "5.8K+",
      activity: "High Engagement",
    },
    {
      name: "Mira Korea on Twitter",
      icon: Globe,
      description: "Korean community hub for local news, events, and discussions",
      color: "orange",
      members: "3.2K+",
      activity: "Regional Focus",
    },
  ]

  const stats = [
    { label: "Total Members", value: "35K+", icon: Users, color: "blue" },
    { label: "Active Communities", value: "5+", icon: MessageCircle, color: "green" },
    { label: "Countries", value: "50+", icon: Globe, color: "purple" },
    { label: "Daily Messages", value: "1K+", icon: Zap, color: "orange" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50/30 to-white">
      <div className="container mx-auto px-6 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-teal-100 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-teal-600 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                COMMUNITY
              </h1>
              <Heart className="w-8 h-8 text-cyan-600 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">Join Our Global Network</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Connect with thousands of MIRA enthusiasts, developers, and innovators from around the world. Our vibrant
              community spans multiple platforms and languages, fostering collaboration and knowledge sharing.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Community Stats */}
          <div className="grid gap-6 md:grid-cols-4 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className={`text-center border-2 border-${stat.color}-100 hover:border-${stat.color}-300 hover:shadow-lg transition-all group`}
                >
                  <CardContent className="p-6">
                    <IconComponent
                      className={`w-8 h-8 text-${stat.color}-600 mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Community Platforms */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {communities.map((community, index) => {
              const IconComponent = community.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-${community.color}-100 hover:border-${community.color}-300 bg-gradient-to-br from-white to-${community.color}-50/30`}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${community.color}-500 to-${community.color}-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 flex items-center justify-center gap-2">
                      {community.name}
                      <ExternalLink
                        className={`w-4 h-4 text-${community.color}-600 opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed text-center">{community.description}</p>

                    <div className="flex justify-between items-center mb-6 text-sm">
                      <div className={`bg-${community.color}-50 px-3 py-1 rounded-full`}>
                        <span className={`text-${community.color}-700 font-medium`}>{community.members}</span>
                      </div>
                      <div className={`bg-${community.color}-50 px-3 py-1 rounded-full`}>
                        <span className={`text-${community.color}-700 font-medium`}>{community.activity}</span>
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-${community.color}-600 hover:bg-${community.color}-700 text-white shadow-lg group-hover:shadow-xl transition-all`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Community Guidelines */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Community Guidelines</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-lg">🤝</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Be Respectful</h3>
                      <p className="text-gray-600">Treat all community members with respect and kindness</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-lg">💡</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Share Knowledge</h3>
                      <p className="text-gray-600">Contribute valuable insights and help others learn</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-lg">🚫</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">No Spam</h3>
                      <p className="text-gray-600">Keep discussions relevant and avoid excessive promotion</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-lg">🔒</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Stay Safe</h3>
                      <p className="text-gray-600">Protect your privacy and be cautious with personal information</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="text-center mb-12">
            <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 border-0 shadow-2xl">
              <CardContent className="p-8">
                <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Want to Learn More?</h2>
                <p className="text-teal-100 text-lg mb-6 max-w-2xl mx-auto">
                  Explore our comprehensive documentation and resources to deepen your understanding of the MIRA
                  ecosystem.
                </p>
                <a href="https://scrolls.mira.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-teal-50 font-bold px-8 py-3 text-lg shadow-lg"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Visit SCROLLS.MIRA.COM
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Final Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Join?</h2>
                <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                  Become part of our growing global community. Choose your preferred platform and start connecting with
                  fellow MIRA enthusiasts today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 text-lg shadow-lg"
                  >
                    Join Discord
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 font-bold px-8 py-3 text-lg bg-transparent"
                  >
                    Follow on Twitter
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
