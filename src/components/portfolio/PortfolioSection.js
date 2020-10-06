import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PortfolioItem from "./PortfolioItem"
import styles from "./portfolio-section.module.css"

export default function PortfolioSection() {
	const data = useStaticQuery(
		graphql`
			query portfolioQuery {
				allMarkdownRemark {
					edges {
						node {
							frontmatter {
								date
								link
								slug
								summary
								title
							}
							html
						}
					}
				}
			}
		`
    )
    const items = data.allMarkdownRemark.edges
    
    const portfolioItems = items.map(item => {
        const { title, summary, link, slug } = item.node.frontmatter
        const content = item.node.html
        return (
            <PortfolioItem 
                title={title}
                summary={summary}
                link={link}
                slug={slug}
            />
        )
    })

	return (
        <div className={styles.portfolioSectionContainer}>
            { portfolioItems }
        </div>
    )
}
