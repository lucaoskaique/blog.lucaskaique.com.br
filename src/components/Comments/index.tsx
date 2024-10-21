import React, { FC, useEffect, useRef } from "react"

interface CommentsProps {
  title: string
}

const Comments: FC<CommentsProps> = ({ title }) => {
  const commentBox = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark"
    const utterancesTheme = theme === "dark" ? "github-dark" : "github-light"

    const watchThemeSwitch = new MutationObserver(mutations => {
      const utterances = document.querySelector(
        ".utterances-frame"
      ) as HTMLIFrameElement
      if (!utterances) return

      for (const mutation of mutations) {
        if (mutation.attributeName !== "class") return
        const target = mutation.target as Element
        const theme = target.classList.contains("dark")
          ? "github-dark"
          : "github-light"

        const message = {
          type: "set-theme",
          theme: theme
        }

        utterances.contentWindow?.postMessage(message, "https://utteranc.es")
      }
    })

    const scriptEl = document.createElement("script")
    scriptEl.async = true
    scriptEl.setAttribute("theme", utterancesTheme)
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("crossorigin", "anonymous")
    scriptEl.setAttribute("repo", "lucaoskaique/blog.lucaskaique.com.br")
    scriptEl.setAttribute("issue-term", "title")
    commentBox.current?.replaceChildren(scriptEl)

    watchThemeSwitch.observe(document.body, { attributes: true })
  }, [title])

  return <div ref={commentBox} />
}

export default Comments
