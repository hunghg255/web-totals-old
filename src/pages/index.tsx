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
    <Layout description='Web Questions 231'>
      <HomepageHeader />

      <div className={styles.img}>
        <img
          src='https://camo.githubusercontent.com/cb1ab4a6edf741041ec7426ddddebe0489f7feb3380c96e78b249650877975d6/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f68756e6768673235352f696d6167652f75706c6f61642f76313637353333363533312f646f776e6c6f61645f6a6c796365302e706e67'
          alt=''
        />
      </div>
    </Layout>
  );
}
