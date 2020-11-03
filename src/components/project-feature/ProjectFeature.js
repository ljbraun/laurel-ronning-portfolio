import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
			<h2>Featured Project</h2>
			<div className={styles.projectFeatureContentContainer}>
				<div className={styles.projectFeatureVitals}>
					<h2>{title}</h2>
					<ReactMarkdown source={summary} />
				</div>
				<div className={styles.projectFeatureImageContainer}>
					<Img fluid={image} />
				</div>
				<div
					className={styles.projectFeatureDescription}
					dangerouslySetInnerHTML={{ __html: html }}
				></div>
			</div>
			<div className={styles.projectButton}>
				<a className="filled-button" href={link}>
					See the full project
				</a>
			</div>
		</div>
	)
}
