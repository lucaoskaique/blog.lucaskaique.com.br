import { format } from "date-fns"
import { pt } from "date-fns/locale"
import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

const postsDirectory = join(process.cwd(), "posts")

export function getPostBySlug(slug: string) {
  if (!slug) return null

  try {
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
      locale: pt
    })

    return {
      slug: realSlug,
      date: data.date.toString(),
      frontmatter: { ...data, date },
      content
    }
  } catch (error) {
    console.error("Error reading the file:", error)
    return null
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )

  return posts
}
