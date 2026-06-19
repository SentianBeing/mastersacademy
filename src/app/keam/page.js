"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  ChevronDown, 
  BookOpen, 
  Award, 
  Users, 
  ArrowRight, 
  GraduationCap, 
  Star 
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './page.module.css';

// Framer Motion animation configurations for KEAM page
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 15 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 14 }
  }
};

export default function KeamCoachingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    studentClass: ''
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'keam',
          data: {
            name: formData.name,
            phone: formData.phone,
            classStandard: formData.studentClass
          }
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', phone: '', studentClass: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        const err = await response.json();
        alert("Failed to submit inquiry: " + (err.error || "Please try again later."));
      }
    } catch (err) {
      console.error("Network submission error for KEAM page form:", err);
      alert("Network connection error. Please verify your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Award size={24} />,
      title: "State-Level Engineering Faculty",
      text: "Learn from top lecturers who specialize in the KEAM syllabus and have guided thousands of students to top government seats."
    },
    {
      icon: <Users size={24} />,
      title: "JEE & NEET Micro Batches",
      text: "Access low-strength batches capped at 15-20 students to optimize math calculations and daily doubt-solving."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Focused Math & Physics Prep",
      text: "Comprehensive study materials with detailed explanations, target practice sets, and shortcut workshops."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "KEAM Mock Series",
      text: "Regular practice tests taken in mock environments to match the actual speed required for KEAM."
    }
  ];

  const programs = [
    {
      title: "Two-Year Integrated KEAM Prep",
      duration: "Class 11 & 12 (Two Years)",
      description: "Covers the complete school board syllabus while simultaneously training you to tackle complex entrance problems in KEAM Physics, Chemistry, and Math.",
      bullets: [
        "Full board syllabus coverage (CBSE/State)",
        "Regular class assessments and target mock tests",
        "Mathematics shortcut and speed-trick workshops",
        "Personalized doubt resolution sessions"
      ]
    },
    {
      title: "KEAM Repeaters / Droppers Batch",
      duration: "One Year (Class 12 Passed)",
      description: "Designed for engineering aspirants dedicated to achieving single-digit ranks in Kerala. Focused heavily on high-speed arithmetic, calculus, and mechanics shortcuts.",
      bullets: [
        "Offline daily classes with rigorous mock routines",
        "Individual academic mentor monitoring",
        "High-octane physics and chemistry workshops",
        "Separate hostel and boarding accommodation"
      ]
    },
    {
      title: "KEAM Intensive Crash Course",
      duration: "Intensive 45 Days",
      description: "Starts immediately after the board exams. A rapid-paced revision program designed to maximize test speed and score potential through past papers and simulated mock tests.",
      bullets: [
        "Daily full-length practice examinations",
        "Last-moment formulas and shortcuts workshops",
        "Detailed performance analysis sheets",
        "Offline and hybrid class options"
      ]
    },
    {
      title: "JEE & NEET Micro Batches (KEAM Focus)",
      duration: "Ongoing Batches (Class 11, 12 & Droppers)",
      description: "Enquire about our micro batches capped at 15-20 students. Provides high-end counseling and rigorous daily calculus practice sheets to secure seats in top-tier colleges like CET and Barton Hill.",
      bullets: [
        "Low student-teacher ratio (15-20 per class)",
        "Focused attention on complex calculus and physics",
        "Daily performance feedback loops",
        "Strategic counseling for college admissions"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do the JEE & NEET Micro Batches help KEAM aspirants?",
      answer: "Although they are named JEE & NEET Micro Batches, these low-strength streams (capped at 15-20 students) provide exceptionally rigorous mathematics and physics training that directly benefits KEAM students. The small class size allows mentors to correct calculation steps individually and focus on state-entrance speed formulas."
    },
    {
      question: "What engineering colleges in Kerala can I secure through KEAM?",
      answer: "A high rank in KEAM opens up admissions to Kerala's most prestigious government and self-financing engineering colleges, including College of Engineering Trivandrum (CET), Barton Hill, Government Engineering College Thrissur, and TKM College of Engineering."
    },
    {
      question: "Is Masters Entrance Academy considered a top entrance academy in Trivandrum?",
      answer: "Yes, Masters is recognized as a premier entrance academy in Trivandrum, trusted for over 10+ years. We offer top-tier offline coaching across our Trivandrum campuses, supported by premium boarding facilities for outstation students."
    },
    {
      question: "What is the admissions criteria for the KEAM batches?",
      answer: "Admissions are currently open for all KEAM batches. You can submit your interest using the contact form on this page or walk into our Pattom office. We offer merit-based scholarships based on board results and entrance screening exams."
    }
  ];

  return (
    <div className={styles.keamPage}>
      <Header />
      
      <main>
        {/* --- Hero Section --- */}
        <section className={styles.heroSection}>
          <motion.div 
            className={`container ${styles.heroContainer}`}
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.heroContent} variants={heroContainerVariants}>
              <motion.div className={styles.badge} variants={heroItemVariants}>
                <Star size={12} fill="currentColor" />
                <span>Kerala Engineering Prep</span>
              </motion.div>
              
              <motion.h1 className={styles.heroTitle} variants={heroItemVariants}>
                Master KEAM. <span className={styles.goldHighlight}>Enter Kerala's Top Colleges.</span>
              </motion.h1>
              
              <motion.p className={styles.heroDesc} variants={heroItemVariants}>
                Partner with the top-tier entrance academy in Trivandrum. Prepare for KEAM with handpicked mathematics lecturers, comprehensive study guides, and our highly focused JEE & NEET micro batches.
              </motion.p>
              
              <motion.div className={styles.heroButtons} variants={heroItemVariants}>
                <a href="#register" className={styles.btnPrimary}>
                  Enroll Now
                  <ArrowRight size={16} />
                </a>
                <a href="tel:9447141102" className={styles.btnSecondary}>
                  <Phone size={16} />
                  Talk to Expert
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imageOverlay}></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/keam-coaching.png" 
                  alt="KEAM Student Prep Masters" 
                  className={styles.heroImg}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Features Section --- */}
        <section className={styles.featuresSection}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <span className={styles.sectionSubtitle}>Why Choose Master's Academy</span>
              <h2 className={styles.sectionTitle}>Leading KEAM Entrance Academy in Trivandrum</h2>
            </motion.div>
            
            <motion.div 
              className={styles.featuresGrid}
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feat, index) => (
                <motion.div 
                  key={index} 
                  className={styles.featureCard}
                  variants={cardItemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className={styles.iconWrapper}>
                    {feat.icon}
                  </div>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureText}>{feat.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Programs Section --- */}
        <section className={styles.programsSection} id="courses">
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <span className={styles.sectionSubtitle}>Targeted Batches</span>
              <h2 className={styles.sectionTitle}>KEAM Entrance Programs</h2>
            </motion.div>

            <motion.div 
              className={styles.programsGrid}
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {programs.map((prog, index) => (
                <motion.div 
                  key={index} 
                  className={styles.programCard}
                  variants={cardItemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div>
                    <div className={styles.progHeader}>
                      <h3 className={styles.progTitle}>{prog.title}</h3>
                      <span className={styles.progDuration}>{prog.duration}</span>
                    </div>
                    <p className={styles.progDesc}>{prog.description}</p>
                    
                    <ul className={styles.bulletsList}>
                      {prog.bullets.map((bullet, idx) => (
                        <li key={idx} className={styles.bulletItem}>
                          <Check size={16} className={styles.checkIcon} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="#register" className={styles.enrollBtn}>
                    Inquire Details
                    <ArrowRight size={14} />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Master's Test Series (MTS) --- */}
        <section className={styles.mtsSection}>
          <div className="container">
            <div className={styles.mtsContainer}>
              <motion.div 
                className={styles.mtsVisual}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={styles.mtsImgWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
                    alt="Students taking KEAM mock tests in classroom" 
                    className={styles.mtsImg}
                  />
                </div>
                <div className={styles.mtsBadge}>
                  <div className={styles.mtsBadgeNum}>MTS</div>
                  <div className={styles.mtsBadgeText}>Master's Test Series</div>
                </div>
              </motion.div>

              <motion.div 
                className={styles.mtsContent}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className={styles.mtsTitle}>Kerala State Benchmarked Test Series</h2>
                <p className={styles.mtsDesc}>
                  Our custom KEAM test syllabus is meticulously designed to optimize your calculation speed. We train engineering candidates on mathematics shortcuts and high-weightage chemistry chapters to make sure you clear sectional thresholds.
                </p>

                <div className={styles.featuresList}>
                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>Calculus & Geometry Shortcuts</h4>
                      <p className={styles.featText}>Learn math shortcut formulas to solve lengthy KEAM calculus sheets in seconds.</p>
                    </div>
                  </div>

                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Star size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>Negative Marks Mitigation</h4>
                      <p className={styles.featText}>Practice speed filters to identify which questions to attempt and which to skip on exam day.</p>
                    </div>
                  </div>

                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>State-Level Rank Indicators</h4>
                      <p className={styles.featText}>Receive ranking indicators comparing your performance to thousands of candidates across the state.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Google Reviews Section (Reused as requested) --- */}
        <GoogleReviews />

        {/* --- FAQ Section --- */}
        <section className={styles.faqSection}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <span className={styles.sectionSubtitle}>Got Questions?</span>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </motion.div>

            <motion.div 
              className={styles.faqContainer}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.faqList}>
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className={styles.faqItem}>
                      <button 
                        className={styles.faqHeader} 
                        onClick={() => toggleFaq(index)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown 
                          size={18} 
                          className={`${styles.faqIcon} ${isOpen ? styles.faqIconActive : ''}`} 
                        />
                      </button>
                      <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}>
                        <p className={styles.faqAnswerText}>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Registration Section --- */}
        <section className={styles.registerSection} id="register">
          <div className="container">
            <div className={styles.formGrid}>
              <motion.div 
                className={styles.formInfo}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className={styles.infoTitle}>Connect with Admissions Team</h2>
                <p className={styles.infoDesc}>
                  Admissions are currently open for all KEAM preparation courses. Speak to our Thampanoor & Pattom offices to secure your seat.
                </p>

                <div className={styles.contactDetails}>
                  <div className={styles.contactCard}>
                    <div className={styles.contactIconCircle}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className={styles.contactLabel}>Phone Numbers</span>
                      <span className={styles.contactVal}>
                        <a href="tel:9447141102" className={styles.contactValLink}>9447141102</a> /{' '}
                        <a href="tel:8281784102" className={styles.contactValLink}>8281784102</a>
                      </span>
                    </div>
                  </div>

                  <div className={styles.contactCard}>
                    <div className={styles.contactIconCircle}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className={styles.contactLabel}>Official Email</span>
                      <a href="mailto:mastersacademypattom@gmail.com" className={`${styles.contactVal} ${styles.contactValLink}`}>
                        mastersacademypattom@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactCard}>
                    <div className={styles.contactIconCircle}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className={styles.contactLabel}>Main Campus</span>
                      <span className={styles.contactVal}>Opp. LIC, Pattom, Trivandrum - 695004</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={styles.formCard}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className={styles.formTitle}>Request a Consultation</h3>
                <form onSubmit={handleFormSubmit} className={styles.formFields}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className={styles.formInput} 
                      placeholder="Enter your name" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="phone">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className={styles.formInput} 
                      placeholder="Enter your mobile number" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="studentClass">Class/Course Interested</label>
                    <select 
                      id="studentClass" 
                      name="studentClass" 
                      value={formData.studentClass} 
                      onChange={handleInputChange} 
                      className={styles.formSelect}
                      disabled={isSubmitting}
                    >
                      <option value="">Select course option</option>
                      <option value="repeaters">KEAM Repeaters (Class 12 Passed)</option>
                      <option value="integrated">Two-Year Integrated KEAM (Class 11)</option>
                      <option value="crash">KEAM 2026 Crash Course</option>
                      <option value="microbatch">Premium JEE & NEET Micro Batch (KEAM Focus)</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>

                  {formSubmitted && (
                    <div className={styles.formStatus}>
                      Thank you! Our counseling advisor will contact you shortly.
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
