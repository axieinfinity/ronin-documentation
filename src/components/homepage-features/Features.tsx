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
    title: 'Developers',
    Icon: LaptopCodeIcon,
    link: {
      href: '/docs/developers/portal',
      title: 'Developers',
    },
    description: <>Build your decentralized application on Ronin.</>,
  },
  {
    title: 'Community',
    Icon: UserShieldIcon,
    description: <>Join the Ronin community and stay up to date with latest news.</>,
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
