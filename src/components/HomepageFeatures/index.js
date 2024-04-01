import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

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
          {/* Directly use Translate component with static strings */}
          <Feature
            key={1}
            Svg={require('@site/static/img/compass.svg').default}
            title={<Translate>Discover with the Mchain Compass</Translate>}
            description={
              <Translate>
                Even in the early waters of our journey, Mchain acts as your
                compass, pointing the way to safe harbors in the vast
                cryptographic ocean.
              </Translate>
            }
          />
          <Feature
            key={2}
            Svg={require('@site/static/img/boathelm.svg').default}
            title={<Translate>Take the Helm with Ease</Translate>}
            description={
              <Translate>
                With Mchain, you're in control. We provide you with the tools to
                navigate confidently, leaving the technical challenges in our
                hands.
              </Translate>
            }
          />
          <Feature
            key={3}
            Svg={require('@site/static/img/sailboat.svg').default}
            title={<Translate>Sails to the Wind</Translate>}
            description={
              <Translate>
                With Mchain, adjust your course according to the market's
                currents and always take advantage of the wind in your favor.
              </Translate>
            }
          />
        </div>
      </div>
    </section>
  );
}
