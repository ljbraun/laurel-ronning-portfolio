import React, { useEffect, useState, useCallback } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai"
import debounce from "lodash/debounce"
import styles from "./header.module.css"

export default function Header(props) {
	const [headerBackground, setHeaderBackground] = useState("transparent")
	const { menuIsOpen, setMenuIsOpen } = props

	const debouncedHeaderBackground = useCallback(
		debounce(
			x =>
				window.scrollY > 75
					? setHeaderBackground("hsla(0, 0%, 0%, 0.7)")
					: setHeaderBackground("transparent"),
			25
		)
	)

	const handleScroll = () => {
		debouncedHeaderBackground()
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		if (props.pagePath && props.pagePath.includes("portfolio")) {
			setHeaderBackground("hsla(0, 0%, 0%, 0.7)")
		}
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
	const { title } = data.site.siteMetadata
	return (
		<header
			className={styles.mainHeader}
			onScroll={handleScroll}
			style={{ backgroundColor: headerBackground }}
		>
			<div className={styles.closeIconContainer}>
				<CloseIcon onClick={() => setMenuIsOpen(false)} />
			</div>
			<div className={styles.titleContainer}>
				<Link to="/">{title}</Link>
			</div>
			<nav className={styles.headerNav}>
				<a className={styles.navListLink} href="/#home">
					Home
				</a>
				<a className={styles.navListLink} href="/#feature">
					Master's Project
				</a>
				<a className={styles.navListLink} href="/#portfolio">
					Portfolio
				</a>
			</nav>
		</header>
	)
}
