import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import styles from "./projectfeature.module.css"

export default function PortfolioSection() {
	const queryFeature = useStaticQuery(graphql`
		query queryFeature {
			allMarkdownRemark(
				filter: { frontmatter: { slug: { regex: "/sections/" } } }
			) {
				edges {
					node {
						frontmatter {
							title
							slug
							summary
							link
							date
							featuredImage {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
						html
					}
				}
			}
		}
	`)

	const { frontmatter, html } = queryFeature.allMarkdownRemark.edges[0].node

	const { slug, title, link, featuredImage, summary } = frontmatter
	const image = featuredImage.childImageSharp.fluid

	return (
		<div className={styles.projectFeatureSectionContainer}>
			<div className={styles.projectFeatureContentContainer}>
				<h2 className={styles.projectFeatureTitle}>{title}</h2>

				<div className={styles.projectFeatureSummary}>
					<ReactMarkdown source={summary} />
				</div>

				<div className={styles.projectFeatureImageContainer}>
					<Img fluid={image} />
				</div>
			</div>
			<div className={styles.projectButton}>
				<Link className={styles.filledButton} to={slug}>
					See the full project
				</Link>
			</div>
		</div>
	)
}
