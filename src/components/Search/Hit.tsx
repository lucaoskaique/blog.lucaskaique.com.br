import Post from "../Post"

const Hit = ({ hit }) => {
  return (
    <Post
      slug={hit.fields.slug}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      main_class={hit.main_class}
    />
  )
}

export default Hit
