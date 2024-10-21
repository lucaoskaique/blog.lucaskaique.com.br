import { NextSeo } from "next-seo"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

import Post from "@components/Post"

const BlogList = ({ posts }) => {
  const sortedPosts = posts.sort((post1, post2) =>
    new Date(post1.date) > new Date(post2.date) ? -1 : 1
  )

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(
    sortedPosts.slice(count.prev, count.next)
  )

  const getMoreData = () => {
    if (current.length === sortedPosts.length) {
      setHasMore(false)
      return
    }

    setCurrent(
      current.concat(sortedPosts.slice(count.prev + 10, count.next + 10))
    )

    setCount(prevState => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }))
  }

  return (
    <>
      <NextSeo
        title="Home | Lucas Kaíque"
        description="Um blog de um Engenheiro de Software, Produtor de Eventos, DJ no tempo livre e fala de Javascript, React e outras tecnologias."
        openGraph={{
          images: [
            {
              url: "https://res.cloudinary.com/lucaos/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1687836847/lucaoskaique/pysales_Carnaval_PLANO_2020_-_7_fhn3rb.jpg",
              width: 1200,
              height: 630,
              alt: "Lucas Kaíque Blog"
            }
          ]
        }}
      />
      <InfiniteScroll
        loader={<h4>Carregando...</h4>}
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}>
        {current.map((post, i) => (
          <Post
            key={i}
            slug={post.slug}
            title={post.frontmatter.title}
            timeToRead={post.timeToRead}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
            main_class={post.frontmatter["main-class"]}
          />
        ))}
      </InfiniteScroll>
    </>
  )
}

export default BlogList
