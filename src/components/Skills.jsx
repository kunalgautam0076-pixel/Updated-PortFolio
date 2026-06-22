import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Core',
      skills: [
        { name: 'React / Next.js', level: 90, color: 'var(--accent-cyan)' },
        { name: 'JavaScript / ES6+', level: 85, color: 'var(--accent-purple)' },
        { name: 'HTML5 / CSS3 / Sass', level: 95, color: 'var(--accent-pink)' },
        { name: 'Redux / Context API', level: 80, color: 'var(--accent-cyan)' }
      ]
    },
    {
      category: 'Backend & Databases',
      skills: [
        { name: 'Node.js / Express', level: 85, color: 'var(--accent-purple)' },
        { name: 'MongoDB / Mongoose', level: 80, color: 'var(--accent-cyan)' },
        { name: 'SQL / PostgreSQL', level: 75, color: 'var(--accent-pink)' },
        { name: 'GraphQL / REST APIs', level: 80, color: 'var(--accent-purple)' }
      ]
    },
    {
      category: 'Tools & Cloud',
      skills: [
        { name: 'Git & GitHub Workflow', level: 90, color: 'var(--accent-pink)' },
        { name: 'Docker / Containers', level: 70, color: 'var(--accent-purple)' },
        { name: 'AWS Services (S3, EC2)', level: 75, color: 'var(--accent-cyan)' },
        { name: 'Figma (UI/UX Design)', level: 80, color: 'var(--accent-pink)' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span>My Expertise</span> Technical Skills
        </h2>

        <div className="skills-grid">
          {skillsData.map((categoryCard, idx) => (
            <div key={idx} className="skills-card glass-card">
              <h3 className="category-title">{categoryCard.category}</h3>
              
              <div className="skills-list">
                {categoryCard.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-fill" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: skill.color,
                          boxShadow: `0 0 10px ${skill.color}50`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
