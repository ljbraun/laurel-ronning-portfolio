exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	const portfolioEntryTemplate = require.resolve(
		`./src/templates/portfolio-entry.js`
	)
	const sectionEntryTemplate = require.resolve(
		`./src/templates/project-feature.js`
	)
	// prettier-ignore
	const result = await graphql(
		`
			{
				allMarkdownRemark(
					filter: { 
						frontmatter: {
							slug: {
								regex: "/portfolio|section/"
							}
						}
					}
					sort: { order: DESC, fields: [frontmatter___date] }
					limit: 1000
				) {
					edges {
						node {
							frontmatter {
								slug
							}
						}
					}
				}
			}
		`
	)

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.frontmatter.slug.includes("portfolio")) {
			createPage({
				path: node.frontmatter.slug,
				component: portfolioEntryTemplate,
				context: {
					slug: node.frontmatter.slug,
				},
			})
		} else if (node.frontmatter.slug.includes("sections")) {
			createPage({
				path: node.frontmatter.slug,
				component: sectionEntryTemplate,
				context: {
					slug: node.frontmatter.slug,
				},
			})
		}
	})
}
