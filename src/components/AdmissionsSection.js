"use client";

import React from 'react';
import styles from './AdmissionsSection.module.css';

export default function AdmissionsSection() {
  return (
    <section className={styles.admissionsSection}>
      <div className={`container`}>
        <div className={styles.layoutGrid}>
          {/* Photo Side */}
          <div 
            className={styles.photoSide}
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop')` }}
          ></div>

          {/* Content Side */}
          <div className={styles.contentSide}>
            <span className={styles.subtitle}>Apply for Admission</span>
            <h2 className={styles.title}>Fall 2026/27 Intake is now open</h2>
            <p className={styles.description}>
              We are excited to announce that admissions for the upcoming master's preparation batches are now open. 
              Our expert-led courses, detailed curriculum, and intensive test series are designed to give you the competitive edge required to succeed in top-tier examinations. Take the first step towards your dream postgraduate program today.
            </p>
            <button className={styles.applyBtn}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
