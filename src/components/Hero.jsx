import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const titles = [
    'Full-Stack Developer',
    'Creative UI/UX Explorer',
    'Problem Solver',
    'Innovative Programmer'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeTitle = titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(activeTitle.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === activeTitle) {
          // Pause at full word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(activeTitle.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const handleScrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Info Column */}
        <div className="hero-info">
          <div className="badge-wrapper">
            <span className="hero-badge animate-pulse">Available for Projects</span>
          </div>
          <h1 className="hero-headline">
            Hi, I am <br />
            <span className="text-gradient">Kunal Gautam</span>
          </h1>
          <h2 className="hero-subheadline">
            I am a <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </h2>
          <p className="hero-description">
            Crafting elegant, high-performance, and beautiful web applications. Focused on user-centric designs, optimized clean code, and interactive visual aesthetics.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => handleScrollToSection('#projects')}
            >
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="btn-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => handleScrollToSection('#contact')}
            >
              <span>Let's Connect</span>
            </button>
          </div>
        </div>

        {/* Right Visual Column (Premium 3D Abstract Developer Card) */}
        <div className="hero-visual">
          <div className="visual-card-wrapper animate-float">
            <div className="visual-card-glass glass-card">
              <div className="card-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="window-title">raju_c.exe</span>
              </div>
              
              <div className="card-avatar-container">
                <div className="avatar-glowing-ring animate-morph"></div>
                <div className="avatar-content">
                  {/* Premium Abstract SVG Avatar */}
                  <svg viewBox="0 0 100 100" className="abstract-avatar">
                    <defs>
                      <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent-cyan)" />
                        <stop offset="50%" stopColor="var(--accent-purple)" />
                        <stop offset="100%" stopColor="var(--accent-pink)" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="40" r="22" fill="url(#avatar-grad)" opacity="0.9" />
                    <path d="M20,85 C20,68 30,58 50,58 C70,58 80,68 80,85" fill="url(#avatar-grad)" opacity="0.95" />
                  </svg>
                </div>
              </div>

              <div className="card-info">
                <h3>KUNAL GAUTAM</h3>
                <p>Full-Stack Developer</p>
                <div className="card-stats">
                  <div className="stat-item">
                    <span className="stat-val">3+</span>
                    <span className="stat-lbl">Years Exp.</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-val">25+</span>
                    <span className="stat-lbl">Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-val">99%</span>
                    <span className="stat-lbl">Success</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Decorative Orbits */}
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
