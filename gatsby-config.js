require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    siteTitle: `The Product Developer`,
    siteTitleAlt: `The Product Developer Blog`,
    siteHeadline: `The Product Developer Blog`,
    siteUrl: `https://productdeveloper.net`,
    siteDescription: `Site from a software engineer passionate about product development.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@Fortiz2305`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Talks`,
            slug: `/talks`
          },
          {
            title: `About`,
            slug: `/about`,
          }
        ],
        externalLinks: [],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `product developer blog`,
        short_name: `product-developer-blog`,
        description: `Site from a software engineer passionate about product development.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `{
              allPost(sort: {date: DESC}) {
                nodes {
                  title
                  date(formatString: "MMMM D, YYYY")
                  excerpt
                  slug
                }
              }
            }`,
            output: `rss.xml`,
            title: `The Product Developer Blog`,
          },
        ],
      },
    }
  ].filter(Boolean),
}
