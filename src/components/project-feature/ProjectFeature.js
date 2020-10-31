import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./projectfeature.module.css"

export default function PortfolioSection() {
	const queryFeature = useStaticQuery(graphql`
		query queryFeature {
			markdownRemark(
				frontmatter: { slug: { regex: "/sections/featured-project/" } }
			) {
				html
				frontmatter {
					slug
					title
					link
					images {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
								base64
								tracedSVG
								srcWebp
								srcSetWebp
								originalImg
								originalName
							}
						}
					}
					date
					summary
				}
			}
		}
	`)

	const { html, frontmatter } = queryFeature.markdownRemark

	const { slug, title, link, images, summary } = frontmatter
	console.log(frontmatter)

	return (
		<div className={styles.projectFeatureSectionContainer}>
			<h2>Featured Project</h2>
			<div className={styles.projectFeatureContentContainer}>
				<div className={styles.projectFeatureVitals}>
					<h3>{title}</h3>
					{summary}
				</div>
				<div classname={styles.projectFeatureImage}>
					<Img fluid={images} />
				</div>
				<div className={styles.projectFeatureDescription}>{html}</div>
			</div>
			<button className="filled-button">See the full project</button>
		</div>
	)
}
