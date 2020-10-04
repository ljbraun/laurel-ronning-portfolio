import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./header.module.css"

export default function Header() {
	const data = useStaticQuery(
		graphql`
			query metadataQuery {
				site {
					siteMetadata {
						description
						title
					}
				}
			}
		`
	)
	const { title, description } = data.site.siteMetadata
	return (
		<header className={styles.mainHeader}>
			<div className={styles.titleContainer}>{ title }</div>
			<nav className={styles.headerNav}>
				<Link className={styles.navListLink} to="/">
					Home
				</Link>
			</nav>
		</header>
	)
}