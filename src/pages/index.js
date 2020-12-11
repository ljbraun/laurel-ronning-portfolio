import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import isFirefox from "react-device-detect"
import Layout from "../components/layout/Layout"
import ProjectFeature from "../components/project-feature/ProjectFeature"
import PortfolioSection from "../components/portfolio/PortfolioSection"
import SEO from "../components/seo/seo"
import "../styles/global.css"
import styles from "./index.module.css"

export default function Home({ data }) {
	console.log(data.file.childImageSharp.fluid)
	const profileImage = data.file.childImageSharp.fluid
	return (
		<Layout>
			<SEO title="Home" />
			<div className={styles.frontpageContainer}>
				<div className={styles.heroContainer} id="home">
					<div className={styles.heroText}>
						<h2>Hey there! I'm Laurel.</h2>
						<p>
							I've been teaching around the world since 2015, and in 2020 I
							completed my Master's in Eduction with a Focus on Teaching
							Multilingual Learners. I'm passionate about student success!
						</p>
					</div>
					<div className={styles.indexProfileImageContainer}>
						<Img
							className={styles.indexProfileImage}
							fluid={profileImage}
							alt="Laurel Ronning's profile photo"
						/>
					</div>
				</div>
				<div className={styles.featureContainer} id="feature">
					<ProjectFeature />
				</div>
				<div className={styles.portfolioContainer} id="portfolio">
					<PortfolioSection />
				</div>
			</div>
		</Layout>
	)
}

export const data = graphql`
	query IndexQuery {
		file(relativePath: { eq: "index/laurel-profile-photo.jpg" }) {
			id
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
