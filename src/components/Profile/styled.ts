import styled, { css } from "styled-components"
import media from "styled-media-query"

import { ProfileProps } from "."
import transitions from "../../styles/transitions"

export type ProfileContainerProps = Pick<ProfileProps, "isMobileHeader">

export const ProfileContainer = styled.section<ProfileContainerProps>`
  ${({ isMobileHeader }) => css`
    display: ${isMobileHeader ? "none" : "flex"};
    color: var(--texts);
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
    border-bottom: 1px solid var(--borders);

    ${media.lessThan("large")`
      align-items: flex-start;
      display: ${isMobileHeader ? "flex" : "none"};
      background: var(--mediumBackground);
      border-bottom: 1px solid var(--borders);
      padding: 1rem;
      width: 100vw;
      position: fixed;
      z-index: 10;
    `}
  `}
`

export const ProfileLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: ${transitions.COLOR};

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
    font-size: .8rem;
    margin-top: .2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`
