import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Discover with the Mchain Compass',
    Svg: require('@site/static/img/compass.svg').default,
    description: (
      <>
        Even in the early waters of our journey, Mchain acts as your compass,
        pointing the way to safe harbors in the vast cryptographic ocean.
      </>
    ),
  },
  {
    title: 'Take the Helm with Ease',
    Svg: require('@site/static/img/boathelm.svg').default,
    description: (
      <>
        With Mchain, you're in control. We provide you with the tools to
        navigate confidently, leaving the technical challenges in our hands.
      </>
    ),
  },
  {
    title: 'Sails to the Wind',
    Svg: require('@site/static/img/sailboat.svg').default,
    description: (
      <>
        With Mchain, adjust your course according to the market's currents and
        always take advantage of the wind in your favor.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
