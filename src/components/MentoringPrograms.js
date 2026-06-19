"use client";

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './MentoringPrograms.module.css';

export default function MentoringPrograms() {
  const microbatchFeatures = [
    "Limited Students per Batch",
    "Personalised Attention",
    "Better Doubt Solving",
    "Higher Results"
  ];

  const onetooneFeatures = [
    "Individual Learning Plans",
    "Regular Feedback",
    "Concept Clarity",
    "Result Oriented"
  ];

  return (
    <section className={styles.mentoringSection}>
      <div className={`container ${styles.doubleGrid}`}>
        {/* Card 1: Microbatch Programs */}
        <motion.div 
          id="microbatch"
          className={styles.microbatchCard}
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.overlayBg}></div>
          <div className={styles.cardContent}>
            <span className={styles.cardSub}>MICROBATCH PROGRAMS</span>
            <h2 className={styles.cardTitle}>Small Batch. Big Impact.</h2>
            
            <ul className={styles.featureList}>
              {microbatchFeatures.map((feat, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <div className={styles.checkIcon}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a href="#enroll" className={styles.whiteBtn}>
              Enroll Now
              <ArrowRight size={16} className={styles.arrowMaroon} />
            </a>
          </div>

          {/* Floating Badge */}
          <motion.div 
            className={styles.floatingBadge}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <div className={styles.badgeDashed}>
              <span className={styles.badgeLabel}>BATCH SIZE</span>
              <span className={styles.badgeNum}>15</span>
              <span className={styles.badgeSubText}>STUDENTS ONLY</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Card 2: One-to-One Mentoring */}
        <motion.div 
          id="one-to-one"
          className={styles.onetooneCard}
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.cardContent}>
            <span className={styles.cardSubMaroon}>ONE-TO-ONE MENTORING</span>
            <h2 className={styles.cardTitleDark}>100% Personalised Learning</h2>
            
            <ul className={styles.featureList}>
              {onetooneFeatures.map((feat, idx) => (
                <li key={idx} className={styles.featureItemDark}>
                  <div className={styles.checkIconMaroon}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a href="#book-session" className={styles.maroonBtn}>
              Book a Session
              <ArrowRight size={16} className={styles.arrowWhite} />
            </a>
          </div>

          <div className={styles.mentorImageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400" 
              alt="One-to-One Mentoring Session" 
              className={styles.mentorImg}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
