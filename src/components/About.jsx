import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabData = {
    experience: [
      {
        role: 'Senior Full-Stack Developer',
        company: 'Apex Tech Solutions',
        duration: '2024 - Present',
        description: 'Architecting high-scale React web applications. Collaborating with cross-functional product and design teams to deliver slick user interfaces, state management systems, and microservices.',
      },
      {
        role: 'Software Engineer',
        company: 'PixelPerfect Web Studio',
        duration: '2022 - 2024',
        description: 'Built responsive web platforms using React, Node.js, and advanced CSS frameworks. Optimized client side assets reducing load-times by 40% and improved search ranking metrics.',
      },
      {
        role: 'Junior Frontend Developer',
        company: 'CodeCraft Labs',
        duration: '2021 - 2022',
        description: 'Developed semantic user interfaces and reusable React components. Learned best practices in testing, state management, and modern CSS methodologies.',
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'National Institute of Technology',
        duration: '2017 - 2021',
        description: 'Specialized in Software Engineering, Database Systems, and Web Technologies. Graduated with Honors and led the Web Development Club.',
      },
      {
        degree: 'Full-Stack Software Development Bootcamp',
        institution: 'Tech Academy Global',
        duration: '2021',
        description: 'Immersive 6-month specialized program focusing on MERN stack, cloud deployments, system design, and algorithmic problem-solving.',
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services (AWS)',
        year: '2025',
        description: 'Validates expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
      },
      {
        name: 'Advanced React & Web Architecture',
        issuer: 'Frontend Masters',
        year: '2024',
        description: 'Deep dive into advanced rendering patterns, state management, performance profiling, and rendering optimization.',
      },
      {
        name: 'UI/UX Design Masterclass',
        issuer: 'Interaction Design Foundation',
        year: '2023',
        description: 'Mastery in design systems, accessibility guidelines (WCAG), user testing, prototyping, and layout principles.',
      }
    ]
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span>Get To Know Me</span> About Me
        </h2>

        <div className="about-grid">
          {/* Left Narrative Column */}
          <div className="about-narrative glass-card">
            <h3 className="narrative-heading">
              Creating Digital Magic Through <br />
              <span className="text-gradient">Design & Code</span>
            </h3>
            <p className="narrative-text">
              I am a passionate software developer dedicated to crafting digital products that are not only functional but visually captivating. I bridge the gap between high-performance backends and delightful frontend experiences.
            </p>
            <p className="narrative-text">
              My design philosophy is rooted in clean grids, glassmorphism aesthetics, fluid motion, and micro-interactions. I believe a website is an digital ecosystem that should feel alive, responsive, and intuitive.
            </p>
            <p className="narrative-text">
              When I'm not coding, I experiment with generative canvas art, contribute to open-source developer toolkits, or read up on advanced UI layouts and design systems.
            </p>

            <div className="personal-details">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-val">Mumbai, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-val">raju.chawale@email.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Freelance</span>
                <span className="detail-val text-glow-green">Available</span>
              </div>
            </div>
          </div>

          {/* Right Tabs Column */}
          <div className="about-tabs-container">
            {/* Tabs Header */}
            <div className="tabs-header glass-card">
              {['experience', 'education', 'certifications'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tabs Content */}
            <div className="tabs-content glass-card">
              <div className="timeline">
                {tabData[activeTab].map((item, idx) => (
                  <div key={idx} className="timeline-item animate-fade-in">
                    <div className="timeline-dot"></div>
                    <span className="timeline-duration">{item.duration || item.year}</span>
                    <h4 className="timeline-title">
                      {item.role || item.degree || item.name}
                    </h4>
                    <h5 className="timeline-subtitle">
                      {item.company || item.institution || item.issuer}
                    </h5>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
