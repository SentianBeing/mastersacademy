"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper} id="contact">
      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1: Brand Info */}
        <div className={styles.brandCol}>
          <div className={styles.logoArea}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://res.cloudinary.com/der2xk0cv/image/upload/v1781812163/Masters_Logo_wrin94.png" 
              alt="Master's Entrance Academy Logo" 
              className={styles.logoImage} 
            />
          </div>

          <p className={styles.brandDesc}>
            Master's Entrance Academy is committed to shaping the future of students through quality education, expert mentorship, and result-oriented coaching.
          </p>

          <div className={styles.socialsRow} id="socials">
            <a href="https://www.facebook.com/mastersentranceacademy/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mastersentrance/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://wa.me/919447141102" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
              {/* WhatsApp custom SVG path */}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.18 1.45 4.8 1.45 5.58 0 10.12-4.51 10.12-10.05 0-2.69-1.05-5.21-2.95-7.1-1.9-1.9-4.43-2.95-7.13-2.95-5.58 0-10.12 4.52-10.12 10.06 0 2 .53 3.57 1.53 5.16l-.99 3.63 3.74-.97z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Courses Links */}
        <div className={styles.linksCol}>
          <h3 className={styles.colHeading}>Courses</h3>
          <ul className={styles.linksList}>
            <li><Link href="/neet">NEET Coaching</Link></li>
            <li><Link href="/jee">JEE Coaching</Link></li>
            <li><Link href="/keam">KEAM Coaching</Link></li>
            <li><Link href="#school">School Tuitions (5th - 12th)</Link></li>
            <li><Link href="#microbatch">Microbatch Programs</Link></li>
            <li><Link href="#one-to-one">One-to-One Mentoring</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className={styles.linksCol}>
          <h3 className={styles.colHeading}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><Link href="#courses">Courses</Link></li>
            <li><Link href="#enquire">Admissions</Link></li>
            <li><Link href="#events">Events</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
            <li><Link href="#socials">Connect with Us</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className={styles.contactCol}>
          <h3 className={styles.colHeading}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <MapPin size={18} className={styles.contactIcon} />
              <div>
                <strong>Pattom Branch:</strong><br />
                Opp: LIC, Pattom, Trivandrum-04
              </div>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={18} className={styles.contactIcon} />
              <div>
                <strong>Neyyattinkara Branch:</strong><br />
                Logos Pastoral Centre, Vlangamuri, Poovar / Amaravila Rd., Neyyattinkara, Trivandrum
              </div>
            </li>
            <li className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <div>
                <a href="tel:9447141102" className={styles.contactLink}>9447141102</a>,{' '}
                <a href="tel:8281784102" className={styles.contactLink}>8281784102</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <a href="mailto:mastersacademypattom@gmail.com" className={styles.contactLink}>
                mastersacademypattom@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Map Embed */}
        <div className={styles.mapCol}>
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7646559807113!2d76.94090440000001!3d8.522215400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbe081540bdd%3A0x1db9bc0273a48502!2sMasters%20Entrance%20Academy%20-%20NEET%2C%20JEE%20%26%20KEAM!5e0!3m2!1sen!2sin!4v1781813259344!5m2!1sen!2sin" 
              width="100%" 
              height="180" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>
            &copy; 2026 Masters Entrance Academy. All rights reserved.
          </p>
          <div className={styles.policyLinks}>
            <Link href="#privacy">Privacy Policy</Link>
            <span className={styles.divider}>|</span>
            <Link href="#terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Floating Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/919447141102" 
        className={styles.whatsappFloat}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.18 1.45 4.8 1.45 5.58 0 10.12-4.51 10.12-10.05 0-2.69-1.05-5.21-2.95-7.1-1.9-1.9-4.43-2.95-7.13-2.95-5.58 0-10.12 4.52-10.12 10.06 0 2 .53 3.57 1.53 5.16l-.99 3.63 3.74-.97z" />
        </svg>
      </a>
    </footer>
  );
}
