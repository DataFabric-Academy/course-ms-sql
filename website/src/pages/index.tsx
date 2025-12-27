import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__description" style={{marginTop: '1rem', fontSize: '1.1rem'}}>
          พัฒนาทักษะ SQL Server Performance Tuning, Query Optimization, และ Database Administration 
          ผ่านการเรียนรู้แบบ Academy-as-Code ด้วย Microsoft Course 10987C และ Best Practices จากผู้เชี่ยวชาญ
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/intro">
            เริ่มต้นเรียนรู้ →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - SQL Server Performance Tuning & Database Administration`}
      description="เรียนรู้ SQL Server Performance Tuning, Query Optimization, และ Database Administration ผ่าน Academy-as-Code">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
