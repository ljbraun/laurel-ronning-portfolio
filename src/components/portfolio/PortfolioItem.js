import React from "react"
import styles from "./portfolio-item.module.css"

export default function PortfolioSection( props ) {
    const { title, link, summary } = props

	return (
        <div className={styles.portfolioItem}>
            <div className={styles.itemTitle}>
                { title }
            </div>
            <div className={styles.itemSummary}>
                { summary }
            </div>
            <div className={styles.itemLink}>
                <a href="{ link }">View Project</a>
            </div>
        </div>
    )
}
