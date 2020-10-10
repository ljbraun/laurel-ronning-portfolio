import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./portfolio-item.module.css"

export default function PortfolioSection(props) {
	const { title, link, summary, slug, featuredImage } = props
	console.log(featuredImage)
	return (
		<div className={styles.portfolioItem}>
			<div className={styles.itemImageContainer}>
				<Img fluid={featuredImage.fluid} alt="" />
			</div>
			<div className={styles.itemTitle}>{title}</div>
			<div className={styles.itemSummary}>{summary}</div>
			<div className={styles.itemLink}>
				<Link to={slug}>View project</Link>
			</div>
		</div>
	)
}
