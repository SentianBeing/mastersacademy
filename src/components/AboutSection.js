"use client";

import React from 'react';
import { BookOpen, Globe, DollarSign, Smile, ChevronRight } from 'lucide-react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const features = [
    {
      icon: <BookOpen size={28} />,
      title: "Education Services",
      desc: "Get access to rich mock test series, extensive study materials, and customized mentoring sessions."
    },
    {
      icon: <Globe size={28} />,
      title: "International Hub",
      desc: "Collaborate with aspirants worldwide and access global postgraduate opportunity updates."
    },
    {
      icon: <DollarSign size={28} />,
      title: "Admissions & Aid",
      desc: "Learn about easy registration processes, merit scholarships, and early bird tuition waivers."
    },
    {
      icon: <Smile size={28} />,
      title: "Academy Life",
      desc: "Experience a dynamic and supportive ecosystem built around peer learning and continuous growth."
    }
  ];

  return (
    <section 
      className={styles.aboutSection}
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop')` }}
    >
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.containerRelative}`}>
        <div className={styles.introRow}>
          <div className={styles.titleArea}>
            <span className={styles.subtitle}>About Our Academy</span>
            <h2 className={styles.title}>Masters Entrance Academy</h2>
          </div>
          
          <div className={styles.text}>
            <p className={styles.textHighlight}>
              For over a decade, we have been leading the way in helping students prepare for, excel in, and clear highly competitive master's entrance examinations worldwide.
            </p>
            <p>
              Our academy is committed to providing rigorous academic tutoring, comprehensive study material, and robust test series, enabling students to gain admissions to elite institutions. With personalized coaching and an innovative learning system, our candidates consistently rank among the top percentile scorers.
            </p>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
              <a href="#" className={styles.readMore}>
                Read More <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
