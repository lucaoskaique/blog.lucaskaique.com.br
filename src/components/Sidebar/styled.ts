import styled, { css } from "styled-components"
import media from "styled-media-query"

import { SidebarProps } from "."
import transitions from "../../styles/transitions"

export type ProfileContainerProps = Pick<SidebarProps, "isMenuOpen">

export const SidebarContainer = styled.aside<ProfileContainerProps>`
  ${({ isMenuOpen }) => css`
    align-items: center;
    border-right: 1px solid var(--borders);
    background: var(--mediumBackground);
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    padding: 2rem;
    text-align: center;
    width: 20rem;
    transition: ${transitions.ALL};
    z-index: 2;
    border: 0.4rem solid var(--borders);

    ${media.lessThan("large")`
      align-items: flex-start;
      border: 0;
      height: calc(100% - 49px);
      padding: 0;
      width: 100%;
      transform: ${isMenuOpen ? "translateX(0)" : "translateX(-100vw)"};
      border: 0.1rem solid var(--borders);
    `}
  `}
`

export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
