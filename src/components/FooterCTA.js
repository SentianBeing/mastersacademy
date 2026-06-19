"use client";

import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './FooterCTA.module.css';

export default function FooterCTA() {
  const stats = [
    { num: "10+", label: "Years" },
    { num: "10000+", label: "Students" },
    { num: "500+", label: "Reviews" },
    { num: "100%", label: "Success Focus" }
  ];

  return (
    <section className={styles.ctaSection}>
      {/* Abstract background graphics */}
      <div className={styles.bgCircleLeft}></div>
      <div className={styles.bgCircleRight}></div>

      <div className={`container ${styles.ctaContainer}`}>
        {/* Left: Text Info */}
        <motion.div 
          className={styles.textSide}
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.ctaHeading}>
            <span className={styles.bulletIcon}></span>
            ADMISSIONS OPEN – ENROLL TODAY!
          </h2>
          <p className={styles.ctaSub}>
            Limited Seats. Great Opportunities Await!
          </p>
          
          <div className={styles.btnRow}>
            <a href="#enquire" className={styles.pillWhite}>
              Enquire Now
              <ArrowRight size={14} className={styles.arrowIcon} />
            </a>
            <a href="tel:9447141102" className={styles.pillOutline}>
              <Phone size={14} />
              Call Us: 94471 41102
            </a>
          </div>
        </motion.div>

        {/* Right: Circular Badge Stats */}
        <motion.div 
          className={styles.statsSide}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className={styles.statCircle}
              variants={{
                hidden: { opacity: 0, scale: 0.75 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { type: 'spring', stiffness: 100, damping: 12 }
                }
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <span className={styles.statNum}>{stat.num}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
