export interface Person {
    id: string
    name: string
    bio?: string
    profilePicture?: string
    link?: string
    category?: "team" | "yappers"
  }
  
  export interface Article {
    id: string
    title: string
    subtitle?: string
    author: string
    authorPicture?: string
    description?: string
    image?: string
    link?: string
    publishedDate?: string
    tags?: string[]
  }