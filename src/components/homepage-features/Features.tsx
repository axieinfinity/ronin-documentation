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
    title: 'Overview',
    Icon: ListViewIcon,
    link: {
      href: '/docs/intro/introduction',
      title: 'Overview',
    },
    description: <>Learn the basics of blockchain and Ronin Network.</>,
  },
  {
    title: 'Staking',
    Icon: CoinIcon,
    link: {
      href: '/docs/category/staking',
      title: 'Staking',
    },
    description: <>Secure the network by staking tokens and delegating your stake to validators.</>,
  },
  {
    title: 'Validators',
    Icon: BoxTickIcon,
    description: <>Secure the network and earn rewards by staking tokens and running a node to validate on Ronin.</>,
    link: {
      href: '/docs/validator/responsibilities',
      title: 'Validator',
    },
  },
  {
    title: 'Bridge',
    Icon: SignDirectionIcon,
    description: <>Validate cross-chain transactions.</>,
    link: {
      href: '/docs/bridge/ronin-bridge-v2',
      title: 'Bridge',
    },
  },
  {
    title: 'Governors',
    Icon: UserShieldIcon,
    description: <>Create, view, and vote on proposals.</>,
    link: {
      href: '/docs/governance/gov',
      title: 'Governor',
    },
  },
  {
    title: 'Developers',
    Icon: LaptopCodeIcon,
    link: {
      href: '/docs/developer-guide/switch-wallet-to-testnet',
      title: 'Start building dApp',
    },
    description: <>Build your Ronin Network decentralized application.</>,
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
