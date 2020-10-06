import React, { useState } from "react"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import styles from "./layout.module.css"

export default function Layout({ children }) {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.headerContainer}>
				<Header />
			</div>
			<div className={styles.mainContainer}> {children} </div>
			<div className={styles.footerContainer}>
				<Footer />
			</div>
		</div>
	)
}
