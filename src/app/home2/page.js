"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoachingCards from "@/components/CoachingCards";
import SchoolPrograms from "@/components/SchoolPrograms";
import MentoringPrograms from "@/components/MentoringPrograms";
import WhyChooseUs from "@/components/WhyChooseUs";
import GoogleReviews from "@/components/GoogleReviews";
import ResultsBanner from "@/components/ResultsBanner";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import { X } from 'lucide-react';
import styles from '../page.module.css';

export default function Home2() {
  const [activeModal, setActiveModal] = useState(null); // null | 'general'
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
            type: 'general',
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

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CoachingCards />
        <SchoolPrograms />
        <MentoringPrograms onEnrollClick={() => setActiveModal('general')} />
        <WhyChooseUs />
        <GoogleReviews />
        <ResultsBanner />
        <FooterCTA onEnrollClick={() => setActiveModal('general')} />
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
    </>
  );
}
