import React from 'react'

import BoxTickIcon from './box-tick.svg'
import { Card } from './Card'
import CoinIcon from './coins.svg'
import AppsIcon from './apps.svg'
import ListViewIcon from './list-view.svg'
import SignDirectionIcon from './signs-direction.svg'

const featureList = [
  {
    title: 'Basics',
    Icon: ListViewIcon,
    link: {
      href: '/basics',
      title: 'Basics',
    },
    description: <>Get familiar with the basics of the Ronin chain.</>,
  },
  {
    title: 'dApps',
    Icon: AppsIcon,
    link: {
      href: '/apps',
      title: 'dApps',
    },
    description: <>Use the decentralized apps in the Ronin ecosystem.</>,
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
    description: <>Run a validator node to earn rewards and secure the network.</>,
    link: {
      href: '/validators',
      title: 'Validators',
    },
  },
  {
    title: 'Bridge operators',
    Icon: SignDirectionIcon,
    description: <>Run a bridge node to acknowledge deposit and withdrawal events and earn rewards.</>,
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
