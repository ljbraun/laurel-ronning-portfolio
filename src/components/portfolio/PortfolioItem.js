import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ConditionalWrapper from "../ConditionalWrapper"
import styles from "./portfolio-item.module.css"

export default function PortfolioSection(props) {
	const { title, summary, slug, featuredImage, link } = props

	return (
		<div className={styles.portfolioItem}>
			<ConditionalWrapper
				condition={!link}
				wrapper={children => <Link to={slug}>{children}</Link>}
				altWrapper={children => <a href={link}>{children}</a>}
			>
				<React.Fragment>
					<div className={styles.itemImageContainer}>
						<Img fluid={featuredImage} alt="" />
					</div>

					<div className={styles.itemTextContainer}>
						<div className={styles.itemTitle}>{title}</div>
						<div className={styles.itemSummary}>{summary}</div>
					</div>
				</React.Fragment>
			</ConditionalWrapper>
		</div>
	)
}
