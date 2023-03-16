import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
        </div>
      </header>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description='Web Questions'>
      {/* <HomepageHeader /> */}
      <div className={styles.wrap}>
        <div>
          <h1>Web Totals</h1>
          <p>Share all about web development</p>
        </div>
        <div className={styles.imgWrap}>
          <div className={styles.mask}></div>
          <img src='/img/unicorn.png' alt='' />
        </div>
      </div>
    </Layout>
  );
}
