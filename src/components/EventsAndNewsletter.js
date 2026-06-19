"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, ChevronRight } from 'lucide-react';
import styles from './EventsAndNewsletter.module.css';

export default function EventsAndNewsletter() {
  const events = [
    {
      day: "17",
      month: "Jun",
      title: "Masterclass: How to solve complex logic puzzles",
      time: "4:00 PM - 6:00 PM",
      location: "Online (Zoom Link Provided)"
    },
    {
      day: "04",
      month: "Jul",
      title: "National Merit Scholarship Mock Registration Deadline",
      time: "Before 11:59 PM",
      location: "Academy Registration Portal"
    },
    {
      day: "11",
      month: "Jul",
      title: "Q&A Panel Discussion with previous year's 100-percentilers",
      time: "2:00 PM - 5:00 PM",
      location: "Main Seminar Hall & YouTube Live"
    }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={`container ${styles.mainGrid}`}>
        {/* Column 1: Featured Event */}
        <div className={styles.featuredEvent}>
          <h3 className={styles.columnTitle}>Featured Event</h3>
          <div 
            className={styles.featuredImg}
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop')` }}
          ></div>
          <h4 className={styles.featuredEventTitle}>
            Annual Success Seminar & Strategy Meetup 2026
          </h4>
          <p className={styles.featuredEventDesc}>
            Join us for a detailed walkthrough of target scores, college seat matrices, and preparation roadmap mappings for the upcoming season.
          </p>
          <button className={styles.viewBtn}>
            View Event
          </button>
        </div>

        {/* Column 2: Upcoming Events List */}
        <div>
          <h3 className={styles.columnTitle}>Upcoming Events</h3>
          <div className={styles.eventsList}>
            {events.map((event, idx) => (
              <div key={idx} className={styles.eventItem}>
                <div className={styles.dateBadge}>
                  <span className={styles.dateDay}>{event.day}</span>
                  <span className={styles.dateMonth}>{event.month}</span>
                </div>
                <div className={styles.eventDetails}>
                  <Link href="#">
                    <h4 className={styles.eventTitle}>{event.title}</h4>
                  </Link>
                  <span className={styles.eventMeta}>{event.time} | {event.location}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href="#" className={styles.viewAllEvents}>
            View All Events <ChevronRight size={14} />
          </Link>
        </div>

        {/* Column 3: Newsletter Signup Card */}
        <div className={styles.newsletterCard}>
          <div className={styles.newsletterHeader}>
            <Mail size={36} className={styles.mailIcon} />
            <h3 className={styles.newsletterTitle}>Subscribe to Newsletter</h3>
            <p className={styles.newsletterText}>
              Stay updated with the latest exam timetables, prep resources, mock updates, and admission notifications.
            </p>
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className={styles.inputField} 
              aria-label="Email address for newsletter"
            />
            <button className={styles.subscribeBtn}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
