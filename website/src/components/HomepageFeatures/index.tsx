import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Performance Tuning',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        เรียนรู้เทคนิคการปรับแต่งประสิทธิภาพ SQL Server ตั้งแต่พื้นฐานไปจนถึงขั้นสูง 
        ครอบคลุม <strong>Query Optimization</strong>, <strong>Index Design</strong>, 
        และ <strong>Execution Plan Analysis</strong>
      </>
    ),
  },
  {
    title: 'Database Administration',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        พัฒนาทักษะการจัดการฐานข้อมูล SQL Server ผ่าน <strong>DMVs</strong>, 
        <strong>Wait Statistics</strong>, <strong>I/O Monitoring</strong> 
        และ <strong>Concurrency Management</strong>
      </>
    ),
  },
  {
    title: 'Real-world Practice',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        เรียนรู้ผ่าน <strong>Lab Exercises</strong>, <strong>Demo Scripts</strong> 
        และ <strong>Workload Generators</strong> ที่จำลองสถานการณ์จริงในองค์กร
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
