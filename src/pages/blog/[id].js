import Head from 'next/head'

const db = {
  1: {
    title: 'First blog post',
    content: 'This is the content of the first blog post'
  },
  2: {
    title: 'Second blog post',
    emoji: 'This is the content of the second blog post'
  }
}

export default function BlogPage({ title, emoji }) {
  const imgUrl = `https://localhost:3000/api/og?title=${title}&emoji=${emoji}`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={imgUrl} />
      </Head>
    </div>
  )
}

export async function getServersideProps({ query }) {
  const { title, emoji} = db[query.id] ?? {}

  return {
    props: {
      title,
      emoji
    }
  }
}
