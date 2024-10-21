import Link from "next/link"
import React from "react"

import * as S from "./styled"

interface PostProps {
  slug: string
  date: string
  timeToRead?: number
  title: string
  description: string
  main_class?: string
}

const Post: React.FC<PostProps> = ({
  slug,
  date,
  timeToRead,
  title,
  description,
  main_class
}) => {
  return (
    <Link href={slug} passHref legacyBehavior>
      <S.PostLink>
        <S.PostWrapper>
          {main_class && (
            <S.PostTag className={`is-${main_class}`}>{main_class}</S.PostTag>
          )}
          <S.PostInfo>
            <S.PostDate>
              {date} {timeToRead && ` • ${timeToRead} min de leitura`}
            </S.PostDate>
            <S.PostTitle>{title}</S.PostTitle>
            <S.PostDescription>{description}</S.PostDescription>
          </S.PostInfo>
        </S.PostWrapper>
      </S.PostLink>
    </Link>
  )
}

export default Post
