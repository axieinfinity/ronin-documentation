import clsx from 'clsx'
import React from 'react'

import styles from './card.module.scss'

export type CardProps = {
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description?: string | React.ReactNode
  link: {
    href: string
    title: string
  }
}

export const Card: React.FC<CardProps> = ({ title, description, Icon, link }) => {
  return (
    <div className={clsx('col col--4', styles.wrapper)}>
      <a className={styles.container} href={link.href}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <Icon width={60} height={60} />
          </div>
          <div>
            <p className={styles.headingText}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
