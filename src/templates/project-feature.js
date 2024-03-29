import React from "react"
import { graphql } from "gatsby"

import "../styles/global.css"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/seo"
import styles from "./projectfeature.module.css"
import pdf from "../../content/sections/123/peer-relationships-in-the-classroom-laurel-ronning.pdf"

export default function ProjectEntry({ data, location }) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark

	const path = location ? location.pathname : "null"

	return (
		<Layout pagePath={path}>
			<SEO title={frontmatter.title} />
			<div className={styles.projectFeatureSectionContainer}>
				<h1 className={styles.projectTitle}>{frontmatter.title}</h1>

				<div className={styles.slidesContainer}>
					{/* <Img className={styles.entryImage} fluid={image} /> */}
					<iframe
						width="100%"
						height="360"
						title="Voicethread"
						src="https://voicethread.com/app/player/?threadId=16029727"
						frameBorder="0"
						allowusermedia={true}
						allowFullScreen="true"
						allow="camera https://voicethread.com; microphone https://voicethread.com; fullscreen https://voicethread.com;"
					></iframe>
				</div>
				<div className={styles.pdfWrapper}>
					<iframe
						src={pdf}
						title="Peer Relationships in the Online Classroom"
						width="100%"
						height="600px"
					>
						<a href={pdf}>Download PDF</a>
					</iframe>
				</div>
				<div
					className={styles.blogPostContent}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
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
