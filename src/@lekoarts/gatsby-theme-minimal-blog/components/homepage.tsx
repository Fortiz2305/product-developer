/** @jsx jsx */
import { jsx } from 'theme-ui'
import { HeadFC, Link } from 'gatsby'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Title from '@lekoarts/gatsby-theme-minimal-blog/src/components/title'
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config'
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata'
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes'
import { visuallyHidden } from '@lekoarts/gatsby-theme-minimal-blog/src/styles/utils'
// @ts-ignore
import Hero from '../texts/hero'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo';

type HomepagePost = {
  slug: string
  title: string
  date: string
  excerpt: string
  description: string
  timeToRead?: number
  tags?: {
    name: string
    slug: string
  }[]
}

type MBHomepageProps = {
  posts: HomepagePost[]
}

const PostSummary = ({ post }: { post: HomepagePost }) => (
  <article sx={{ mb: [4, 5] }}>
    <Link to={post.slug} sx={(t) => ({ ...t.styles?.a, fontSize: [2, 3], fontWeight: `medium`, color: `heading`, textDecoration: `none`, ':hover': { color: `primary` } })}>
      {post.title}
    </Link>
    <p sx={{ color: `secondary`, mt: 1, mb: 2, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.timeToRead && ` — ${post.timeToRead} min read`}
    </p>
    <p sx={{ color: `text`, m: 0, fontSize: [1, 2], lineHeight: `body` }}>{post.excerpt}</p>
  </article>
)

const Homepage = ({ posts }: MBHomepageProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{ mb: [5, 6], p: { fontSize: [1, 2, 3]} }}>
        <Hero/>
      </section>
      <Title text='Posts'>
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <section sx={{ mb: [5, 6, 7] }}>
        {posts.map((post) => (
          <PostSummary key={post.slug} post={post} />
        ))}
      </section>
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
