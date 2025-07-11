import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            MIRA
          </Link>
          <div className="flex space-x-4">
            <Link href="/yappers">
              <Button variant="ghost">Yappers</Button>
            </Link>
            <Link href="/articles">
              <Button variant="ghost">Articles</Button>
            </Link>
            <Link href="/whitepaper">
              <Button variant="ghost">Whitepaper</Button>
            </Link>
            <Link href="/tools">
              <Button variant="ghost">Tools</Button>
            </Link>
            <Link href="/podcast">
              <Button variant="ghost">Podcast</Button>
            </Link>
            <Link href="/community">
              <Button variant="ghost">Community</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
