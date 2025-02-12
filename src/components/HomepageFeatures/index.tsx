import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Pen, Blocks, Webhook } from 'lucide-react';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'edit4i Editor Documentation',
    Icon: Pen,
    description: (
      <>
        Complete documentation for the edit4i Editor Beta. Learn how to use our
        AI-powered editor to supercharge your development workflow.
      </>
    ),
    link: '/docs/editor',
  },
  {
    title: 'Platform Documentation (Coming Soon)',
    Icon: Blocks,
    description: (
      <>
        Documentation for the full edit4i platform, including advanced AI features,
        collaboration tools, and cloud development environment.
      </>
    ),
  },
  {
    title: 'API Reference (Coming Soon)',
    Icon: Webhook,
    description: (
      <>
        Comprehensive API documentation for integrating with edit4i's services
        and extending the platform's capabilities.
      </>
    ),
  },
];

function Feature({title, Icon, description, link}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <Icon className={styles.featureSvg} size={40} strokeWidth={1.5} />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && (
          <Link
            className={styles.featureButton}
            to={link}>
            View Documentation →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureContainer}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
