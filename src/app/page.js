"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoachingCards from "@/components/CoachingCards";
import SchoolPrograms from "@/components/SchoolPrograms";
import MentorsSection from "@/components/MentorsSection";
import MentoringPrograms from "@/components/MentoringPrograms";
import WhyChooseUs from "@/components/WhyChooseUs";
import GoogleReviews from "@/components/GoogleReviews";
import CallEnrollSection from "@/components/CallEnrollSection";
import ResultsBanner from "@/components/ResultsBanner";
import ContactSection from "@/components/ContactSection";
import { Play, ArrowUpRight, Star, X } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './page.module.css';

// Framer Motion Variants for Home Hero Section
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const visualVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, delay: 0.6 }
  }
};

export default function Home() {
  const [activeModal, setActiveModal] = useState(null); // null | 'general' | 'neetjee'
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [modalData, setModalData] = useState({
    name: '',
    phone: '',
    email: '',
    programType: '',
    classStandard: ''
  });

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (modalData.name && modalData.phone) {
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: activeModal, // 'general' or 'neetjee'
            data: modalData
          })
        });

        if (response.ok) {
          setModalSubmitted(true);
          setTimeout(() => {
            setActiveModal(null);
            setModalSubmitted(false);
            setModalData({
              name: '',
              phone: '',
              email: '',
              programType: '',
              classStandard: ''
            });
          }, 3000);
        } else {
          const err = await response.json();
          alert("Failed to submit request: " + (err.error || "Please try again later."));
        }
      } catch (err) {
        console.error("Network submission error for modal:", err);
        alert("Network connection error. Please verify your internet connection and try again.");
      }
    }
  };

  const avatars = [
    "https://res.cloudinary.com/der2xk0cv/image/upload/v1781859454/Screenshot_2026-06-19_133048_roa9lc.png",
    "https://res.cloudinary.com/der2xk0cv/image/upload/v1781859417/Screenshot_2026-06-19_133037_c7hlck.png",
    "https://res.cloudinary.com/der2xk0cv/image/upload/v1781859433/Screenshot_2026-06-19_133103_appe6o.png",
    "https://res.cloudinary.com/der2xk0cv/image/upload/v1781859396/images_6_l5a8se.jpg"
  ];

  return (
    <div className={styles.home2Page}>
      {/* Nav */}
      <Header />

      <main>
        {/* --- Custom Hero Section --- */}
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContainer}`}>

            {/* Left Content Column */}
            <motion.div
              className={styles.leftContent}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 className={styles.mainTitle} variants={itemVariants}>
                Expert Coaching is the best way to <span className={styles.accentText}>Master Your Dreams</span>
              </motion.h1>

              <motion.p className={styles.description} variants={itemVariants}>
                For over 10+ years, Master's Entrance Academy has been the trusted choice in Trivandrum for NEET, JEE, KEAM, and School Tuitions.
              </motion.p>

              {/* Action Buttons */}
              <motion.div className={styles.btnRow} variants={itemVariants}>
                <button onClick={() => setActiveModal('general')} className={styles.btnEnroll}>
                  Enroll Now
                </button>
                <a href="tel:9447141102" className={styles.btnLearnMore}>
                  <div className={styles.playIconWrapper}>
                    <Play size={18} fill="currentColor" />
                  </div>
                  <span>Talk to Expert</span>
                </a>
              </motion.div>

              {/* Social Proof */}
              <motion.div className={styles.socialProof} variants={itemVariants}>
                <div className={styles.avatarGroup}>
                  {avatars.map((url, idx) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={idx}
                      src={url}
                      alt={`Student Reviewer ${idx + 1}`}
                      className={styles.avatarImg}
                    />
                  ))}
                  <div className={styles.plusBadge}>+</div>
                </div>

                <div className={styles.reviewStats}>
                  <div className={styles.starsRow}>
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <span className={styles.ratingNum}>(4.7)</span>
                  </div>
                  <div className={styles.reviewText}>
                    500+ Reviews on Google
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual Column */}
            <motion.div
              className={styles.rightVisual}
              initial="hidden"
              animate="visible"
              variants={visualVariants}
            >
              {/* Circular Backdrop graphics */}
              <div className={styles.dashedRing}></div>
              <div className={styles.circleBg}></div>

              {/* Girl Portrait Image cutout */}
              <div className={styles.girlImgWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/student-hero2.png"
                  alt="Student smiling - Educ platform"
                  className={styles.girlImg}
                />
              </div>

              {/* Floating UI Badge 1 - Masters Academy Stats */}
              <motion.div
                className={styles.badgeCoursesWrapper}
                variants={badgeVariants}
              >
                <div className={styles.badgeCourses}>
                  <div className={styles.badgeIconBox}>
                    <ArrowUpRight size={20} />
                  </div>
                  <div className={styles.badgeStats}>
                    <span className={styles.badgeNum}>10000+</span>
                    <span className={styles.badgeLabel}>Students Mentored</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating UI Badge 2 - NEET/JEE Class Info */}
              <motion.div
                className={styles.badgeClassCardWrapper}
                variants={badgeVariants}
              >
                <div className={styles.badgeClassCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=80"
                    alt="Director & Chief Mentor"
                    className={styles.tutorAvatar}
                  />
                  <div className={styles.classDetails}>
                    <span className={styles.classNameText}>NEET & JEE 2026</span>
                    <span className={styles.classTimeText}>Admissions Open Now</span>
                    <button onClick={() => setActiveModal('neetjee')} className={styles.btnJoin}>
                      Enquire
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* --- Render Other Sections --- */}
        <CoachingCards />
        <SchoolPrograms />
        <MentorsSection />
        <MentoringPrograms onEnrollClick={() => setActiveModal('general')} />
        <WhyChooseUs />
        <GoogleReviews />
        <CallEnrollSection onEnrollClick={() => setActiveModal('general')} />
        <ResultsBanner />
        <ContactSection />
      </main>

      <Footer />

      {/* General Enrollment Modal */}
      {activeModal === 'general' && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveModal(null)} aria-label="Close modal">
              <X size={20} />
            </button>

            {modalSubmitted ? (
              <div className={styles.modalSuccess}>
                <div className={styles.successIconCircle}>✓</div>
                <h3 className={styles.successTitle}>Request Submitted</h3>
                <p className={styles.successText}>
                  Thank you! Our admission advisor will contact you shortly to guide you.
                </p>
              </div>
            ) : (
              <div>
                <h3 className={styles.modalTitle}>Join Master's Academy</h3>
                <p className={styles.modalSubtitle}>Fill in details to start your enrollment process.</p>

                <form onSubmit={handleModalSubmit} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="modal-name">Full Name *</label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={modalData.name}
                      onChange={handleModalInputChange}
                      placeholder="Enter student name"
                      className={styles.modalInput}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="modal-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={modalData.phone}
                      onChange={handleModalInputChange}
                      placeholder="Enter mobile number"
                      className={styles.modalInput}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="modal-email">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={modalData.email}
                      onChange={handleModalInputChange}
                      placeholder="Enter email address"
                      className={styles.modalInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="modal-program">Select Program Type *</label>
                    <select
                      id="modal-program"
                      name="programType"
                      value={modalData.programType}
                      onChange={handleModalInputChange}
                      className={styles.modalSelect}
                      required
                    >
                      <option value="">Choose program type</option>
                      <option value="entrance">Entrance Coaching Courses (NEET / JEE / KEAM)</option>
                      <option value="tuition">Tuition Program (Class 5 to 12)</option>
                    </select>
                  </div>

                  {modalData.programType === 'tuition' && (
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="modal-class">Class Standard *</label>
                      <select
                        id="modal-class"
                        name="classStandard"
                        value={modalData.classStandard}
                        onChange={handleModalInputChange}
                        className={styles.modalSelect}
                        required
                      >
                        <option value="">Choose class standard</option>
                        {[5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <option key={num} value={num}>Class {num}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <button type="submit" className={styles.modalSubmitBtn}>
                    Submit Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* NEET / JEE 2026 Specific Modal */}
      {activeModal === 'neetjee' && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveModal(null)} aria-label="Close modal">
              <X size={20} />
            </button>

            {modalSubmitted ? (
              <div className={styles.modalSuccess}>
                <div className={styles.successIconCircle}>✓</div>
                <h3 className={styles.successTitle}>Inquiry Submitted</h3>
                <p className={styles.successText}>
                  Thank you for inquiring about NEET & JEE 2026! Our chief coaching advisor will contact you shortly.
                </p>
              </div>
            ) : (
              <div>
                <h3 className={styles.modalTitle}>NEET & JEE 2026 Admissions</h3>
                <p className={styles.modalSubtitle}>Request details for medical/engineering entrance coaching batches.</p>

                <form onSubmit={handleModalSubmit} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="neet-name">Aspirant Name *</label>
                    <input
                      type="text"
                      id="neet-name"
                      name="name"
                      value={modalData.name}
                      onChange={handleModalInputChange}
                      placeholder="Enter student name"
                      className={styles.modalInput}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="neet-phone">Mobile Number *</label>
                    <input
                      type="tel"
                      id="neet-phone"
                      name="phone"
                      value={modalData.phone}
                      onChange={handleModalInputChange}
                      placeholder="Enter parent or student mobile number"
                      className={styles.modalInput}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="neet-batch">Select Target Batch *</label>
                    <select
                      id="neet-batch"
                      name="classStandard"
                      value={modalData.classStandard}
                      onChange={handleModalInputChange}
                      className={styles.modalSelect}
                      required
                    >
                      <option value="">Choose batch option</option>
                      <option value="repeaters">NEET/JEE Repeaters (1-Year Long Term)</option>
                      <option value="integrated">Two-Year Integrated Batch (Class 11 & 12)</option>
                      <option value="crash">NEET/JEE 2026 Crash Course</option>
                      <option value="foundation">Early Foundation (Class 8 to 10)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="neet-email">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="neet-email"
                      name="email"
                      value={modalData.email}
                      onChange={handleModalInputChange}
                      placeholder="Enter email address"
                      className={styles.modalInput}
                    />
                  </div>

                  <button type="submit" className={styles.modalSubmitBtn}>
                    Register Interest
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
