module.exports = {
  siteMetadata: {
    siteUrl: "https://julessimplic.io",
    title: "Jules Simplicio, Design Systems Lead",
  },
  plugins: [
    "gatsby-plugin-netlify-cms", "gatsby-plugin-image", "gatsby-plugin-sharp",
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