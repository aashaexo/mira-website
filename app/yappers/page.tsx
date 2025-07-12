import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PersonCard } from "@/components/person-card"
import { people } from "@/lib/data"

export default function Yappers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Mira Yappers</h1>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {/* Empty State */}
        {people.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No berries to display yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}