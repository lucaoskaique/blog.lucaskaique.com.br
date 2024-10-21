import { FC, useEffect, useRef } from "react"
import { Configure, Hits, SearchBox, Stats } from "react-instantsearch"

import Hit from "./Hit"
import * as S from "./styled"

const Search: FC = () => {
  const searchBoxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Optionally, you can focus the search box programmatically when needed
    // searchBoxRef.current?.focus()
  }, [])

  return (
    <S.SearchWrapper>
      <>
        <Configure hitsPerPage={200} distinct />
        <SearchBox
          translations={{
            submitButtonTitle: "Search",
            resetButtonTitle: "Reset"
          }}
          ref={searchBoxRef}
          placeholder="Pesquisar..."
        />
        <Stats
          translations={{
            rootElementText({ nbHits, processingTimeMS }) {
              return nbHits === 1
                ? `${nbHits} resultado encontrado em ${processingTimeMS}ms`
                : `${nbHits} resultados encontrados em ${processingTimeMS}ms`
            }
          }}
        />
        <Hits hitComponent={Hit} />
      </>
    </S.SearchWrapper>
  )
}

export default Search
