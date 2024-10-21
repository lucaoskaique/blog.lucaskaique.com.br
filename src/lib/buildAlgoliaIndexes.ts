import { algoliasearch } from "algoliasearch"
import slugify from "slugify"

interface PostFrontmatter {
  title: string
  "main-class": string
  description: string
  date: string
}

interface Post {
  frontmatter: PostFrontmatter
  content: string
  slug: string
  date: string
}

interface TransformedPost {
  objectID: string
  title: string
  main_class: string
  description: string
  content: string
  fields: {
    slug: string
  }
  date: string
  date_timestamp: number
}

function transformPostsToSearchObjects(posts: Post[]): TransformedPost[] {
  const transformed = posts.map(post => {
    return {
      objectID: slugify(post.frontmatter.title, { lower: true, strict: true }),
      title: post.frontmatter.title,
      main_class: post.frontmatter["main-class"],
      description: post.frontmatter.description,
      content: post.content.substr(0, 5000),
      fields: {
        slug: post.slug
      },
      date: post.frontmatter.date,
      date_timestamp: Date.parse(post.date)
    }
  })

  return transformed
}

export async function buildAlgoliaIndexes(posts) {
  if (
    Boolean(process.env.NEXT_PUBLIC_PROD_ALGOLIA) !== true ||
    process.env.NODE_ENV === "development"
  )
    return

  try {
    const transformedPosts = transformPostsToSearchObjects(posts)

    if (posts.length > 0) {
      const client = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.ALGOLIA_ADMIN_KEY
      )

      const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)
      const algoliaResponse = await index.saveObjects(transformedPosts)

      // eslint-disable-next-line no-console
      console.log(
        `\n\n🎉 Sucessfully added ${
          algoliaResponse.objectIDs.length
        } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
          "\n"
        )}`
      )
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
