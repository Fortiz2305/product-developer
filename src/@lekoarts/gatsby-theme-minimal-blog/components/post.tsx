/** @jsx jsx */
import * as React from "react";
import { jsx, Heading } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import PostFooter from "./post-footer";
import { ShareButtons } from "../../../components/ShareButtons";

type PostProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      canonicalUrl?: string;
      body: string;
      excerpt: string;
      timeToRead?: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
  };
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const description = post.description ? post.description : post.excerpt;
  return (
    <Layout>
      <Seo
        title={post.title}
        description={description}
        image={
          post.banner ? post.banner?.childImageSharp?.resize?.src : undefined
        }
        pathname={post.slug}
        canonicalUrl={post.canonicalUrl}
      />
      <Heading as="h2" variant="styles.h2">
        {post.title}
      </Heading>
      <p
        sx={{
          color: `secondary`,
          mt: 3,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.date}</time>
        {post.tags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
        {post.timeToRead && ` — `}
        {post.timeToRead && <span>{post.timeToRead} min read</span>}
      </p>

      <ShareButtons url={url} title={post.title} description={description} />

      <section
        sx={{
          my: 5,
          ".gatsby-resp-image-wrapper": {
            my: [4, 4, 5],
            boxShadow: shadow.join(`, `),
          },
          variant: `layout.content`,
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
      <PostFooter url={url} title={post.title} description={description} />
    </Layout>
  );
};

export default Post;
