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
							maxwidth: 1200,
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
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
			},
		},
	],
	siteMetadata: {
		title: `Laurel Ronning`,
		description: `International education`,
	},
}
