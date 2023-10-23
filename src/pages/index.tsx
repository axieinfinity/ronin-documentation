import React from 'react'

import Layout from '@theme/Layout'

import { Features } from '../components/homepage-features/Features'
import styles from './index.module.scss'

const Home: React.FC = () => {
  return (
    <Layout title={`Home`} description='Ronin Chain Documentation'>
      <div className={styles.background}>
        <header className={styles.heroBanner}>
          <h1 className={styles.heroBannerHeading}>Welcome to Ronin</h1>
          <p className={styles.heroBannerSubHeading}>
            Let&apos;s build together
          </p>
        </header>
        <main className={styles.main}>
          <div>
            <img src='/img/mascot.svg' className={styles.mascot} />
          </div>
          <Features />
        </main>
      </div>
    </Layout>
  )
}

export default Home
