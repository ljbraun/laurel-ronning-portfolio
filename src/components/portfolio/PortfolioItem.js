import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./portfolio-item.module.css"

export default function PortfolioSection(props) {
	const { title, summary, slug, featuredImage } = props
	console.log(featuredImage)
	return (
		<div className={styles.portfolioItem}>
			<Link to={slug}>
				<div className={styles.itemImageContainer}>
					<Img fluid={featuredImage} alt="" />
				</div>
				<div className={styles.itemTextContainer}>
					<div className={styles.itemTitle}>{title}</div>
					<div className={styles.itemSummary}>{summary}</div>
				</div>
			</Link>
		</div>
	)
}
