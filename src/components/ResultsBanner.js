"use client";

import React from 'react';
import { Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ResultsBanner.module.css';

export default function ResultsBanner() {
  return (
    <section className={styles.resultsSection} id="results">
      <div className={`container`}>
        <motion.div 
          className={styles.bannerContainer}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Left Side: Student Collage / Image */}
          <div className={styles.collageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Masters Academy successful students" 
              className={styles.collageImg}
            />
            <div className={styles.arrowOverlay}>
              <div className={styles.arrowIconWrapper}>
                <ArrowRight size={20} className={styles.arrowIcon} />
              </div>
            </div>
          </div>

          {/* Right Side: Results Metrics Banner Card */}
          <div className={styles.metricsCard}>
            <div className={styles.trophyWrapper}>
              <Trophy size={48} className={styles.trophyIcon} strokeWidth={1.5} />
            </div>

            <div className={styles.textDetails}>
              <span className={styles.tagline}>OUR RESULTS, OUR PRIDE.</span>
              <h2 className={styles.metricsTitle}>
                <span className={styles.highlight}>10000+</span> Students Mentored<br />
                Thousands of Success Stories<br />
                One Mission – Your Success!
              </h2>
            </div>

            <div className={styles.actionArea}>
              <a href="#results-page" className={styles.resultsBtn}>
                View Results
                <ArrowRight size={16} className={styles.arrowRight} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
