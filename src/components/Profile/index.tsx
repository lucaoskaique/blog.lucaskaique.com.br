import Link from "next/link"
import { FC } from "react"

import Avatar from "@components/Avatar"

import * as S from "./styled"

export interface ProfileProps {
  title: string
  position: string
  authorDescription: string
  isMobileHeader: boolean
}

const Profile: FC<ProfileProps> = ({
  title,
  position,
  authorDescription,
  isMobileHeader
}) => {
  return (
    <S.ProfileContainer isMobileHeader={isMobileHeader}>
      <Link href="/" passHref legacyBehavior>
        <S.ProfileLink>
          <Avatar />
          <S.ProfileAuthor>
            {title}
            <S.ProfilePosition>{position}</S.ProfilePosition>
          </S.ProfileAuthor>
        </S.ProfileLink>
      </Link>
      <S.ProfileDescription>{authorDescription}</S.ProfileDescription>
    </S.ProfileContainer>
  )
}

export default Profile
