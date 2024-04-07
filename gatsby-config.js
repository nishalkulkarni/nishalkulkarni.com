/**
 * @type {import('gatsby').GatsbyConfig}
 */
const { lightTheme, darkTheme } = require(`./src/styles/theme.js`)

const siteMetadata = {
  title: `Nishal Kulkarni`,
  titleTemplate: "%s",
  description: `Nishal's personal website`,
  siteUrl: `https://nishalkulkarni.com`,
  siteSource: `https://github.com/nishalkulkarni/nishalkulkarni.com`,
  image: "/me_avatar.png",
  authorName: `Nishal Kulkarni`,
  authorEmail: `nishalkulkarni@duck.com`,
  authorGithub: `https://github.com/nishalkulkarni/`,
  authorLinkedIn: `https://www.linkedin.com/in/nishalkulkarni/`,
  authorMastadon: `https://mastodon.social/@nishal`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Nishal Kulkarni`,
        short_name: `Nishal Kulkarni`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0453ad`,
        display: `standalone`,
        "icon": "src/images/icon.png",
        theme_color_in_head: false,
      }
    }, {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
        ],
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": `${__dirname}/posts/`
      },
    }, {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: lightTheme,
        dark: darkTheme,
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};