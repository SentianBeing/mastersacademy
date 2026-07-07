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

// Framer Motion animation configurations for NEET page
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

export default function NeetCoachingPage() {
  // State for active FAQ items
  const [openFaq, setOpenFaq] = useState(null);

  // State for contact form
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    if (formData.name && formData.phone) {
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: 'neet',
            data: {
              name: formData.name,
              phone: formData.phone,
              classStandard: formData.studentClass
            }
          })
        });

        if (response.ok) {
          setFormSubmitted(true);
          // Reset form
          setFormData({ name: '', phone: '', studentClass: '' });
          setTimeout(() => setFormSubmitted(false), 5000);
        } else {
          const err = await response.json();
          alert("Failed to submit request: " + (err.error || "Please try again later."));
        }
      } catch (err) {
        console.error("Network submission error for NEET page form:", err);
        alert("Network connection error. Please verify your internet connection and try again.");
      }
    }
  };

  const features = [
    {
      icon: <Award size={24} />,
      title: "Statewide Expert Faculty",
      text: "Learn from top-tier, highly experienced professors who have trained thousands of medical aspirants."
    },
    {
      icon: <Users size={24} />,
      title: "Personalized Mentoring",
      text: "Focused batches ensure one-on-one attention, personalized progress reviews, and doubt clearing sessions."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Rigorous Study Material",
      text: "Constantly updated study modules covering fundamental and advanced concepts in Physics, Chemistry, and Biology."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Smart Learning Tools",
      text: "Interactive smart boards, diagnostic tools, and mock testing facilities to track your daily progress."
    }
  ];

  const programs = [
    {
      title: "Two-Year Integrated AIIMS / NEET Program",
      duration: "Class 11 & 12 (Two Years)",
      description: "Meticulously designed for high school students. This course runs in parallel with school classes to give students an exceptional edge in both Board exams and national level medical entrances like AIIMS and NEET.",
      bullets: [
        "Comprehensive coverage of CBSE & State syllabi",
        "Weekly assessments and national-level mock tests",
        "Separated doubt resolution and analysis sessions",
        "Expert assistance in entrance counseling"
      ]
    },
    {
      title: "NEET Repeaters Batch (Long Term)",
      duration: "One Year (Class 12 Passed)",
      description: "Tailored specifically for students who want to dedicate a full year to mastering NEET. This high-octane program is designed to build speed, accuracy, and strong conceptually oriented reasoning.",
      bullets: [
        "Full-time regular offline classes with rigorous schedules",
        "Premium accommodation and separate hostel facilities",
        "High-difficulty question solving and shortcut workshops",
        "Individual chief-mentorship under Jomon K. Thomas"
      ]
    },
    {
      title: "NEET Crash Course Program",
      duration: "Intensive 30-45 Days",
      description: "A fast-paced review program launching right after board exams. Designed to maximize test score potential through quick shortcuts, mock tests, and key concept revisions.",
      bullets: [
        "Phased launch to align with Board exam schedules",
        "Simulated mock tests mimicking real NEET exam environment",
        "Focused study sessions on high-weightage chapters",
        "Affordable pricing with full online and hybrid options"
      ]
    },
    {
      title: "Medical Foundation Course",
      duration: "Class 8 to 10 (1-3 Years)",
      description: "Introduces school students to post-Plus Two competitive formats early. Lays down a rock-solid foundation in logical thinking, Science, and Mathematics for future competitive exams.",
      bullets: [
        "Conceptual clarity beyond standard school textbooks",
        "Prepares for NTSE, Olympiads, and future NEET prep",
        "Fosters critical thinking and competitive confidence",
        "Classes scheduled without affecting regular school timings"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I enroll in the NEET coaching courses at Master's Entrance Academy?",
      answer: "You can easily register by filling out the online query form on this page, or by visiting our Pattom or Neyyattinkara campuses in Trivandrum for in-person enrollment. Our academic counselors will guide you through the course selections."
    },
    {
      question: "Does the Academy provide separate accommodation and hostels?",
      answer: "Yes, we provide top-notch, highly focused hostel and accommodation facilities for long-term repeaters batch students. This includes separate dormitories for boys and girls, nutritious meals, and controlled study environments."
    },
    {
      question: "What is the qualifications of the teaching faculty at Master's?",
      answer: "Our faculty is comprised of handpicked entrance experts, senior lecturers, and veteran academicians from across Kerala, many of whom have over 10-20 years of experience guiding top scorers to secure MBBS seats in prestigious Government Medical Colleges."
    },
    {
      question: "Are there scholarships or screening tests available?",
      answer: "Yes, Master's Academy offers merit-based scholarships based on Class 10/12 board results and through our scholarship screening tests held periodically. Contact our office to check eligibility."
    }
  ];

  return (
    <div className={styles.neetPage}>
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
                <span>Premier Medical Coaching</span>
              </motion.div>

              <motion.h1 className={styles.heroTitle} variants={heroItemVariants}>
                Conquer NEET. <span className={styles.goldHighlight}>Shape Your Medical Future.</span>
              </motion.h1>

              <motion.p className={styles.heroDesc} variants={heroItemVariants}>
                Empowering medical aspirants in Trivandrum with expert mentoring, rigorous study modules, and result-oriented test formats. Master the concepts and secure your dream medical seat.
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
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Medical Student NEET Aspirant"
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
              <h2 className={styles.sectionTitle}>The Best NEET Coaching in Trivandrum</h2>
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
              <h2 className={styles.sectionTitle}>NEET Coaching Programs</h2>
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
                    alt="Students taking exam online/offline mock tests"
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
                <h2 className={styles.mtsTitle}>Rigorous Testing. Proven Strategy.</h2>
                <p className={styles.mtsDesc}>
                  Our custom Master's Test Series (MTS) is strategically calibrated to mirror the actual difficulty curve of the NEET exam. We build question formats that test analytical depth, core speed, and negative-marking mitigation.
                </p>

                <div className={styles.featuresList}>
                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>OMR Mock Practice</h4>
                      <p className={styles.featText}>Practice on OMR sheets and custom mock test formats to remove test-day anxiety.</p>
                    </div>
                  </div>

                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Star size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>Detailed Performance Analytics</h4>
                      <p className={styles.featText}>Get comprehensive score breakdowns mapping your weaknesses in Physics, Chemistry, or Biology chapters.</p>
                    </div>
                  </div>

                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>State-Level Benchmarking</h4>
                      <p className={styles.featText}>Compare mock performance percentile indicators with thousands of peers in the capital district and South Kerala.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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

        <GoogleReviews />

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
                  Admissions are currently open for Two-Year Integrated, One-Year Repeaters, and Foundation NEET batches. Contact our counselors today to book your seat.
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
                    >
                      <option value="">Select course option</option>
                      <option value="repeaters">NEET Repeaters (Class 12 Passed)</option>
                      <option value="integrated">Two-Year NEET / AIIMS (Class 11)</option>
                      <option value="crash">NEET 2025 Crash Course</option>
                      <option value="foundation">NEET Foundation (Class 8-10)</option>
                    </select>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Submit Request
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
