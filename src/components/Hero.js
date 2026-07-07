"use client";

import React from 'react';
import { Phone, Star, Award, Users, GraduationCap } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Side: Content & Stats */}
        <div className={styles.leftContent}>
          <div className={styles.tagline}>
            <Star size={14} className={styles.taglineStar} fill="currentColor" />
            <span>TRIVANDRUM'S NO:1 ENTRANCE ACADEMY</span>
          </div>

          <h1 className={styles.mainTitle}>
            MASTER YOUR<br />
            DREAMS. SHAPE<br />
            <span className={styles.highlightText}>YOUR FUTURE.</span>
          </h1>

          <p className={styles.description}>
            For over 10+ years, Master's Entrance Academy has been the trusted choice for NEET, JEE, KEAM and School Tuitions from 5th to 12th Standard.
          </p>

          {/* Key Quick Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statIconWrapper}>
                <Award size={20} />
              </div>
              <div className={styles.statText}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Years of Excellence</span>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIconWrapper}>
                <div className={styles.starCluster}>
                  <Star size={18} fill="var(--gold-color)" stroke="var(--gold-color)" />
                </div>
              </div>
              <div className={styles.statText}>
                <span className={styles.statNum}>500+</span>
                <span className={styles.statLabel}>Google Reviews</span>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIconWrapper}>
                <Users size={20} />
              </div>
              <div className={styles.statText}>
                <span className={styles.statNum}>10000+</span>
                <span className={styles.statLabel}>Students Mentored</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.btnRow}>
            <a href="#courses" className={styles.btnPrimary}>
              Explore Courses
            </a>
            <a href="tel:9447141102" className={styles.btnOutline}>
              <Phone size={16} />
              Talk to Expert
            </a>
          </div>
        </div>

        {/* Right Side: Avatar, Circular Graphics, and Badge */}
        <div className={styles.rightVisual}>
          <div className={styles.imageWrapper}>
            {/* Orbital backdrop rings */}
            <div className={styles.circleBg}></div>
            <div className={styles.dashedRing}></div>
            <div className={styles.dottedRing}></div>

            {/* Paper Airplane flight */}
            <div className={styles.paperPlaneContainer}>
              <svg viewBox="0 0 100 100" className={styles.planeSvg}>
                <path d="M10,80 Q40,30 80,20" fill="none" stroke="rgba(122, 12, 36, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M80,20 L72,24 L76,16 Z" fill="var(--maroon-medium)" />
              </svg>
            </div>

            {/* Hero Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/der2xk0cv/image/upload/v1781810033/Removal-647_ikjbyd.png"
              alt="Nagarajan R - Chief Mentor"
              className={styles.heroImage}
            />

            {/* Mentor Info Badge */}
            <div className={styles.mentorBadge}>
              <h3 className={styles.badgeTitle}>Expert Mentorship.</h3>
              <h3 className={styles.badgeSub}>Proven Results.</h3>
              <div className={styles.cursiveCall}>
                Call Us: Trivandrum
              </div>
              <div className={styles.mentorName}>Nagarajan R</div>
              <div className={styles.mentorTitle}>(Director & Chief Mentor)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
