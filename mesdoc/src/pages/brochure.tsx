import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import styles from './brochure.module.css';

const highlights = [
  'Centralized control for production, HR, store, quality, and commercial operations.',
  'Role-based access and user management to keep each team focused on the right actions.',
  'Real-time visibility into workflows, approvals, inventory movement, and factory activity.',
];

export default function BrochurePage(): ReactNode {
  return (
    <Layout
      title="Brochure"
      description="MES brochure overview with front and back brochure pages.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Company Brochure</p>
            <Heading as="h1" className={styles.title}>
              Manufacturing Execution System Overview
            </Heading>
            <p className={styles.description}>
              This brochure presents a quick overview of the MES platform,
              including the product vision, operational coverage, and key
              business benefits for manufacturing teams.
            </p>
            <div className={styles.meta}>
              <span>Format: Two-page brochure</span>
              <span>Audience: Management, operations, and implementation teams</span>
            </div>
          </div>
          <div className={styles.heroCard}>
            <img
              src="/img/brochure/brochure-front.png"
              alt="MES brochure front cover"
              className={styles.heroImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            What This Brochure Covers
          </Heading>
          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <article key={item} className={styles.highlightCard}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            Brochure Pages
          </Heading>
          <div className={styles.gallery}>
            <figure className={styles.figure}>
              <img
                src="/img/brochure/brochure-front.png"
                alt="MES brochure front page"
                className={styles.image}
              />
              <figcaption className={styles.caption}>
                Front page with the MES introduction and branding presentation.
              </figcaption>
            </figure>

            <figure className={styles.figure}>
              <img
                src="/img/brochure/brochure-back.png"
                alt="MES brochure back page"
                className={styles.image}
              />
              <figcaption className={styles.caption}>
                Back page with supporting details, product scope, and contact-facing content.
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  );
}
