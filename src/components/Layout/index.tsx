import { useState } from "react"

import MenuBar from "@components/MenuBar"
import Profile from "@components/Profile"
import Sidebar from "@components/Sidebar"
import {
  BLOG_AUTHOR,
  BLOG_AUTHOR_DESCRIPTION,
  BLOG_AUTHOR_POSITION
} from "@lib/constants"

import * as S from "./styled"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.LayoutWrapper>
      <Profile
        title={BLOG_AUTHOR}
        position={BLOG_AUTHOR_POSITION}
        authorDescription={BLOG_AUTHOR_DESCRIPTION}
        isMobileHeader={true}
      />
      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.LayoutWrapper>
  )
}

export default Layout
