import React from 'react'

import BoxTickIcon from './box-tick.svg'
import { Card } from './Card'
import CoinIcon from './coins.svg'
import AppsIcon from './apps.svg'
import ListViewIcon from './list-view.svg'
import SignDirectionIcon from './signs-direction.svg'
import UserShieldIcon from './user-shield.svg'

const featureList = [
  {
    title: 'Basics',
    Icon: ListViewIcon,
    link: {
      href: '/basics',
      title: 'Basics',
    },
    description: <>Familiarize yourself with the basics of the Ronin chain.</>,
  },
  {
    title: 'dApps',
    Icon: AppsIcon,
    link: {
      href: '/apps',
      title: 'dApps',
    },
    description: <>Learn how to use apps in the Ronin ecosystem.</>,
  },
  {
    title: 'Delegators',
    Icon: CoinIcon,
    link: {
      href: '/delegators',
      title: 'Delegators',
    },
    description: <>Stake your RON tokens to validators to earn rewards.</>,
  },
  {
    title: 'Validators',
    Icon: BoxTickIcon,
    description: <>Become a validator to earn rewards and secure the network.</>,
    link: {
      href: '/validators',
      title: 'Validators',
    },
  },
  {
    title: 'Bridge operators',
    Icon: SignDirectionIcon,
    description: <>Run a bridge operator node to earn rewards.</>,
    link: {
      href: '/bridge-operators',
      title: 'Bridge operators',
    },
  },
]

export const Features: React.FC = () => {
  return (
    <section className="container">
      <div className="row">
        {featureList.map((props, idx) => (
          <Card key={idx} {...props} iconColor="var(--ifm-color-primary-dark)" />
        ))}
      </div>
    </section>
  )
}
