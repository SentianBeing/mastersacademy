"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus('submitting');
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'contact',
          data: formData
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: '',
          message: ''
        });
        
        // Reset back to idle after a few seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error("API response error:", errorData.error);
        setStatus('idle');
        alert("Failed to send message: " + (errorData.error || "Please try again later."));
      }
    } catch (error) {
      console.error("Network submission error:", error);
      setStatus('idle');
      alert("Network connection error. Please verify your internet connection and try again.");
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className="container">
        
        {/* Section Heading */}
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>GET IN TOUCH</span>
          <h2 className={styles.title}>Have Questions? Contact Us!</h2>
          <p className={styles.description}>
            Fill out the form below or reach us directly. Our team is ready to guide you on your academic journey.
          </p>
        </div>

        <div className={styles.contactGrid}>
          
          {/* Left Column: Direct Contact Info Panel */}
          <motion.div 
            className={styles.infoPanel}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoSubtitle}>Reach out to us directly or visit our office.</p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Our Location</h4>
                    <p>TC 25/3419, Masters Building, Thampanoor, Trivandrum, Kerala 695001</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Call Us</h4>
                    <p>
                      <a href="tel:9447141102">+91 94471 41102</a><br />
                      <a href="tel:8281784102">+91 82817 84102</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Email Address</h4>
                    <p><a href="mailto:info@mastersacademy.in">info@mastersacademy.in</a></p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Clock size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Office Hours</h4>
                    <p>Mon - Sat: 8:30 AM - 7:30 PM<br />Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements inside card */}
              <div className={styles.cardCircle1}></div>
              <div className={styles.cardCircle2}></div>
            </div>
          </motion.div>

          {/* Right Column: Modern Contact Form Card */}
          <motion.div 
            className={styles.formPanel}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.formCard}>
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    className={styles.successScreen}
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 size={64} className={styles.successIcon} />
                    <h3 className={styles.successHeading}>Message Sent Successfully!</h3>
                    <p className={styles.successText}>
                      Thank you for contacting Master's Academy. Our education advisors will reach out to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className={styles.contactForm}
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className={styles.formTitle}>Send Us a Message</h3>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formField}>
                        <label htmlFor="contact-name">Full Name *</label>
                        <input 
                          type="text" 
                          id="contact-name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          placeholder="John Doe"
                          required 
                          className={styles.formInput}
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className={styles.formRowTwo}>
                      <div className={styles.formField}>
                        <label htmlFor="contact-phone">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="contact-phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          placeholder="e.g. +91 9876543210"
                          required 
                          className={styles.formInput}
                          disabled={status === 'submitting'}
                        />
                      </div>

                      <div className={styles.formField}>
                        <label htmlFor="contact-email">Email Address</label>
                        <input 
                          type="email" 
                          id="contact-email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          placeholder="john@example.com"
                          className={styles.formInput}
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formField}>
                        <label htmlFor="contact-course">Course of Interest</label>
                        <select 
                          id="contact-course" 
                          name="course" 
                          value={formData.course} 
                          onChange={handleInputChange}
                          className={styles.formSelect}
                          disabled={status === 'submitting'}
                        >
                          <option value="">Select a course option</option>
                          <option value="neet">NEET Coaching (Medical Entrance)</option>
                          <option value="jee">JEE Coaching (Engineering Entrance)</option>
                          <option value="keam">KEAM Coaching (Kerala Engineering)</option>
                          <option value="foundation">Early Foundation Class (8 - 10)</option>
                          <option value="tuition">School Tuition (Class 5 - 12)</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formField}>
                        <label htmlFor="contact-message">Your Message</label>
                        <textarea 
                          id="contact-message" 
                          name="message" 
                          value={formData.message} 
                          onChange={handleInputChange} 
                          placeholder="How can we help you?"
                          rows={4}
                          className={styles.formTextarea}
                          disabled={status === 'submitting'}
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className={styles.submitBtn}
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <span className={styles.loader}>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} className={styles.sendIcon} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
