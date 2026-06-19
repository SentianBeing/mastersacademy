"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Stethoscope, Settings, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './CoachingCards.module.css';

export default function CoachingCards() {
  const cards = [
    {
      title: "NEET COACHING",
      description: "Expert guidance for aspiring doctors to excel in NEET with confidence.",
      buttonText: "Learn More",
      link: "/neet",
      image: "/images/neet-coaching.png",
      alt: "NEET Coaching - Aspiring Doctors",
      IconComponent: Stethoscope,
      cardClass: styles.cardNeet
    },
    {
      title: "JEE COACHING",
      description: "Structured preparation for JEE Main & Advanced to build a strong engineering career.",
      buttonText: "Learn More",
      link: "/jee",
      image: "/images/jee-coaching.png",
      alt: "JEE Coaching - Future Engineers",
      IconComponent: Settings,
      cardClass: styles.cardJee
    },
    {
      title: "KEAM COACHING",
      description: "Complete preparation for KEAM entrance and top college admissions in Kerala.",
      buttonText: "Learn More",
      link: "/keam",
      image: "/images/keam-coaching.png",
      alt: "KEAM Coaching - Top Colleges",
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
    <section className={styles.coachingSection} id="courses">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionSubtitle}>ACADEMY PROGRAMS</span>
          <h2 className={styles.sectionTitle}>Our Entrance Coaching</h2>
        </motion.div>

        {/* Redesigned 3-Card Grid */}
        <motion.div 
          className={styles.coachingGrid}
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
                id={card.link.startsWith('#') ? card.link.slice(1) : undefined}
                className={`${styles.coachingCard} ${card.cardClass}`}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
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

                  {/* Centered Button Link */}
                  <div className={styles.btnContainer}>
                    <Link href={card.link} className={styles.exploreBtn}>
                      <span>{card.buttonText}</span>
                      <ArrowRight size={16} className={styles.btnArrow} />
                    </Link>
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
