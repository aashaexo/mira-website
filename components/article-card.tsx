
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  color: string;
  href: string;
  image?: string;
}

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const titleSnippet = article.title.length > 30 
    ? `${article.title.substring(0, 30)}...` 
    : article.title;
    
  const descriptionSnippet = article.description.length > 100 
    ? `${article.description.substring(0, 100)}...` 
    : article.description;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col">
      <div className="relative aspect-[2.5/1] bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm font-medium">X Article</span>
        </div>
      </div>

      <div className="bg-black text-white p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{titleSnippet}</h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {descriptionSnippet}
        </p>

        <Link
          href={article.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors mt-auto"
        >
          <span>Read More</span>
          <ExternalLink className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </div>
  )
} 