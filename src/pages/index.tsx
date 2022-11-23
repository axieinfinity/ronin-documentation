import React from 'react'

import Layout from '@theme/Layout'

import { Features } from '../components/homepage-features/Features'
import styles from './index.module.scss'
import ExternalLink from './external-link.svg'

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.alertBanner}>
        <span className={styles.pin}>🎉</span>
        <strong>Saigon</strong> - an open testnet for Ronin, is live!
        <a
          className={styles.link}
          href='https://saigon-docs.roninchain.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Checkout Saigon documentation
          <ExternalLink />
        </a>
      </div>
      <Layout title={`Ronin Network`} description='Ronin Documentation'>
        <div className={styles.background}>
          <header className={styles.heroBanner}>
            <h1 className={styles.heroBannerHeading}>
              Welcome to Ronin Network
            </h1>
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
    </>
  )
}

export default Home
