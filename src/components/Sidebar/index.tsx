/* eslint-disable no-unused-vars */
import MenuLinks from "@components/MenuLinks"
import Profile from "@components/Profile"
import SocialLinks from "@components/SocialLinks"
import {
  BLOG_AUTHOR,
  BLOG_AUTHOR_DESCRIPTION,
  BLOG_AUTHOR_POSITION
} from "@lib/constants"

import * as S from "./styled"

export interface SidebarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const Sidebar = ({ isMenuOpen, setIsMenuOpen }: SidebarProps) => (
  <S.SidebarContainer isMenuOpen={isMenuOpen}>
    <Profile
      title={BLOG_AUTHOR}
      position={BLOG_AUTHOR_POSITION}
      authorDescription={BLOG_AUTHOR_DESCRIPTION}
      isMobileHeader={false}
    />
    <S.SidebarLinksContainer>
      <SocialLinks />
      <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.SidebarLinksContainer>
  </S.SidebarContainer>
)

export default Sidebar
