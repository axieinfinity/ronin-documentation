import clsx from 'clsx'
import React from 'react'

import Layout from '@theme/Layout'

import HomepageFeatures from '../components/HomepageFeatures'
import styles from './index.module.css'

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to Ronin Network</h1>
        <p className="hero__subtitle">Let&apos;s build together</p>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout title={`Ronin Network`} description="Ronin Documentation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
