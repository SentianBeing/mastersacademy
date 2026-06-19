"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './GoogleReviews.module.css';

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Hot Chronicles",
      rating: 5,
      text: "Best neet coaching centre in trivandrum. I got good score in my first attempt itself. All credits goes to Master's Entrance Academy - Pattom, Trivandrum"
    },
    {
      name: "Hridya Pradeep",
      rating: 5,
      text: "My sister had a great experience at Master's Entrance Academy - Tvm while preparing for NEET. The faculties were extremely supportive, especially in Bio, Phy & Chem. The regular mock tests and feedback really helped her to track the progress. I also appreciated the doubt-clearing sessions and personal mentoring. Highly recommended if you're serious about cracking NEET!"
    },
    {
      name: "Fincy Y",
      rating: 5,
      text: "My son has been with this facility for the past 4 years and I couldn't have asked for a better tuition facility. The staff is well experienced and give individual attention to every child. They cater to the needs of the child in terms of learning."
    },
    {
      name: "Nasila Mp",
      rating: 5,
      text: "After attending 1 year course in one of the famous institute in India itself, I have joined here . Master's academy faculties are excellent in finding out students weakness & know how to correct it. They are good in problem solving & give additional classes for related maths portions."
    },
    {
      name: "Asha Kayal",
      rating: 5,
      text: "BEST COACHING CENTRE IN TRIVANDRUM ... This academy allows you to gain a HUGE amount of knowledge in a great amount of time. The course fits into a pretty busy schedule with fantastic support throughout!! The Information is well thought out and delivered in each lesson in concise easy-to-understand format, with good audio and visual presentation."
    },
    {
      name: "Sumam J",
      rating: 5,
      text: "I am Dr. Suma , a practicing Doctor. I do know this institution very well. They do have well experienced entrance faculties for every subject. Tutors are continuing there & competing each other to provide best coaching & year by year result also more better. Regular test & doubt clearing sections are popular."
    },
    {
      name: "Asish S S",
      rating: 5,
      text: "Awesome!!! Many faculties for every subject. 5 to 10 model test paper for time management. Easy to access/close to bus stop /road side building. Good teaching and training. Independent attention for each student."
    },
    {
      name: "arjun sm",
      rating: 5,
      text: "Had a great time in masters, both the management and staffs are extremely diligent and much dedicated to provide the best to each students ... The quality of teaching and strategy of coaching is one to one excellent to crack neet as well as Jee"
    },
    {
      name: "jiji gomez",
      rating: 5,
      text: "My cousin sisters said that Master's Entrance Academy is the taking care of theory as well as problems. Where as some of the pan Indian institutes are just taking huge fees and teaching only theory part. Senior teachers are good mentors & remedial experts for their specialized subjects."
    },
    {
      name: "Sreedevi",
      rating: 5,
      text: "I've admitted my daughter for NEET Crash course..Very effective classes and workout sessions.Best coaching in affordable fees is their speciality."
    },
    {
      name: "Sonia R V",
      rating: 5,
      text: "Good teachers and good atmosphere. Crash course is very useful for average students."
    },
    {
      name: "anand ashok",
      rating: 5,
      text: "One of the best yet underrated Neet and Entrance coaching centres in Trivandrum. Faculties are well qualified and experienced and they give high regards and emphasis for science subjects."
    },
    {
      name: "Siby Kochupurackal",
      rating: 5,
      text: "First time, I know the importance of maths for neet coaching. Here they give special coaching for maths to make Physics & Chemistry problems. Super revision & doubt clearance sessions."
    }
  ];

  // Helper for generating premium background colors for initial avatars
  const getAvatarColor = (index) => {
    const bgColors = [
      '#4d0013', // Maroon dark
      '#7a0c24', // Maroon medium
      '#ab1736', // Maroon light
      '#d1a129', // Gold
      '#2c3e50', // Slate
      '#2980b9', // Blue
      '#27ae60', // Green
      '#8e44ad', // Violet
      '#d35400', // Orange
      '#16a085', // Teal
    ];
    return bgColors[index % bgColors.length];
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 991) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = reviews.length - cardsToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [cardsToShow, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = reviews.length - cardsToShow;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className={`container ${styles.layoutGrid}`}>
        {/* Left Column: Google rating block */}
        <motion.div 
          className={styles.ratingBlock}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Custom Google Icon */}
          <div className={styles.googleBrand}>
            <svg viewBox="0 0 24 24" className={styles.googleSvg}>
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            <span className={styles.googleText}>Google</span>
          </div>

          <h3 className={styles.reviewsTitle}>500+</h3>
          <span className={styles.reviewsSub}>Google Reviews</span>

          <div className={styles.starRow}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="var(--gold-color)" stroke="var(--gold-color)" />
            ))}
          </div>

          <p className={styles.trustedLabel}>
            Trivandrum's Most Trusted Coaching Academy
          </p>

          <a href="https://share.google/78ZFzQM1nKtpsgOJu" target="_blank" rel="noopener noreferrer" className={styles.readReviewsBtn}>
            Read More Reviews
          </a>
        </motion.div>

        {/* Right Column: Testimonial Carousel */}
        <motion.div 
          className={styles.sliderContainer}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <button className={styles.navBtnLeft} onClick={handlePrev} aria-label="Previous review">
            <ChevronLeft size={20} />
          </button>
          
          <div className={styles.sliderViewport}>
            <div 
              className={styles.sliderTrack}
              style={{ transform: `translateX(calc(-${currentIndex} * (100% + 20px) / ${cardsToShow}))` }}
            >
              {reviews.map((rev, idx) => (
                <div key={idx} className={styles.reviewCard}>
                  <div className={styles.cardHeader}>
                    <div 
                      className={styles.letterAvatar} 
                      style={{ backgroundColor: getAvatarColor(idx) }}
                    >
                      {rev.name.trim().charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.userMeta}>
                      <h4 className={styles.userName}>{rev.name}</h4>
                      <div className={styles.cardStars}>
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={12} fill="var(--gold-color)" stroke="var(--gold-color)" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={styles.reviewText}>"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.navBtnRight} onClick={handleNext} aria-label="Next review">
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className={styles.dotsRow}>
            {reviews.slice(0, Math.max(1, reviews.length - cardsToShow + 1)).map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
