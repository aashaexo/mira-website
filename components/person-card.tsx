import { ExternalLink } from "lucide-react"
import type { Person } from "@/lib/types"

interface PersonCardProps {
  person: Person
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Profile Picture */}
        <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center">
          {person.profilePicture ? (
            <img
              src={person.profilePicture || "/placeholder.svg"}
              alt={person.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-2xl font-bold text-red-600">{person.name.charAt(0).toUpperCase()}</span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>

        {/* Link */}
        {person.link && (
          <a
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            <span>Connect</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </div>
  )
}