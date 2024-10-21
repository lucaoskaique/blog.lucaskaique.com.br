import Link from "next/link"
import React from "react"

import * as S from "./styled"

interface PaginationProps {
  isFirst: boolean
  prevPage: string
  currentPage: number
  numPages: number
  isLast: boolean
  nextPage: string
}

const Pagination: React.FC<PaginationProps> = props => (
  <S.PaginationWrapper>
    {!props.isFirst && (
      <Link href={props.prevPage}>
        <a href={props.prevPage}>← Página Anterior</a>
      </Link>
    )}
    <p>
      {props.currentPage} de {props.numPages}
    </p>
    {!props.isLast && (
      <Link href={props.nextPage}>
        <a href={props.nextPage}>Próxima Página →</a>
      </Link>
    )}
  </S.PaginationWrapper>
)

export default Pagination
