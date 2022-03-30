module.exports = {
  siteMetadata: {
    siteUrl: "https://julessimplic.io",
  },
  plugins: [
    "gatsby-plugin-image", "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
      options: {
        name: 'src',
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}