import React from "react"
import { graphql } from "gatsby"
import "../styles/global.css"
import Layout from "../components/layout/Layout"
import styles from "./portfolioentry.module.css"

export default function PortfolioEntry({ data }) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark

	return (
		<Layout>
			<div className={styles.portfolioEntryContainer}>
				<h1 className={styles.entryTitle}>{frontmatter.title}</h1>

				<div
					className={styles.blogPostContent}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				slug
				title
				link
				images {
					childImageSharp {
						fluid {
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
`
