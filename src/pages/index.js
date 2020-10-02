import React from "react"
import Layout from "../components/layout/Layout"
import "../styles/global.css"
import styles from "./index.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.heroContainer}>
        <h2>Laurel Ronning</h2>
      </div>
    </Layout>
  )
}
