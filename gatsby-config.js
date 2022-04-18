require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MTVhMzVjNDQtNjFiOC00YmNkLWJiODYtN2JmYTg2YTI4ZTMzNjM3ODQ3NDYzODEyMDI5Njg3',
        autopop: true
      }
    },
  ],
}
