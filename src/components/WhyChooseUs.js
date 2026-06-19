"use client";

import React from 'react';
import { BookOpen, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const benefits = [
    "Expert Faculty Team",
    "Personalised Mentorship",
    "Proven Yearly Results",
    "Regular Tests & Analysis",
    "Comprehensive Materials"
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -45 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 45 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className={styles.sectionWrapper} id="about">
      <div className={`container ${styles.sectionContainer}`}>
        
        {/* Left Column: Image with Overlapping Circular Experience Badge */}
        <motion.div 
          className={styles.leftCol}
          variants={leftColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.imageCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800" 
              alt="Student preparing for exam" 
              className={styles.studentImg}
            />

            {/* Overlapping circular experience badge */}
            <div className={styles.experienceBadge}>
              <div className={styles.circularTextWrapper}>
                <svg viewBox="0 0 100 100" className={styles.circularTextSvg}>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className={styles.circularText}>
                    <textPath href="#circlePath" startOffset="0%">
                      Years Of Experience • Years Of Experience •
                    </textPath>
                  </text>
                </svg>
                <div className={styles.centerCircle}>
                  <span className={styles.experienceNumber}>10</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Wash Card with Text Content */}
        <motion.div 
          className={styles.rightCol}
          variants={rightColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.washCard}>
            {/* Tagline Badge */}
            <div className={styles.taglineBadge}>
              <BookOpen size={16} className={styles.badgeIcon} />
              <span>Why Choose Us</span>
            </div>

            {/* Heading */}
            <h2 className={styles.mainHeading}>
              Why Choose Master's<br />Entrance Academy?
            </h2>

            {/* Description */}
            <p className={styles.description}>
              For over 10+ years, Master's Entrance Academy has been Trivandrum's trusted choice 
              for NEET, JEE, KEAM, and School Tuitions. Our structured preparation models, regular 
              evaluations, and dedicated mentoring ensure academic excellence and top results.
            </p>

            {/* Capsules Grid */}
            <motion.div 
              className={styles.capsulesGrid}
              variants={containerVariants}
            >
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  className={styles.benefitCapsule}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                >
                  <div className={styles.checkWrapper}>
                    <Check size={12} className={styles.checkIcon} />
                  </div>
                  <span className={styles.benefitText}>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
