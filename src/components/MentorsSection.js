"use client";

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './MentorsSection.module.css';

export default function MentorsSection() {
  const points = [
    "Expert Faculty with 10+ Years Experience",
    "Personalised Attention to Every Student",
    "Concept Clarity with Real-Life Examples",
    "Regular Feedback & Performance Tracking"
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.bgDecoration}>
        <div className={styles.circleOrnament}></div>
      </div>

      <div className={`container ${styles.sectionContainer}`}>
        
        {/* Left Content Side */}
        <motion.div 
          className={styles.leftCol}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 className={styles.heading} variants={itemVariants}>
            <span className={styles.goldText}>Learn From The Best.</span>
            <br />
            <span className={styles.whiteText}>Grow With The Right Mentors.</span>
          </motion.h2>

          <div className={styles.pointsList}>
            {points.map((point, idx) => (
              <motion.div 
                key={idx} 
                className={styles.pointRow}
                variants={itemVariants}
              >
                <div className={styles.checkIconWrapper}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                </div>
                <span className={styles.pointText}>{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.div className={styles.btnWrapper} variants={itemVariants}>
            <a href="tel:9447141102" className={styles.meetBtn}>
              <span>Meet Our Mentors</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </a>
          </motion.div>
        </motion.div>

        {/* Center: Director Cutout Image */}
        <motion.div 
          className={styles.centerCol}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.directorImgWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://res.cloudinary.com/der2xk0cv/image/upload/v1781878748/ffggh_uml335.png" 
              alt="Jomon K. Thomas - Director" 
              className={styles.directorImg}
            />
          </div>
        </motion.div>

        {/* Right: Info speech bubble */}
        <motion.div 
          className={styles.rightCol}
          variants={bubbleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.speechBubble}>
            <div className={styles.signatureText}>Jomon K. Thomas</div>
            <div className={styles.mentorName}>Jomon K. Thomas</div>
            <div className={styles.mentorTitle}>Director & Chief Mentor</div>
            
            <div className={styles.divider}></div>
            
            <div className={styles.bubbleDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailText}>10+ Years Experience</span>
              </div>
              <div className={styles.detailRow}>
                <div className={styles.bulletPoint}></div>
                <span className={styles.detailText}>Mentored 10000+ Students to Success</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
