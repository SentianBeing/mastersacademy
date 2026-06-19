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

// Framer Motion animation configurations for JEE page
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

export default function JeeCoachingPage() {
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
          type: 'jee',
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
      console.error("Network submission error for JEE page form:", err);
      alert("Network connection error. Please verify your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Award size={24} />,
      title: "Senior IITian Faculty",
      text: "Acquire tips and rigorous problem-solving skills from veteran IIT/NIT graduates and top engineering experts."
    },
    {
      icon: <Users size={24} />,
      title: "JEE & NEET Micro Batches",
      text: "Limit class strength to 15-20 students to ensure daily doubt solving, direct mentoring, and individual assessment."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Advanced IIT Prep Material",
      text: "Premium conceptual modules and extensive practice problem booklets mapped directly to JEE Main & Advanced syllabi."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Online CBT Exam Engine",
      text: "Familiarize yourself with the actual NTA interface using our dynamic computer-based mock testing labs."
    }
  ];

  const programs = [
    {
      title: "Two-Year Integrated IIT-JEE Program",
      duration: "Class 11 & 12 (Two Years)",
      description: "Designed for secondary school students. Integrates regular school board curriculum with elite, conceptually heavy competitive training to conquer JEE Main & Advanced.",
      bullets: [
        "CBSE / State school curriculum alignment",
        "Weekly simulated NTA-style online mock sessions",
        "Focused workouts on Mathematics and Physics shortcuts",
        "Comprehensive board-exam mock preparation"
      ]
    },
    {
      title: "JEE Repeaters / Droppers Batch",
      duration: "One Year (Class 12 Passed)",
      description: "A fast-paced, high-intensity program tailored for students dedicating a year to score in the 99th percentile. Concentrates on clearing advanced physics, chemistry, and calculus bottlenecks.",
      bullets: [
        "Full-time offline rigorous coaching schedule",
        "Individual academic mentoring under senior counselors",
        "Advanced daily worksheets and speed mock testing",
        "Separate secure hostel and boarding facilities"
      ]
    },
    {
      title: "JEE Main & Advanced Crash Course",
      duration: "Intensive 45 Days",
      description: "Launches right after board exams. Focuses heavily on test-taking strategy, high-yield engineering entrance questions, time-saving tricks, and full-length CBT tests.",
      bullets: [
        "Continuous CBT lab practice sessions",
        "Previous years' JEE question analysis workshops",
        "Short-cut formulas and quick revision sessions",
        "Hybrid online & offline options available"
      ]
    },
    {
      title: "JEE & NEET Micro Batches (Premium)",
      duration: "Ongoing Batches (Class 11, 12 & Repeaters)",
      description: "Our signature micro batches have a hard limit of 15-20 students per class. Engineered specifically for high-achieving aspirants targeting top IITs and NITs.",
      bullets: [
        "Max 15-20 students for ultimate personal tutoring",
        "Customized daily homework and detailed review tracking",
        "Direct daily contact with subject experts",
        "24/7 dedicated classroom debate and study space"
      ]
    }
  ];

  const faqs = [
    {
      question: "What are the JEE & NEET Micro Batches, and how do they benefit students?",
      answer: "Our JEE & NEET Micro Batches are premium, low-strength class streams capped at 15-20 students. This allows our senior IIT faculty to monitor each student's calculations directly, customize study speed, clear doubts on the spot, and conduct regular progress calls with parents."
    },
    {
      question: "How does the MTS mock series compare to the real NTA JEE exam?",
      answer: "The Master's Test Series (MTS) matches the real NTA JEE Main and Advanced interface exactly. Tests are taken in our dedicated CBT lab and provide detailed analytics showing your speed per question, subject-wise weakness breakdown, and Kerala statewide benchmarking."
    },
    {
      question: "Can I join Masters Entrance Academy if I am from outside Trivandrum?",
      answer: "Yes, Masters is a leading entrance academy in Trivandrum. We welcome students from all across Kerala and provide secure, separate boarding and hostel facilities for boys and girls with fully monitored study hours."
    },
    {
      question: "How do I secure admission to the JEE programs?",
      answer: "You can enquire online by filling out the form on this page or visit our Pattom or Neyyattinkara offices directly. Admissions to the repeaters and integrated batches are based on board results and periodical scholarship screening exams."
    }
  ];

  return (
    <div className={styles.jeePage}>
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
                <span>Premier Engineering Coaching</span>
              </motion.div>
              
              <motion.h1 className={styles.heroTitle} variants={heroItemVariants}>
                Conquer JEE. <span className={styles.goldHighlight}>Enter Your Dream IIT/NIT.</span>
              </motion.h1>
              
              <motion.p className={styles.heroDesc} variants={heroItemVariants}>
                Partner with the top-tier entrance academy in Trivandrum. Excel in JEE Main & Advanced through custom study resources, computer-based testing, and our high-focus JEE & NEET micro batches.
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
                  src="/images/jee-coaching.png" 
                  alt="Engineering Student JEE Prep" 
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
              <h2 className={styles.sectionTitle}>Leading JEE Entrance Academy in Trivandrum</h2>
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
              <h2 className={styles.sectionTitle}>JEE Entrance Programs</h2>
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
                    alt="Students taking JEE exam online CBT mock tests" 
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
                <h2 className={styles.mtsTitle}>Dynamic CBT Mock Testing Engine</h2>
                <p className={styles.mtsDesc}>
                  Our specialized computer-based test platform replicates NTA JEE Main and Advanced portals with 100% fidelity. We train students in formula memory, calculation accuracy, and rapid question filtering to avoid negative marks.
                </p>

                <div className={styles.featuresList}>
                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>Simulated NTA CBT Interface</h4>
                      <p className={styles.featText}>Practice on the same dashboard you will encounter on exam day, building comfort and confidence.</p>
                    </div>
                  </div>

                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Star size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>Speed & Accuracy Breakdowns</h4>
                      <p className={styles.featText}>Get data summaries tracking time spent per question and identify calculus or physics bottlenecks.</p>
                    </div>
                  </div>

                  <div className={styles.featItem}>
                    <div className={styles.featIconBox}>
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className={styles.featTitle}>Percentile Tracking</h4>
                      <p className={styles.featText}>Benchmarking scores with thousands of students in South Kerala to get realistic ranking indicators.</p>
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
                  Admissions are currently open for our JEE Main & Advanced batches. Reach out to our Pattom or Neyyattinkara counselors to book a demo class.
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
                      <option value="repeaters">JEE Repeaters (Class 12 Passed)</option>
                      <option value="integrated">Two-Year Integrated JEE (Class 11)</option>
                      <option value="crash">JEE 2026 Crash Course</option>
                      <option value="microbatch">Premium JEE Micro Batch (15-20 students)</option>
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
