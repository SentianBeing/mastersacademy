"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      {/* Top White Strip */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topLeft}>
            <div className={styles.topItem}>
              <Phone size={13} className={styles.topIcon} />
              <a href="tel:9447141102" className={styles.topLink}>9447141102</a>
              <span className={styles.topSeparator}>/</span>
              <a href="tel:8281784102" className={styles.topLink}>8281784102</a>
            </div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.topItem}>
              <Mail size={13} className={styles.topIcon} />
              <a href="mailto:mastersacademypattom@gmail.com" className={styles.topLink}>mastersacademypattom@gmail.com</a>
            </div>
            <span className={styles.topDivider}>|</span>
            <div className={styles.topItem}>
              <MapPin size={13} className={styles.topIcon} />
              <span className={styles.topText}>Trivandrum</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation (Maroon Strip) */}
      <div className={styles.mainNav}>
        <div className={`container ${styles.navContainer}`}>
          {/* Logo Area */}
          <Link href="/" className={styles.logoArea}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://res.cloudinary.com/der2xk0cv/image/upload/v1781812163/Masters_Logo_wrin94.png" 
              alt="Master's Entrance Academy Logo" 
              className={styles.logoImage} 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={`${styles.navLink} ${styles.activeLink}`}>
                  Home
                </Link>
              </li>
              <li className={styles.hasDropdown}>
                <Link href="#courses" className={styles.navLink}>
                  Courses <ChevronDown size={14} className={styles.chevron} />
                </Link>
                <div className={styles.dropdownMenu}>
                  <Link href="/neet">NEET Coaching</Link>
                  <Link href="/jee">JEE Coaching</Link>
                  <Link href="/keam">KEAM Coaching</Link>
                </div>
              </li>
              <li className={styles.hasDropdown}>
                <Link href="#courses" className={styles.navLink}>
                  Programs <ChevronDown size={14} className={styles.chevron} />
                </Link>
                <div className={styles.dropdownMenu}>
                  <Link href="#foundation">Foundation Programs (5th-10th)</Link>
                  <Link href="#integrated">Integrated Programs (11th-12th)</Link>
                  <Link href="#microbatch">Microbatch Programs</Link>
                  <Link href="#one-to-one">One-to-One Mentoring</Link>
                </div>
              </li>
              <li>
                <Link href="/about" className={styles.navLink}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="#offers" className={styles.navLink}>
                  Offers
                </Link>
              </li>
              <li>
                <Link href="#contact" className={styles.navLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sign In Button */}
          <div className={styles.rightCta}>
            <Link href="#contact" className={styles.signInBtn}>
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <ul className={styles.mobileNavList}>
          <li>
            <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#courses" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Courses
            </Link>
          </li>
          <li>
            <Link href="#courses" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Programs
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              About us
            </Link>
          </li>
          <li>
            <Link href="#offers" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Offers
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className={styles.mobileCtaItem}>
            <Link href="#contact" className={styles.mobileSignInBtn} onClick={() => setMobileMenuOpen(false)}>
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
