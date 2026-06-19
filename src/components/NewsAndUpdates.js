"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './NewsAndUpdates.module.css';

export default function NewsAndUpdates() {
  const smallNews = [
    {
      img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=150&auto=format&fit=crop',
      date: 'June 12, 2026',
      author: 'Admin',
      title: '7 Crucial tips to crack the Master\'s Entrance Exam in your first attempt'
    },
    {
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=150&auto=format&fit=crop',
      date: 'June 08, 2026',
      author: 'Faculty',
      title: 'Understanding the new Syllabus Structure: What has changed in 2026'
    },
    {
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=150&auto=format&fit=crop',
      date: 'June 01, 2026',
      author: 'Mentor',
      title: 'Why Mock Tests are your secret weapon to securing a high national rank'
    }
  ];

  const quickLinks = [
    { name: "Admissions Office", href: "#" },
    { name: "Tuition & Fees", href: "#" },
    { name: "Scholarship Opportunities", href: "#" },
    { name: "Library Resources", href: "#" },
    { name: "Online Portal Support", href: "#" },
    { name: "FAQs & Contact Us", href: "#" }
  ];

  return (
    <section className={styles.newsSection}>
      <div className={`container ${styles.mainGrid}`}>
        {/* Left/Center Column: News & Updates */}
        <div className={styles.newsArea}>
          <div className={styles.headerRow}>
            <h2 className={styles.sectionTitle}>News & Updates</h2>
            <Link href="#" className={styles.viewAll}>
              View All News
            </Link>
          </div>

          <div className={styles.newsContentGrid}>
            {/* Large Featured News Card */}
            <div className={styles.featuredCard}>
              <div 
                className={styles.featuredImg}
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop')` }}
              ></div>
              <div className={styles.metaInfo}>
                <span>June 15, 2026</span>
                <span>•</span>
                <span>by Admin</span>
                <span>•</span>
                <span>Comments (2)</span>
              </div>
              <Link href="#">
                <h3 className={styles.featuredTitle}>
                  Professor John Doe wins prestigious award for outstanding research in modern education
                </h3>
              </Link>
              <p className={styles.featuredExcerpt}>
                We are thrilled to announce that our senior advisory faculty member, Professor John Doe, has been awarded the National Excellence Award for his breakthrough research contributions...
              </p>
              <Link href="#" className={styles.readMoreBtn}>
                Read More <ChevronRight size={14} />
              </Link>
            </div>

            {/* Small News List */}
            <div className={styles.smallList}>
              {smallNews.map((news, idx) => (
                <div key={idx} className={styles.smallItem}>
                  <div 
                    className={styles.smallThumb}
                    style={{ backgroundImage: `url('${news.img}')` }}
                  ></div>
                  <div className={styles.smallContent}>
                    <div className={styles.metaInfo}>
                      <span>{news.date}</span>
                    </div>
                    <Link href="#">
                      <h4 className={styles.smallTitle}>{news.title}</h4>
                    </Link>
                    <Link href="#" className={styles.readMoreBtn}>
                      Read More <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Quick Links Sidebar */}
        <div className={styles.sidebarArea}>
          <div 
            className={styles.sidebarCard}
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=400&auto=format&fit=crop')` }}
          >
            <div className={styles.sidebarOverlay}></div>
            <div className={styles.sidebarContent}>
              <h3 className={styles.sidebarTitle}>Quick Links</h3>
              <ul className={styles.linksList}>
                {quickLinks.map((link, idx) => (
                  <li key={idx} className={styles.linkItem}>
                    <Link href={link.href}>
                      <span>{link.name}</span>
                      <ChevronRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
