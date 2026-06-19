"use client";

import React from 'react';
import { BookOpen, Users, Award, ChevronRight } from 'lucide-react';
import styles from './FeatureCards.module.css';

export default function FeatureCards() {
  const cards = [
    {
      icon: <BookOpen size={32} />,
      title: "Study Programs",
      desc: "Our courses are segmented based on target universities and exam types. Each course contains weekly modules, topic assessments, and simulated timed mocks.",
      linkText: "Explore Courses"
    },
    {
      icon: <Users size={32} />,
      title: "Dedicated Mentors",
      desc: "Get taught and mentored by top scorers of previous entrance exams who understand the exact hurdles and tricks required to score in the top 1%.",
      linkText: "Meet Our Faculty"
    },
    {
      icon: <Award size={32} />,
      title: "Scholarships & Financial Aid",
      desc: "We reward excellence. Candidates showing outstanding results in our scholarship mocks receive full/partial tuition waivers for all batches.",
      linkText: "Learn About Aid"
    }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={`container ${styles.cardsGrid}`}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.cardItem}>
            <div className={styles.iconWrapper}>
              {card.icon}
            </div>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.desc}>{card.desc}</p>
            <a href="#" className={styles.cardLink}>
              {card.linkText} <ChevronRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
