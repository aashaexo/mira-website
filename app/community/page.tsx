import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Community {
  name: string;
  url: string;
  icon: string;
  platform: string;
}

interface CommunityCardProps {
  community: Community;
}

function CommunityCard({ community }: CommunityCardProps) {
  const titleSnippet = community.name.length > 30 
    ? `${community.name.substring(0, 30)}...` 
    : community.name;

  return (
    <Link href={community.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col">
        <div className="relative aspect-[2096/1154] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-8xl">
            {community.icon}
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm font-medium">Community</span>
          </div>
        </div>

        <div className="bg-black text-white p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{titleSnippet}</h3>

          <div className="flex items-center text-gray-300 text-sm mb-4">
            <span className="mr-2">{community.icon}</span>
            <span>Join on {community.platform}</span>
          </div>

          <div className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors mt-auto">
            <span>Join Community</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function CommunityPage() {
  const communities: Community[] = [
    {
      name: "Korea Telegram",
      url: "https://t.me/mira_korea",
      icon: "📱",
      platform: "Telegram",
    },
    {
      name: "Discord Server",
      url: "https://discord.gg/mira",
      icon: "🎮",
      platform: "Discord",
    },
    {
      name: "Mira Citadel",
      url: "https://x.com/mira_citadel",
      icon: "🏰",
      platform: "X (Twitter)",
    },
    {
      name: "Mira Yappers",
      url: "https://x.com/mira_yappers",
      icon: "💬",
      platform: "X (Twitter)",
    },
    {
      name: "Mira Korea",
      url: "https://x.com/mira_korea",
      icon: "🇰🇷",
      platform: "X (Twitter)",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50/30 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
            Community
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <CommunityCard key={index} community={community} />
          ))}
        </div>

        {communities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No communities to display yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
