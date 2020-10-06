import React, { useState, useCallback } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import debounce from "lodash/debounce"
import styles from "./header.module.css"

export default function Header() {
	const [scrolled, setScrolled] = useState(false)
	const [headerBackground, setHeaderBackground] = useState("transparent")

	const debouncedHeaderBackground = useCallback(
		debounce(
			x =>
				window.scrollY > 100
					? setHeaderBackground("hsla(0, 0%, 0%, 0.7)")
					: setHeaderBackground("transparent"),
			50
		)
	)

	const handleScroll = () => {
		debouncedHeaderBackground()
	}

	window.addEventListener("scroll", handleScroll)

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
		<header
			className={styles.mainHeader}
			onScroll={handleScroll}
			style={{ backgroundColor: headerBackground }}
		>
			<div className={styles.titleContainer}>{title}</div>
			<nav className={styles.headerNav}>
				<Link className={styles.navListLink} to="/">
					Home
				</Link>
			</nav>
		</header>
	)
}
