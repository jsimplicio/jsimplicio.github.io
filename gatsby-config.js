module.exports = {
  siteMetadata: {
    siteUrl: "https://julessimplic.io",
    title: "Jules Simplicio, Design Systems Lead",
  },
  plugins: [
    "gatsby-plugin-netlify-cms", `gatsby-plugin-react-helmet`, "gatsby-plugin-image", "gatsby-plugin-sharp","gatsby-plugin-gatsby-cloud",
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