"use client";

import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './CallEnrollSection.module.css';

export default function CallEnrollSection({ onEnrollClick }) {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.backgroundGraphics}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.bgCircle3}></div>
        <div className={styles.bgRing1}></div>
        <div className={styles.bgRing2}></div>
      </div>
      
      <div className={`container ${styles.sectionContainer}`}>
        {/* Left Content Column */}
        <motion.div 
          className={styles.contentCol}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge Tagline */}
          <motion.div className={styles.taglineBadge} variants={itemVariants}>
            <BookOpen size={16} className={styles.badgeIcon} />
            <span>Join Our New Sessions</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 className={styles.mainHeading} variants={itemVariants}>
            Call To Enroll Your <br />
            <span className={styles.headingAccent}>Entrance Coaching Course</span>
          </motion.h2>

          {/* Phone Numbers */}
          <motion.div className={styles.phoneGroup} variants={itemVariants}>
            <div className={styles.phoneNumbers}>
              <a href="tel:+919447141102" className={styles.phoneLink}>
                +91 94471 41102
              </a>
              <span className={styles.phoneDivider}>/</span>
              <a href="tel:+918281784102" className={styles.phoneLink}>
                +91 82817 84102
              </a>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div className={styles.buttonWrapper} variants={itemVariants}>
            <button onClick={onEnrollClick} className={styles.actionBtn}>
              <span>JOIN WITH US</span>
              <ArrowRight size={18} className={styles.btnArrow} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual Image Cutout Column */}
        <motion.div 
          className={styles.imageCol}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.studentImageWrapper}>
            <div className={styles.studentBgCircle}></div>
            <div className={styles.studentDottedCircle}></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://res.cloudinary.com/der2xk0cv/image/upload/v1781869139/ChatGPT_Image_Jun_19_2026_05_08_28_PM_oa5t0o.png" 
              alt="Student Enrollment Call" 
              className={styles.studentImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
