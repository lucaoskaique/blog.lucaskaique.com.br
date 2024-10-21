import { NextSeo } from "next-seo"
import slugify from "slugify"
import styled from "styled-components"
import media from "styled-media-query"

import Post from "@components/Post"
import { getAllPosts } from "@lib/api"
import { unique } from "@lib/utils"

const SeriesTitle = styled.h2`
  background: var(--borders);
  color: var(--texts);
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem 4.4rem;

  ${media.lessThan("large")`
    font-size: 1.5rem;
    padding: 1rem;
  `}
`

const SeriesPage = ({ posts }) => {
  const postList = posts.filter(post => post.frontmatter.categories !== null)

  const categories = postList
    .map(post => post.frontmatter.categories?.[0])
    .filter(unique)
    .filter(n => n)

  const slugifyCategory = category => slugify(category, { lower: true })

  const getPostsByCategory = category =>
    postList.filter(post => post.frontmatter.categories?.[0] === category)

  return (
    <>
      <NextSeo
        title="Series | Lucas Kaíque"
        description="Aqui ficarão as series em que iremos abordar sobre determinados assuntos."
        openGraph={{
          images: [
            {
              url: "https://res.cloudinary.com/lucaos/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1687836847/lucaoskaique/pysales_Carnaval_PLANO_2020_-_7_fhn3rb.jpg",
              width: 1200,
              height: 630,
              alt: "Lucas Kaíque Series"
            }
          ]
        }}
      />

      {categories.map((category, i) => (
        <section key={i}>
          <SeriesTitle id={slugifyCategory(category)}># {category}</SeriesTitle>

          {getPostsByCategory(category).map(post => (
            <Post
              key={post.slug}
              slug={post.slug}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              description={post.frontmatter.description}
              main_class={post.frontmatter.main_class}
            />
          ))}
        </section>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts
    }
  }
}

export default SeriesPage
