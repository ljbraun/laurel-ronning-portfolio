import React from "react"
import { Link } from "gatsby"
import styles from "./portfolio-item.module.css"

export default function PortfolioSection( props ) {
    const { title, link, summary, slug } = props

	return (
        <div className={styles.portfolioItem}>
            <div className={styles.itemTitle}>
                {title}
            </div>
            <div className={styles.itemSummary}>
                {summary}
            </div>
            <div className={styles.itemLink}>
                <Link to={slug}>
                    View project
                </Link>
            </div>
        </div>
    )
}
