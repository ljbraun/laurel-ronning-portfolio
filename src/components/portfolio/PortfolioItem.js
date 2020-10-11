import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./portfolio-item.module.css"

export default function PortfolioSection(props) {
	const { title, link, summary, slug, featuredImage } = props
	console.log(featuredImage)
	return (
		<Link to={slug}>
			<div className={styles.portfolioItem}>
				<div className={styles.itemImageContainer}>
					<Img fixed={featuredImage} alt="" />
				</div>
				<div className={styles.itemTitle}>{title}</div>
				<div className={styles.itemSummary}>{summary}</div>
			</div>
		</Link>
	)
}
