import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./projectfeature.module.css"

export default function PortfolioSection() {
	const data = useStaticQuery(
		graphql`
			query projectFeatureQuery {
				allMarkdownRemark {
					edges {
						node {
							frontmatter {
								date
								link
								slug
								summary
								title
								images {
									id
									childImageSharp {
										id
										fixed(width: 220) {
											base64
											tracedSVG
											aspectRatio
											srcWebp
											srcSetWebp
											originalName
											...GatsbyImageSharpFixed
										}
									}
								}
							}
							html
						}
					}
				}
			}
		`
	)
	const items = data.allMarkdownRemark.edges

	return (
		<div className={styles.projectFeatureSectionContainer}>
			<h2>Featured Research</h2>
			<div className={styles.projectFeatureContentContainer}>
				<div className={styles.projectFeatureVitals}>
					<h3>Project Name</h3>
					<p>Project summary</p>
					<ul>
						<li>Feature 1</li>
						<li>Feature 2</li>
						<li>Feature 3</li>
					</ul>
				</div>
				<div classname={styles.projectFeatureImage}>Image goes here</div>
				<div className={styles.projectFeatureDescription}>
					Longer description goes here
				</div>
			</div>
		</div>
	)
}
