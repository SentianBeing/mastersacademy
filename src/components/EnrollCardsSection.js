"use client";

import React from 'react';
import { ArrowRight, Stethoscope, Settings, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './EnrollCardsSection.module.css';

export default function EnrollCardsSection({ onEnrollClick }) {
  const cards = [
    {
      title: "NEET COACHING",
      description: "Expert guidance for aspiring doctors to excel in NEET with confidence.",
      buttonText: "Explore NEET",
      image: "/images/neet-coaching.png",
      alt: "NEET Coaching Entrance Preparation",
      IconComponent: Stethoscope,
      cardClass: styles.cardNeet
    },
    {
      title: "JEE COACHING",
      description: "Structured preparation for JEE Main & Advanced to build a strong engineering career.",
      buttonText: "Explore JEE",
      image: "/images/jee-coaching.png",
      alt: "JEE Coaching Entrance Preparation",
      IconComponent: Settings,
      cardClass: styles.cardJee
    },
    {
      title: "KEAM COACHING",
      description: "Complete preparation for KEAM entrance and top college admissions in Kerala.",
      buttonText: "Explore KEAM",
      image: "/images/keam-coaching.png",
      alt: "KEAM Coaching Entrance Preparation",
      IconComponent: GraduationCap,
      cardClass: styles.cardKeam
    }
  ];

  // Framer Motion variants
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className={styles.sectionWrapper} id="admissions">
      <div className="container">
        
        {/* Section Heading */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionSubtitle}>ADMISSIONS OPEN</span>
          <h2 className={styles.sectionTitle}>Entrance Enrollment Programs</h2>
        </motion.div>

        {/* 3-Card Grid */}
        <motion.div 
          className={styles.cardsGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => {
            const Icon = card.IconComponent;
            return (
              <motion.div 
                key={idx} 
                className={`${styles.cardWrapper} ${card.cardClass}`}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                onClick={onEnrollClick}
              >
                {/* Top Image Portion */}
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={card.image} 
                    alt={card.alt} 
                    className={styles.cardImg}
                  />
                  <div className={styles.gradientOverlay}></div>
                </div>

                {/* Bottom Content Portion */}
                <div className={styles.contentWrapper}>
                  {/* Circular Icon Badge */}
                  <div className={styles.iconBadge}>
                    <Icon size={22} strokeWidth={2} className={styles.badgeIcon} />
                  </div>

                  {/* Text Details */}
                  <h3 className={styles.cardTitle}>
                    {card.title}
                  </h3>
                  <p className={styles.cardDescription}>
                    {card.description}
                  </p>

                  {/* Centered Button */}
                  <div className={styles.btnContainer}>
                    <button 
                      className={styles.exploreBtn}
                      onClick={(e) => {
                        e.stopPropagation(); // Avoid double click trigger
                        onEnrollClick();
                      }}
                    >
                      <span>{card.buttonText}</span>
                      <ArrowRight size={16} className={styles.btnArrow} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
