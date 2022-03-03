import FilledAppIcon from '@site/static/img/welcome/filled-apps.svg'
import FilledBoxIcon from '@site/static/img/welcome/filled-box.svg'
import FilledConsoleIcon from '@site/static/img/welcome/filled-console.svg'
import React from 'react'

import { Card } from './Card'

const featureList = [
  {
    title: 'Build your dApp',
    link: {
      href: '/docs/intro',
      title: 'Start building dApp',
    },
    Icon: FilledAppIcon,
    description: <>Get started building your Ronin Network decentralized application.</>,
  },
  {
    title: 'Build your Axie Game',
    Icon: FilledConsoleIcon,
    link: {
      href: '/docs/intro',
      title: 'Build your game',
    },
    description: <>Build your game with Axie Infinity IP, marketplace and Mavis Hub.</>,
  },
  {
    title: 'Run a Validators node',
    Icon: FilledBoxIcon,
    description: <>Take part in securing Ronin Network and earn rewards.</>,
    link: {
      href: '/docs/developer-guide/minimum-requirements',
      title: 'Running a Validator',
    },
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
