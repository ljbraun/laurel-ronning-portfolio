const path = require(`path`)

module.exports = {
	plugins: [
		"gatsby-plugin-netlify-cms",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/gatsby-config.js`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/static/images/`,
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `portfolio-entries`,
				path: `${__dirname}/content/portfolio`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `sections`,
				path: `${__dirname}/content/sections`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `global-images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
			},
		},
		`gatsby-plugin-react-helmet`,
	],
	siteMetadata: {
		title: `Laurel Ronning`,
		titleTemplate: `%s · Laurel Ronning`,
		description: `International education`,
		author: `Laurel Ronning`,
		url: `https://www.laurelronning.netlify.app`, // No trailing slash allowed!
		// image: `/assets/brand/logo.svg`, // Path to your image you placed in the 'static' folder
		twitterUsername: `@braunecon`,
	},
}

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
