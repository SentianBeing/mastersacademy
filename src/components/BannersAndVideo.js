"use client";

import React from 'react';
import { GraduationCap, Play } from 'lucide-react';
import styles from './BannersAndVideo.module.css';

export default function BannersAndVideo() {
  return (
    <div>
      {/* Green Banner */}
      <section className={styles.greenBanner}>
        <div className={`container ${styles.bannerContainer}`}>
          <div className={styles.bannerLeft}>
            <GraduationCap size={40} className={styles.bannerIcon} />
            <p className={styles.bannerText}>
              The Coalition for Next Generation preparation matches student skills with the modern academic curriculum.
            </p>
          </div>
          <button className={styles.bannerBtn}>
            Apply to Academy
          </button>
        </div>
      </section>

      {/* Video Tour Section */}
      <section 
        className={styles.videoSection}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop')` }}
      >
        <div className={styles.videoOverlay}></div>
        <div className={styles.videoContent}>
          <div className={styles.playButtonWrapper}>
            <div className={styles.playBtn}>
              <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
            </div>
          </div>
          <h2 className={styles.videoTitle}>Video Tour in Masters Entrance Academy</h2>
          <p className={styles.videoSubtitle}>
            Take a look at our state-of-the-art campus, digital libraries, and collaborative classrooms where our students prep and learn.
          </p>
        </div>
      </section>
    </div>
  );
}
