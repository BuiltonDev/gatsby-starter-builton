module.exports = {
  siteMetadata: {
    title: `BuiltOn ♥ Gatsby`,
    description: `Kick off your next, great BuiltOn and Gatsby project with this default starter.`,
    author: `@BuiltOnDev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@builton/gatsby-source-builton`,
      options: {
        api_key:
          "i3-mbHB_XMZ74fwDl0SHvWecdmzAP7whyrvGjS_A7WiRqtOxnAiIL1FRFVx9AD2sqxAQ9yjv13ueTPI40TXnOA==",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: process.env.PATH_PREFIX || "/"
}
