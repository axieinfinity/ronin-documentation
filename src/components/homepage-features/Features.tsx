import ListViewIcon from './list-view.svg';
import CoinIcon from './coins.svg';
import BoxTickIcon from './box-tick.svg';
import SignDirectionIcon from './signs-direction.svg';
import LaptopCodeIcon from './laptop-code.svg';
import UserShieldIcon from './user-shield.svg';

import React from 'react'

import { Card } from './Card'

const featureList = [
  // {
  //   title: 'Introduction',
  //   Icon: ListViewIcon,
  //   link: {
  //     href: '/docs/get-started',
  //     title: 'Get started',
  //   },
  //   description: <>Learn the basics of blockchain and Ronin Network.</>,
  // },
  {
    title: 'Basics',
    Icon: ListViewIcon,
    link: {
      href: '/docs/category/basics',
      title: 'Basics',
    },
    description: <>Learn the basics of Ronin Network.</>,
  },
  {
    title: 'Delegators',
    Icon: CoinIcon,
    link: {
      href: '/docs/category/delegators',
      title: 'Delegators',
    },
    description: <>Secure the network by staking tokens and delegating your stake to validators.</>,
  },
  {
    title: 'Validators',
    Icon: BoxTickIcon,
    description: <>Secure the network and earn rewards by staking tokens and running a node to validate.</>,
    link: {
      href: '/docs/category/validators',
      title: 'Validators',
    },
  },
  {
    title: 'Node operators',
    Icon: SignDirectionIcon,
    description: <>Set up validator and bridge operator nodes and ensure their stable operation.</>,
    link: {
      href: '/docs/category/node-operators',
      title: 'Node operators',
    },
  },
  {
    title: 'Developers',
    Icon: LaptopCodeIcon,
    link: {
      href: '/docs/category/developers',
      title: 'Developers',
    },
    description: <>Build your decentralized application on Ronin Network.</>,
  },
  {
    title: 'Community',
    Icon: UserShieldIcon,
    description: <>Join our community, participate in programs, and contribute to this documentation.</>,
    link: {
      href: '/docs/category/community',
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
