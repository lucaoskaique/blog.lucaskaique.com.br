import { Menu } from "@styled-icons/boxicons-regular/Menu"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Home } from "@styled-icons/boxicons-solid/Home"
// import { LightBulb as Light } from "@styled-icons/entypo/LightBulb"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

import * as S from "./styled"

interface MenuBarProps {
  setIsMenuOpen: (isOpen: boolean) => void
  isMenuOpen: boolean
}

const MenuBar: FC<MenuBarProps> = ({ setIsMenuOpen, isMenuOpen }) => {
  const router = useRouter()

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <Link href="/" passHref legacyBehavior>
          <S.MenuBarLink
            title="Voltar para Home"
            className={router.pathname === "/" ? "active" : ""}>
            <S.MenuBarItem>
              <Home />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </Link>

        <Link href="/search" passHref legacyBehavior>
          <S.MenuBarLink
            title="Pesquisar no Blog"
            className={router.pathname === "/search" ? "active" : ""}>
            <S.MenuBarItem>
              <Search />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </Link>

        <S.MenuBarGroupDesktop></S.MenuBarGroupDesktop>
      </S.MenuBarGroup>

      <S.MenuBarGroupMobile>
        <S.MenuBarGroup>
          <S.MenuBarItem title="Abrir Menu" onClick={openMenu}>
            <Menu />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarGroupMobile>

      <S.MenuBarGroup>
        {/* <S.MenuBarItem title="Mudar o Tema" className={theme || ""}>
          <Light />
        </S.MenuBarItem> */}
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" })
          }}>
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
