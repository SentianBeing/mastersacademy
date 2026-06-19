"use client";

import React, { useState } from 'react';
import styles from './CourseSearchForm.module.css';

export default function CourseSearchForm() {
  const [formData, setFormData] = useState({
    keyword: '',
    courseId: '',
    level: 'postgraduate',
    department: 'all',
    session: 'fall-2026',
    duration: '6-months'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching courses with keywords: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <section 
      className={styles.sectionWrapper}
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop')` }}
    >
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.formCard}>
          <h3 className={styles.title}>Search for Courses</h3>
          
          <form onSubmit={handleSearch}>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label htmlFor="keyword">Keyword</label>
                <input 
                  type="text" 
                  id="keyword" 
                  name="keyword" 
                  placeholder="e.g. Mathematics" 
                  className={styles.inputControl}
                  value={formData.keyword}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="courseId">Course ID</label>
                <input 
                  type="text" 
                  id="courseId" 
                  name="courseId" 
                  placeholder="e.g. ME-102" 
                  className={styles.inputControl}
                  value={formData.courseId}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="level">Course Level</label>
                <select 
                  id="level" 
                  name="level" 
                  className={styles.inputControl}
                  value={formData.level}
                  onChange={handleChange}
                >
                  <option value="postgraduate">Postgraduate (Master's)</option>
                  <option value="doctorate">Doctorate (Ph.D.)</option>
                  <option value="integrated">Integrated Master's</option>
                  <option value="diploma">Post Graduate Diploma</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label htmlFor="department">Department</label>
                <select 
                  id="department" 
                  name="department" 
                  className={styles.inputControl}
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="all">All Departments</option>
                  <option value="science">Sciences (Physics, Math, Chemistry)</option>
                  <option value="engineering">Engineering & Technology</option>
                  <option value="business">Management & MBA</option>
                  <option value="humanities">Arts & Humanities</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label htmlFor="session">Intake Session</label>
                <select 
                  id="session" 
                  name="session" 
                  className={styles.inputControl}
                  value={formData.session}
                  onChange={handleChange}
                >
                  <option value="fall-2026">Fall 2026</option>
                  <option value="spring-2027">Spring 2027</option>
                  <option value="summer-2027">Summer 2027</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label htmlFor="duration">Duration</label>
                <select 
                  id="duration" 
                  name="duration" 
                  className={styles.inputControl}
                  value={formData.duration}
                  onChange={handleChange}
                >
                  <option value="6-months">6 Months (Crash Batch)</option>
                  <option value="12-months">12 Months (Full Prep)</option>
                  <option value="2-years">24 Months (Foundation)</option>
                </select>
              </div>
            </div>

            <button type="submit" className={styles.searchBtn}>
              Search Course
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
