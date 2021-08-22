import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
	SiTwitter as TwitterIcon,
	SiLinkedin as LinkedInIcon,
} from "react-icons/si"
import { RiMailSendLine as EmailIcon } from "react-icons/ri"

import styles from "./social-buttons.module.css"

export default function SocialButtons() {
	const data = useStaticQuery(graphql`
		query SocialQuery {
			allSocialInfoJson {
				edges {
					node {
						linkedin {
							link
							name
						}
						twitter {
							link
							name
						}
						email {
							link
							name
						}
					}
				}
			}
		}
	`)

	const socialArray = Object.values(data.allSocialInfoJson.edges[0].node)
	const socialElements = socialArray.map(item => {
		return (
			<div className={styles.socialButton} key={`${item.name}-button`}>
				<a href={item.link} alt={item.name} className={styles.socialLink}>
					{item.name === "Twitter" ? (
						<span className={styles.twitterIcon}>
							<TwitterIcon />
						</span>
					) : item.name === "LinkedIn" ? (
						<span className={styles.linkedinIcon}>
							<LinkedInIcon />
						</span>
					) : item.name === "Email" ? (
						<span className={styles.emailIcon}>
							<EmailIcon />
						</span>
					) : null}
				</a>
			</div>
		)
	})

	return <div className={styles.socialButtons}>{socialElements}</div>
}
