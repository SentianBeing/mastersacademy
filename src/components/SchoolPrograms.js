"use client";

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './SchoolPrograms.module.css';

export default function SchoolPrograms() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    standard: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.standard) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'school_enquiry',
          data: {
            name: formData.name,
            phone: formData.phone,
            classStandard: formData.standard
          }
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', phone: '', standard: '' });
        setTimeout(() => {
          setFormSubmitted(false);
          setIsModalOpen(false);
        }, 3500);
      } else {
        const err = await response.json();
        alert("Failed to submit inquiry: " + (err.error || "Please try again later."));
      }
    } catch (err) {
      console.error("Network submission error for school form:", err);
      alert("Network connection error. Please verify your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const programs = [
    {
      grades: "5th - 7th",
      title: "Foundation Program",
      description: "Build strong basics for future success.",
      image: "https://res.cloudinary.com/der2xk0cv/image/upload/v1781814269/Removal-615_yexgtl.png",
      alt: "5th-7th Foundation Program",
      imgHeight: "185px",
      imgBottom: "10px",
      hasOrbit: false
    },
    {
      grades: "8th - 10th",
      title: "Board & Entrance Foundation",
      description: "CBSE / ICSE / State Syllabus Support Support.",
      image: "https://res.cloudinary.com/der2xk0cv/image/upload/v1781814985/ChatGPT_Image_Jun_19_2026_02_06_01_AM_2_ltl3xe.png",
      alt: "8th-10th Board Foundation",
      imgHeight: "185px",
      imgBottom: "10px",
      hasOrbit: false,
      offsetX: "22px"
    },
    {
      grades: "11th - 12th",
      title: "NEET / JEE / KEAM Integrated Program",
      description: "Targeted coaching for top ranks.",
      image: "https://res.cloudinary.com/der2xk0cv/image/upload/v1781815456/ChatGPT_Image_Jun_19_2026_02_14_10_AM_lmxy1y.png",
      alt: "11th-12th Integrated Program",
      imgHeight: "185px",
      imgBottom: "10px",
      hasOrbit: false,
      offsetX: "16px"
    }
  ];

  return (
    <section className={styles.schoolProgramsSection}>
      <div className={`container ${styles.layoutGrid}`}>
        {/* Left Side: Content Box */}
        <motion.div 
          className={styles.leftContent}
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.admissionBadge}>
            <span className={styles.bullet}></span>
            ADMISSIONS OPEN 2024-25
          </div>
          
          <h2 className={styles.sectionTitle}>
            From 5th to 12th Standard<br />
            <span className={styles.highlight}>We Teach. You Achieve.</span>
          </h2>
          
          <p className={styles.sectionDesc}>
            We provide structured foundation programs for school students to build strong concepts, excel in exams and stay ahead in the competition.
          </p>
          
          <div className={styles.buttonGroup}>
            <a href="#enquire" className={styles.viewBtn}>
              View School Programs
              <ArrowRight size={16} className={styles.arrow} />
            </a>
            <button onClick={() => setIsModalOpen(true)} className={styles.enquireBtn}>
              Enquire Now
            </button>
          </div>
        </motion.div>

        {/* Right Side: Cards Grid */}
        <motion.div 
          className={styles.cardsGrid}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((prog, idx) => {
            const cardId = idx === 0 ? "foundation" : idx === 2 ? "integrated" : undefined;
            return (
              <motion.div 
                key={idx} 
                id={cardId}
                className={styles.programCard}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { type: 'spring', stiffness: 90, damping: 14 }
                  }
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
              <div className={styles.cardGraphicContainer}>
                {prog.hasOrbit !== false && <div className={styles.dashedOrbit}></div>}
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={prog.image} 
                  alt={prog.alt} 
                  className={styles.studentImage} 
                  style={{ height: prog.imgHeight, bottom: prog.imgBottom, '--offset-x': prog.offsetX || '0px' }}
                />
              </div>
              
              <div className={styles.cardInfo}>
                <span className={styles.gradesText}>{prog.grades}</span>
                <h3 className={styles.cardTitle}>{prog.title}</h3>
                <p className={styles.cardDesc}>{prog.description}</p>
                
                <div className={styles.statusLabel}>
                  Admission Open
                </div>
              </div>
            </motion.div>
          );
          })}
        </motion.div>
      </div>

      {/* Enquire Now Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)} aria-label="Close modal">
              <X size={20} />
            </button>

            {formSubmitted ? (
              <div className={styles.modalSuccess}>
                <div className={styles.successIconCircle}>✓</div>
                <h3 className={styles.successTitle}>Inquiry Received</h3>
                <p className={styles.successText}>
                  Thank you! Our academic advisor for school tuitions & foundation batches will contact you shortly.
                </p>
              </div>
            ) : (
              <div>
                <h3 className={styles.modalTitle}>School Program Admissions</h3>
                <p className={styles.modalSubtitle}>Request details for Tuitions (Class 5-12) & Foundation batches.</p>
                
                <form onSubmit={handleFormSubmit} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="student-name">Student Name *</label>
                    <input 
                      type="text" 
                      id="student-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      placeholder="Enter student name"
                      className={styles.modalInput}
                      required 
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="student-phone">Mobile Number *</label>
                    <input 
                      type="tel" 
                      id="student-phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                      placeholder="Enter parent or student mobile number"
                      className={styles.modalInput}
                      required 
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="student-standard">Class / Standard *</label>
                    <select 
                      id="student-standard" 
                      name="standard" 
                      value={formData.standard} 
                      onChange={handleInputChange}
                      className={styles.modalSelect}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Choose standard</option>
                      <option value="5th Standard">5th Standard</option>
                      <option value="6th Standard">6th Standard</option>
                      <option value="7th Standard">7th Standard</option>
                      <option value="8th Standard">8th Standard</option>
                      <option value="9th Standard">9th Standard</option>
                      <option value="10th Standard">10th Standard</option>
                      <option value="11th Standard (Plus One)">11th Standard (Plus One)</option>
                      <option value="12th Standard (Plus Two)">12th Standard (Plus Two)</option>
                    </select>
                  </div>

                  <button type="submit" className={styles.modalSubmitBtn} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
