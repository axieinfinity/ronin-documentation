import FilledAppIcon from '@site/static/img/welcome/filled-apps.svg'
import FilledBoxIcon from '@site/static/img/welcome/filled-box.svg'
import FilledConsoleIcon from '@site/static/img/welcome/filled-console.svg'
import React from 'react'

import { Card } from './Card'

const featureList = [
  {
    title: 'Introduction to Ronin Network',
    Icon: FilledBoxIcon,
    link: {
      href: '/docs/intro/introduction',
      title: 'Introduction to Ronin Network',
    },
    description: <>Learn about the basic of blockchain and Ronin Network.</>,
  },
  {
    title: 'Staking',
    Icon: FilledBoxIcon,
    link: {
      href: '/docs/stake/staking',
      title: 'Staking',
    },
    description: <>Secure the network by staking tokens & delegating your stake to validators.</>,
  },
  {
    title: 'Validator',
    Icon: FilledBoxIcon,
    description: <>Secure the network by staking and operating a node to validate on Ronin Network.</>,
    link: {
      href: '/docs/validator/responsibility',
      title: 'Validator',
    },
  },
  {
    title: 'Bridge',
    Icon: FilledBoxIcon,
    description: <>Validate cross chain transactions.</>,
    link: {
      href: '/docs/bridge/ronin-bridge-v2',
      title: 'Bridge',
    },
  },
  {
    title: 'Governor',
    Icon: FilledBoxIcon,
    description: <>Create, view, and vote on proposals</>,
    link: {
      href: '/docs/governance/create',
      title: 'Governor',
    },
  },
  {
    title: 'Developer',
    link: {
      href: '/docs/developer-guide/smart-contract-deploying/using-truffle',
      title: 'Start building dApp',
    },
    Icon: FilledAppIcon,
    description: <>Get started building your Ronin Network decentralized application.</>,
  },
]

export const Features: React.FC = () => {
  return (
    <section className="container">
      <div className="row">
        {featureList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
