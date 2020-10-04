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
			<h1>{frontmatter.title}</h1>

			<div
				className="blog-post-content"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
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
			}
		}
	}
`
