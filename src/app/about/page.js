"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Award, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <Header />
      
      <main>
        {/* --- Section 1: Hero Section (Reused home2/old home hero) --- */}
        <Hero />

        {/* --- Section 2: Why Choose Us Section (Reused component) --- */}
        <WhyChooseUs />

        {/* --- Section 3: Why We Are the Best Section (SEO targeted keyword) --- */}
        <section className={styles.bestCoachingSection}>
          <div className="container">
            <div className={styles.gridContainer}>
              <motion.div 
                className={styles.contentCol}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.taglineBadge}>
                  <Award size={14} className={styles.badgeIcon} />
                  <span>Trivandrum's Leading Academy</span>
                </div>
                
                <h2 className={styles.heading}>
                  Why We Are the <span className={styles.goldText}>Best Entrance Coaching Centre</span> in Trivandrum
                </h2>
                
                <p className={styles.desc}>
                  At Masters Entrance Academy, we do not believe in mass-factory schooling. Our reputation as the best entrance coaching centre in Trivandrum is built on a single core principle: <strong>uncompromised personal attention</strong>. We bridge the gap between heavy academic theory and actual competitive problem-solving speed.
                </p>
                
                <div className={styles.pointsList}>
                  <div className={styles.pointItem}>
                    <div className={styles.pointIcon}>
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className={styles.pointTitle}>Strategic Exam Workout Sheets</h4>
                      <p className={styles.pointText}>
                        Students receive daily mathematical calculations and problem-solving shortcuts that train them specifically for the extreme speed requirements of competitive exams.
                      </p>
                    </div>
                  </div>

                  <div className={styles.pointItem}>
                    <div className={styles.pointIcon}>
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className={styles.pointTitle}>Elite Faculty & Director Mentoring</h4>
                      <p className={styles.pointText}>
                        Led directly by Jomon K. Thomas (Director & Chief Mentor), our team consists of veteran entrance experts who have spent over a decade training students for medical and engineering seats.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={styles.imageCol}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" 
                    alt="Classroom training at Masters Entrance Academy" 
                    className={styles.classroomImg}
                  />
                  <div className={styles.glassBadge}>
                    <span className={styles.badgeNum}>10+</span>
                    <span className={styles.badgeLabel}>Years of Excellence</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
