import Link from "next/link"
import { NextSeo } from "next-seo"
import Prism from "prismjs"
import { useEffect } from "react"

import Comments from "@components/Comments"
import RecommendedPosts from "@components/RecommendedPosts"
import { timeToRead } from "@lib/utils"
import {
  ButtonBack,
  MainContent,
  PostDate,
  PostDescription,
  PostHeader,
  PostTitle
} from "@styles/base"

const BlogPost = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [post])

  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} - Lucas Kaíque`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://lucaskaique.com.br/${post.slug}`,
          title: `${post.frontmatter.title} - Lucas Kaíque`,
          description: post.frontmatter.description,
          images: [
            {
              url: `https://og-image-service.lucaskaique.com.br/api/param?title=${encodeURIComponent(
                post.frontmatter.title
              )}`,
              alt: `${post.frontmatter.title}`
            }
          ]
        }}
      />
      <PostHeader>
        <Link href="/" passHref legacyBehavior>
          <ButtonBack>← Voltar na listagem</ButtonBack>
        </Link>

        <PostDate>
          {post.frontmatter.date} • {timeToRead(post.content)}
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContent>
      <Comments title={post.frontmatter.title} />
      <RecommendedPosts next={post.nextPost} previous={post.prevPost} />
    </>
  )
}

export default BlogPost
