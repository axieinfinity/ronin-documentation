import React from 'react'

import BoxTickIcon from './box-tick.svg'
import { Card } from './Card'
import CoinIcon from './coins.svg'
import LaptopCodeIcon from './laptop-code.svg'
import ListViewIcon from './list-view.svg'
import SignDirectionIcon from './signs-direction.svg'
import UserShieldIcon from './user-shield.svg'

const featureList = [
  {
    title: 'Basics',
    Icon: ListViewIcon,
    link: {
      href: '/docs/basics',
      title: 'Basics',
    },
    description: <>Learn the basics of Ronin.</>,
  },
  {
    title: 'Delegators',
    Icon: CoinIcon,
    link: {
      href: '/docs/delegators',
      title: 'Delegators',
    },
    description: <>Stake RON and delegate your stake to validators to earn rewards.</>,
  },
  {
    title: 'Validators',
    Icon: BoxTickIcon,
    description: <>Become a validator to earn rewards and secure the network.</>,
    link: {
      href: '/docs/validators',
      title: 'Validators',
    },
  },
  {
    title: 'Node operators',
    Icon: SignDirectionIcon,
    description: <>Set up and operate your Ronin nodes.</>,
    link: {
      href: '/docs/node-operators',
      title: 'Node operators',
    },
  },
  {
    title: 'RNS',
    Icon: LaptopCodeIcon,
    link: {
      href: '/docs/rns',
      title: 'RNS',
    },
    description: <>Assign a human-readable name to your Ronin address.</>,
  },
  {
    title: 'Community',
    Icon: UserShieldIcon,
    description: <>Join the Ronin community and stay up to date with latest news.</>,
    link: {
      href: '/docs/community/join',
      title: 'Community',
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
