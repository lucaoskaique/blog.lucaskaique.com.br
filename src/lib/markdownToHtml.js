import remark from 'remark'
import html from 'remark-html'
import headings from 'remark-autolink-headings'
import slug from 'remark-slug'
import remarkOembed from 'remark-oembed'
import remarkGfm from 'remark-gfm'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(remarkOembed)
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(slug)
    .use(headings, {
      behavior: 'wrap',
      linkProperties: {
        className: 'anchor'
      }
    })
    .process(markdown)

  return result.toString()
}
