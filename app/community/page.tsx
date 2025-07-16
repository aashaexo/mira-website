import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Community {
  name: string;
  url: string;
  image: string;
  icon: string;
  platform: string;
}

interface CommunityCardProps {
  community: Community;
}

function CommunityCard({ community, label }: CommunityCardProps & { label: string }) {
  const titleSnippet = community.name.length > 30 
    ? `${community.name.substring(0, 30)}...` 
    : community.name;

  return (
    <Link href={community.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col">
        <div className="relative aspect-[1500/600] bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={community.image}
            alt={community.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm font-medium">{label}</span>
          </div>
        </div>

        <div className="bg-black text-white p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{titleSnippet}</h3>

          {/* <div className="flex items-center text-gray-300 text-sm mb-4">
            <span className="mr-2">{community.icon}</span>
            <span>Join on {community.platform}</span>
          </div> */}

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
      name: "Mira Citadel",
      url: "https://x.com/i/communities/1933115038644244535",
      image: "/citadel.jpeg",
      icon: "🏰",
      platform: "X (Twitter)",
    },
    {
      name: "Mira Yappers",
      url: "https://x.com/i/communities/1932946062471254498",
      image: "/yappers.jpeg",
      icon: "💬",
      platform: "X (Twitter)",
    },
    {
      name: "Mira Korea",
      url: "https://t.me/mira_koreacommunity/1",
      image: "/korea.jpeg",
      icon: "🇰🇷",
      platform: "Telegram",
    },
    {
      name: "Mira China",
      url: "https://x.com/MiraNetworkCN",
      image: "/telegram.jpeg",
      icon: "📱",
      platform: "Telegram",
    },
    {
      name: "Discord Server",
      url: "https://discord.com/invite/mira-network",
      image: "/discord.png",
      icon: "🎮",
      platform: "Discord",
    },
    {
      name: "Mira Korea",
      url: "https://x.com/i/communities/1923786875493548538",
      image: "/korea.jpeg",
      icon: "🎮",
      platform: "Community",
    }
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
          {communities.map((community, index) => {
            let label = '';
            if (community.name === 'Mira China') {
              label = 'X';
            } else if (community.platform === 'Telegram') {
              label = 'Telegram';
            } else if (community.platform === 'Discord') {
              label = 'Discord';
            } else if (community.platform === 'X (Twitter)') {
              label = 'X Community';
            } else {
              label = 'Community';
            }
            return (
              <CommunityCard
                key={index}
                community={community}
                label={label}
              />
            );
          })}
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
