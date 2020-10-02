import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default function Header() {
	return (
		<header className={styles.mainHeader}>
			<div className={styles.titleContainer}>Laurel Ronning</div>
			<nav className={styles.headerNav}>
				<Link className={styles.navListLink} to="/">
					Home
				</Link>
			</nav>
		</header>
	)
}
