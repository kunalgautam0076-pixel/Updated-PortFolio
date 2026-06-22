import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabData = {
    experience: [
      {
        role: 'Full-Stack Developer',
        company: 'TARS TECHNOLOGY PVT.KTD',
        duration: '2025 - 2026',
        description: 'Architecting high-scale React web applications. Collaborating with cross-functional product and design teams to deliver slick user interfaces, state management systems, and microservices.',
      },
      {
        role: 'Mern Stack Developer',
        company: 'DEALINTRA TECH PVT.LTD',
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
        degree: 'Bachelor of Technology in Computer Science & Engineering',
        institution: 'S.B Jain Institute Of Technology, Management & Research',
        duration: '2022 - 2026',
        description: 'Specialized in Software Engineering, Database Systems, and Web Technologies. Graduated with Honors and led the Web Development Club.',
      },
      {
        degree: '12th Grade - Science',
        institution: 'C.P & Berar Junior College',
        duration: '2022',
        description: '66 % with the Grade-A.',
      },
      {
        degree: '10th Grade',
        institution: 'AngelKids Convent',
        duration: '2020',
        description: '81% with the Grade-A.',
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
              Hello everyone I'm Kunal Gautam, a passionate full-stack developer who loves building modern, scalable and interactive web applications.
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
                <span className="detail-val">NAGPUR, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-val">kunalgautam0076@email.com</span>
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
