import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/20 to-red-50/20">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
            Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore thought-provoking content and insights from our contributors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles to display yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
