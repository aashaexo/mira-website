import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Podcast {
  name: string;
  url: string;
  image: string;
  platform: string;
  badge: string;
}

interface PodcastCardProps {
  podcast: Podcast;
}

function PodcastCard({ podcast }: PodcastCardProps) {
  const titleSnippet = podcast.name.length > 30 
    ? `${podcast.name.substring(0, 30)}...` 
    : podcast.name;

  const platformIcons = {
    YouTube: "🎥",
    Twitter: "🐦",
  };

  return (
    <Link href={podcast.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col">
        <div className="relative aspect-[2096/1154] bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={podcast.image}
            alt={podcast.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm font-medium">{podcast.badge}</span>
          </div>
        </div>

        <div className="bg-black text-white p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{titleSnippet}</h3>

          <div className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors mt-auto">
            <span>Listen Now</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function PodcastPage() {
  const podcasts: Podcast[] = [
    {
      name: "The Rollup",
      url: "https://x.com/i/broadcasts/1DXxyqbveXPxM",
      image: "/therollup.jpg",
      platform: "Twitter",
      badge: "X Live",
    },
    {
      name: "Beacon",
      url: "https://youtu.be/AqhCsI3MwXk?feature=shared",
      image: "/beacon_podcast.png",
      platform: "YouTube",
      badge: "Podcast",
    },
    {
      name: "Blockster",
      url: "https://www.youtube.com/watch?v=_ty2tN7UwaE",
      image: "/blockster.png",
      platform: "YouTube",
      badge: "Podcast",
    },
    {
      name: "BlockFuel",
      url: "https://x.com/BlockFuel/status/1915431088123527679",
      image: "/blockfuel.png",
      platform: "Twitter",
      badge: "Podcast",
    },
    {
      name: "Blocmates",
      url: "https://t.co/lm6PEnuUen",
      image: "/blockmates.png",
      platform: "Twitter",
      badge: "Podcast",
    },
    {
      name: "Delphi Digital",
      url: "https://youtu.be/Ig2NZ1LFGms?si=21K6AvPc2nVbgHJv",
      image: "/delphi_digital.png",
      platform: "YouTube",
      badge: "Podcast",
    },
    {
      name: "Outpost",
      url: "https://youtu.be/nDJgI_9vC7U?si=u3yBgoL3Zy-QWEZp",
      image: "/outpost.png",
      platform: "YouTube",
      badge: "Podcast",
    },
    {
      name: "Jax Dwyer",
      url: "https://youtu.be/JBhBohe_Nq4?si=V5AqwBy7mgSMdjAv",
      image: "/jax_dwyer.png",
      platform: "YouTube",
      badge: "Podcast",
    },
    {
      name: "CrunchDAO Panel at EthCC",
      url: "https://youtu.be/IICxn-nIdiE?si=jVyiioR49aMRrL40",
      image: "/CrunchDAO.png",
      platform: "YouTube",
      badge: "IRL Live Panel",
    },
    {
      name: "OpenAGI Summit",
      url: "https://www.youtube.com/live/wgtPtFvG1zo?feature=shared&t=18043",
      image: "/Open_AGI_Summit.png",
      platform: "YouTube",
      badge: "IRL Live Panel",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-red-600 hover:text-red-800 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
            Podcasts
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast} />
          ))}
        </div>

        {podcasts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No podcasts to display yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
