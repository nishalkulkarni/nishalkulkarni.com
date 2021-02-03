const { lightTheme, darkTheme } = require(`${__dirname}/src/styles/theme.js`)

const siteMetadata = {
  title: `Nishal Kulkarni`,
  titleTemplate: "%s",
  description: `My personal website/blog.`,
  author: `@nishalkulkarni`,
  url: "https://nishalkulkarni.com",
  image: "/me.jpeg",
  authorEmail: `kulknishu@gmail.com`,
  authorGithub: `https://github.com/nishalkulkarni/`,
  authorLinkedIn: `https://www.linkedin.com/in/nishalkulkarni/`,
  authorReddit: `https://www.reddit.com/user/infinitynishal`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nishal Kulkarni`,
        short_name: `Nishal Kulkarni`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0453ad`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
