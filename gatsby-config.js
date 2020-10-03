const path = require(`path`)

module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/images/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-entries`,
        path: `${__dirname}/content/portfolio`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    }
  ],
  siteMetadata: {
    title: `Laurel Ronning`,
    description: `International education`,
  }, 
}