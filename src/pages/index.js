import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, { translate } from '@docusaurus/Translate'; // Import Translate

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const canvas = document.querySelector('.waves');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentNode.offsetWidth;
    canvas.height = canvas.parentNode.offsetHeight;
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
    let step = 0;
    let lines = [
      'rgba(0,222,255, 0.2)',
      'rgba(157,192,249, 0.2)',
      'rgba(0,168,255, 0.2)',
    ];
    function waves() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step++;
      for (let j = lines.length - 1; j >= 0; j--) {
        ctx.fillStyle = lines[j];
        let angle = ((step + j * 45) * Math.PI) / 180;
        let deltaHeight = Math.sin(angle) * 50;
        let deltaHeightRight = Math.cos(angle) * 50;
        ctx.beginPath();
        -ctx.moveTo(0, canvas.height / 2 + deltaHeight);
        ctx.bezierCurveTo(
          canvas.width / 2,
          canvas.height / 2 + deltaHeight - 50,
          canvas.width / 2,
          canvas.height / 2 + deltaHeightRight - 50,
          canvas.width,
          canvas.height / 2 + deltaHeightRight
        );
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(0, canvas.height / 2 + deltaHeight);
        ctx.closePath();
        ctx.fill();
      }
      requestAnimFrame(waves);
    }
    waves();
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <canvas className="waves"></canvas>
      <div className="container">
        <h1 className="hero__title">
          <Translate>Mchain Docs</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>
            Your Guide Through the Cryptographic Odyssey on the High Seas
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="./docs/learn/"
          >
            <Translate>Embark on the Odyssey</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description={translate({
        message:
          'Explore Mchain Docs - your comprehensive guide through the intricate seas of cryptography with Mchain. Explore tutorials, best practices, and insights to embark on a secure cryptographic journey.',
        description: 'Home page description',
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
