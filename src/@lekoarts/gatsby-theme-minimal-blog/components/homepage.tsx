/** @jsx jsx */
import { jsx } from 'theme-ui'
import { HeadFC, Link } from 'gatsby'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Title from '@lekoarts/gatsby-theme-minimal-blog/src/components/title'
import Listing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing'
import List from '@lekoarts/gatsby-theme-minimal-blog/src/components/list'
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config'
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata'
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes'
import { visuallyHidden } from '@lekoarts/gatsby-theme-minimal-blog/src/styles/utils'
// @ts-ignore
import Hero from '../texts/hero'
// @ts-ignore
import Bottom from '../texts/bottom'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo';

type MBHomepageProps = {
  posts: {
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
  }[]
}

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
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
