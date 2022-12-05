/** @jsx jsx */
import { jsx, Link as TLink, Heading, Box, Flex } from "theme-ui"
import kebabCase from "lodash.kebabcase"
import { HeadFC, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

type MBTagsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: MBTagsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <Heading as="h2" variant="styles.h2">
        Tags
      </Heading>
      <Box mt={[4, 5]}>
        {list.map((listItem) => (
          <Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
            <TLink
              as={Link}
              sx={{ variant: `links.listItem`, mr: 2 }}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
            >
              {listItem.fieldValue} <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </TLink>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Tags

export const Head: HeadFC = () => <Seo title="Tags" />
