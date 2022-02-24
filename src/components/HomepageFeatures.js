import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { string } from 'joi';
const dapp = require('./building-dapp.jpg').default;
const games = require('./building-games.jpg').default;
const validators = require('./runing-validator.jpg').default;

const FeatureList = [
  {
    title: 'Build your dApp',
    link: {
      href: '/docs/intro',
      title: 'Start builiding dApp'
    },
    image: dapp,
    description: (
      <>
        Get started building your Ronin Network decantralize application.
      </>
    ),
  },
  {
    title: 'Build your Axie Game',
    image: games,
    link: {
      href: '/docs/intro',
      title: 'Build your game'
    },
    description: (
      <>
        Build your games with Axie Infinity IP, marketplace and Mavis Hub.
      </>
    ),

  },
  {
    title: 'Run a Validators node',
    image: validators,
    link: {
      href: '',
      title: ''
    },
    description: (
      <>
        Take part in securing Ronin Network and earn rewards.
      </>
    ),
    link: {
      href: '/docs/developer-guide/minimum-requirements',
      title: 'Running a Validator'
    },
  },
];

function Feature({ title, description, image, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} width={200} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link.href}>{link.title}</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
