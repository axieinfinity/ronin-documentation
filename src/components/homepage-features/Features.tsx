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
    description: <>Learn the basics of blockchain and Ronin Network.</>,
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
    description: <>Secure the network and earn rewards by staking tokens and running a node to validate on Ronin.</>,
    link: {
      href: '/docs/category/validators',
      title: 'Validators',
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
    title: 'Contributors',
    Icon: UserShieldIcon,
    description: <>Join our community and become a contributor.</>,
    link: {
      href: '/docs/category/contributors',
      title: 'Contributors',
    },
  },
  {
    title: 'Resources',
    Icon: SignDirectionIcon,
    description: <>Read the white paper, lite paper, and refer to the glossary.</>,
    link: {
      href: '/docs/category/resources',
      title: 'Resources',
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
