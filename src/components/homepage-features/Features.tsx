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
    description: <>Learn about the basic of blockchain and Ronin Network.</>,
  },
  {
    title: 'Staking',
    Icon: CoinIcon,
    link: {
      href: '/docs/stake/staking',
      title: 'Staking',
    },
    description: <>Secure the network by staking tokens & delegating your stake to validators.</>,
  },
  {
    title: 'Validator',
    Icon: BoxTickIcon,
    description: <>Secure the network by staking and operating a node to validate on Ronin Network.</>,
    link: {
      href: '/docs/validator/responsibility',
      title: 'Validator',
    },
  },
  {
    title: 'Bridge',
    Icon: SignDirectionIcon,
    description: <>Validate cross chain transactions.</>,
    link: {
      href: '/docs/bridge/ronin-bridge-v2',
      title: 'Bridge',
    },
  },
  {
    title: 'Governor',
    Icon: UserShieldIcon,
    description: <>Create, view, and vote on proposals.</>,
    link: {
      href: '/docs/governance/create',
      title: 'Governor',
    },
  },
  {
    title: 'Developer',
    Icon: LaptopCodeIcon,
    link: {
      href: '/docs/developer-guide/smart-contract-deploying/using-truffle',
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
