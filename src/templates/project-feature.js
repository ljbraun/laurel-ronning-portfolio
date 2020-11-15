import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "../styles/global.css"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/seo"
import styles from "./portfolioentry.module.css"

export default function PortfolioEntry({ data }) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	// const { slug, title, link } = frontmatter
	const image = markdownRemark.frontmatter.images.childImageSharp.fluid

	return (
		<Layout>
			<SEO title={frontmatter.title} />
			<div className={styles.portfolioEntryContainer}>
				<h1 className={styles.entryTitle}>{frontmatter.title}</h1>
				<div className={styles.portfolioEntryContentContainer}>
					<div className={styles.entryImageContainer}>
						{/* <Img className={styles.entryImage} fluid={image} /> */}
						<iframe
							width="480"
							height="270"
							src="https://voicethread.com/app/player/?threadId=16029727"
							frameborder="0"
							allowusermedia
							allowfullscreen
							allow="camera https://voicethread.com; microphone https://voicethread.com; fullscreen https://voicethread.com;"
						></iframe>
					</div>
					<div
						className={styles.blogPostContent}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
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
`
