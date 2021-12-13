export const base_url: string | null = process.env.BASE_URL || ''

export const number_of_posts_per_page: number = Number(
  process.env.NEXT_PUBLIC_NUMBER_OF_POSTS_PER_PAGE
)

export type PostType = {
  id: number
  title: string
  slug: string
  author: string
  author_profile?: string
  image_field: string
  tags: Array<TagType>
  width_field: number
  height_field: number
  image_alt: string
  reading_time: string
  short_summary: string
  content: string
  draft: Boolean
  created_at: string
  updated_at: string
}

export type TagType = {
  tag: string
}
