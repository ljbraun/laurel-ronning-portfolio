import React from "react"
import styles from "./portfolio-section.module.css"

export default function PortfolioSection( props ) {
    const { title, link, summary } = props

	return (
        <div className={styles.portfolioItem}>
            <div className={styles.itemTitle}>
                { title }
            </div>
            <div className={styles.itemSummary}>
                { link }
            </div>
            <div className={styles.itemLink}>
                { summary }
            </div>
        </div>
    )
}
