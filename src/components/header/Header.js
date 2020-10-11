import React, { useEffect, useState, useCallback } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import debounce from "lodash/debounce"
import styles from "./header.module.css"

export default function Header() {
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

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
	})

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
			<div className={styles.titleContainer}>
				<Link to="/">{title}</Link>
			</div>
			<nav className={styles.headerNav}>
				<a className={styles.navListLink} href="#home">
					Home
				</a>
				<a className={styles.navListLink} href="#portfolio">
					Portfolio
				</a>
			</nav>
		</header>
	)
}
