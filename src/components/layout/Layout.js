import React, { useState } from "react"
import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import styles from "./layout.module.css"

export default function Layout({ children }) {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const headerStyles = `${
		menuIsOpen
			? styles.headerContainer
			: `${styles.toggleMenu} ${styles.headerContainer}`
	}`

	console.log(menuIsOpen)
	return (
		<div className={styles.pageContainer}>
			<div className={styles.hamburgerIconContainer}>
				<HamburgerIcon onClick={() => setMenuIsOpen(!menuIsOpen)} />
			</div>
			<div className={headerStyles}>
				<Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
			</div>
			<div className={styles.mainContainer}> {children} </div>
			<div className={styles.footerContainer}>
				<Footer />
			</div>
		</div>
	)
}
