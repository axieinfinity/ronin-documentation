import ListViewIcon from './list-view.svg';
import CoinIcon from './coins.svg';
import BoxTickIcon from './box-tick.svg';
import SignDirectionIcon from './signs-direction.svg';
import LaptopCodeIcon from './laptop-code.svg';
import UserShieldIcon from './user-shield.svg';

import React from 'react'

import { Card } from './Card'

const featureList = [
  {
    title: 'Basics',
    Icon: ListViewIcon,
    link: {
      href: '/docs/category/basics',
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
    description: <>Stake tokens and delegate your stake to validators to earn rewards and secure the network.</>,
  },
  {
    title: 'Validators',
    Icon: BoxTickIcon,
    description: <>Run a validator node to earn rewards and maintain network security.</>,
    link: {
      href: '/docs/validators',
      title: 'Validators',
    },
  },
  {
    title: 'Node operators',
    Icon: SignDirectionIcon,
    description: <>Set up and configure nodes to ensure their stable operation.</>,
    link: {
      href: '/docs/category/node-operators',
      title: 'Node operators',
    },
  },
  {
    title: 'Developers',
    Icon: LaptopCodeIcon,
    link: {
      href: '/docs/developers',
      title: 'Developers',
    },
    description: <>Build your decentralized application on Ronin.</>,
  },
  {
    title: 'Community',
    Icon: UserShieldIcon,
    description: <>Join our community, participate in programs, and contribute to this documentation.</>,
    link: {
      href: '/docs/community',
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
