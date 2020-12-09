import React from "react"
import SocialButtons from "../social-buttons/SocialButtons"
import "../../styles/global.css"
import styles from "./footer.module.css"

export default function Footer() {
	return (
		<footer className={styles.mainFooter}>
			<SocialButtons />
		</footer>
	)
}
