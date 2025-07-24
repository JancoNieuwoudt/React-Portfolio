import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      icon: '💻',
      description: 'Languages I use to build software solutions',
      skills: [
        {
          name: 'C#',
          level: 80,
          experience: '2+ years',
          description: 'Primary language for .NET development, desktop applications, and backend services',
          projects: ['Jukskei Tournament System', 'Desktop Applications'],
          certifications: [],
          color: '#9b59b6'
        },
        {
          name: 'JavaScript',
          level: 75,
          experience: '2+ years',
          description: 'Frontend and full-stack web development, React applications',
          projects: ['React Portfolio', 'Web Applications'],
          certifications: [],
          color: '#f1c40f'
        },
        {
          name: 'Python',
          level: 70,
          experience: '1+ years',
          description: 'Data analysis, machine learning, and automation scripts',
          projects: ['AI Fatigue Detection System'],
          certifications: [],
          color: '#3776ab'
        },
        {
          name: 'Java',
          level: 60,
          experience: '1+ years',
          description: 'Object-oriented programming and academic projects',
          projects: ['University Assignments'],
          certifications: [],
          color: '#ed8b00'
        },
        {
          name: 'SQL',
          level: 80,
          experience: '2+ years',
          description: 'Database design, queries, and data management',
          projects: ['Tournament Management', 'Data Analysis'],
          certifications: [],
          color: '#e67e22'
        }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: '🛠️',
      description: 'Tools and frameworks that accelerate my development',
      skills: [
        {
          name: 'React',
          level: 70,
          experience: '1+ years',
          description: 'Modern frontend development with hooks and component architecture',
          projects: ['Portfolio Website', 'Web Applications'],
          certifications: [],
          color: '#61dafb'
        },
        {
          name: 'Blazor',
          level: 75,
          experience: '1+ years',
          description: 'Full-stack web development with C# and .NET',
          projects: ['Jukskei Tournament System'],
          certifications: [],
          color: '#512bd4'
        },
        {
          name: '.NET',
          level: 85,
          experience: '2+ years',
          description: 'Cross-platform development framework',
          projects: ['Various Desktop and Web Applications'],
          certifications: [],
          color: '#512bd4'
        },
        {
          name: 'TensorFlow',
          level: 50,
          experience: '2 months',
          description: 'Machine learning and AI model development',
          projects: ['AI Fatigue Detection System'],
          certifications: [],
          color: '#ff6f00'
        },
        {
          name: 'OpenCV',
          level: 50,
          experience: '2 months',
          description: 'Computer vision and image processing',
          projects: ['AI Fatigue Detection System'],
          certifications: [],
          color: '#5aa1c8'
        }
      ]
    },
    tools: {
      title: 'Development Tools',
      icon: '⚙️',
      description: 'Tools that enhance my development workflow',
      skills: [
        {
          name: 'Visual Studio',
          level: 90,
          experience: '2+ years',
          description: 'Primary IDE for .NET and C# development',
          projects: ['All C# Projects'],
          certifications: [],
          color: '#5c2d91'
        },
        {
          name: 'VS Code',
          level: 85,
          experience: '2+ years',
          description: 'Lightweight editor for web development and scripting',
          projects: ['Web Development', 'Python Scripts'],
          certifications: [],
          color: '#007acc'
        },
        {
          name: 'GitHub',
          level: 80,
          experience: '2+ years',
          description: 'Version control, collaboration, and project management',
          projects: ['All Projects'],
          certifications: [],
          color: '#333'
        },
        {
          name: 'Fusion 360',
          level: 20,
          experience: '1+ years',
          description: '3D modeling and design for hardware projects',
          projects: ['AI Fatigue Detection Case Design'],
          certifications: [],
          color: '#ff6600'
        },
        {
          name: 'Office 365',
          level: 85,
          experience: '5+ years',
          description: 'Documentation, presentations, and productivity',
          projects: ['Project Documentation', 'Academic Work'],
          certifications: [],
          color: '#d83b01'
        }
      ]
    },
    databases: {
      title: 'Database Technologies',
      icon: '🗄️',
      description: 'Data storage and management solutions',
      skills: [
        {
          name: 'SQL Server',
          level: 80,
          experience: '2+ years',
          description: 'Relational database design and administration',
          projects: ['Tournament Management System'],
          certifications: [],
          color: '#cc2927'
        },
        {
          name: 'PostgreSQL',
          level: 70,
          experience: '1+ years',
          description: 'Open-source relational database',
          projects: ['Web Applications'],
          certifications: [],
          color: '#336791'
        },
        {
          name: 'MongoDB',
          level: 65,
          experience: '6 months',
          description: 'NoSQL document database',
          projects: ['Learning Projects'],
          certifications: [],
          color: '#47a248'
        }
      ]
    },
    concepts: {
      title: 'Programming Concepts',
      icon: '🧠',
      description: 'Core programming principles and methodologies',
      skills: [
        {
          name: 'Object-Oriented Programming',
          level: 85,
          experience: '2+ years',
          description: 'Design patterns, inheritance, polymorphism, encapsulation',
          projects: ['All Major Projects'],
          certifications: [],
          color: '#2ecc71'
        },
        {
          name: 'MVC Architecture',
          level: 80,
          experience: '1+ years',
          description: 'Model-View-Controller design pattern',
          projects: ['Web Applications'],
          certifications: [],
          color: '#3498db'
        },
        {
          name: 'REST API',
          level: 75,
          experience: '1+ years',
          description: 'RESTful web service design and implementation',
          projects: ['Backend Services'],
          certifications: [],
          color: '#e74c3c'
        },
        {
          name: 'SOLID Principles',
          level: 70,
          experience: '1+ years',
          description: 'Clean code architecture and design principles',
          projects: ['Professional Development'],
          certifications: [],
          color: '#9b59b6'
        },
        {
          name: 'Agile Development',
          level: 75,
          experience: '1+ years',
          description: 'Iterative development and collaboration methodologies',
          projects: ['Mentored Project', 'Team Projects'],
          certifications: [],
          color: '#f39c12'
        }
      ]
    }
  };

  const learningPath = [
    {
      phase: 'Foundation',
      period: '2023 - Early 2024',
      status: 'completed',
      skills: ['C# Basics', 'OOP Fundamentals', 'SQL Basics', 'HTML/CSS'],
      description: 'Built strong programming fundamentals'
    },
    {
      phase: 'Web Development',
      period: '2024 to Present',
      status: 'completed',
      skills: ['JavaScript', 'React', 'Blazor', 'REST APIs'],
      description: 'Expanded into full-stack web development'
    },
    {
      phase: 'Advanced Topics',
      period: '2025 - Present',
      status: 'active',
      skills: ['AI/ML', 'Computer Vision', 'IoT', 'Advanced Architecture'],
      description: 'Currently exploring cutting-edge technologies'
    },
    {
      phase: 'Professional Development',
      period: '2025 - Future',
      status: 'planned',
      skills: ['Cloud Platforms', 'DevOps', 'Microservices', 'System Design'],
      description: 'Preparing for industry readiness'
    }
  ];

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    if (level >= 60) return 'Developing';
    return 'Beginner';
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'active': return 'status-active';
      case 'planned': return 'status-planned';
      default: return 'status-default';
    }
  };

  return (
    <div className="skills-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Technical Skills & Expertise</h1>
          <p>A comprehensive overview of my technical capabilities and learning journey</p>
        </div>
      </div>

      <div className="skills-container">
        {/* Category Navigation */}
        <div className="skills-navigation">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`skills-nav-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="nav-icon">{category.icon}</span>
              <span className="nav-text">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="skills-content">
          <div className="category-header">
            <h2>{skillCategories[activeCategory].title}</h2>
            <p>{skillCategories[activeCategory].description}</p>
          </div>

          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                  <div className="skill-level-badge" style={{backgroundColor: skill.color}}>
                    {getSkillLevelText(skill.level)}
                  </div>
                </div>

                <div className="skill-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${skill.level}%`, backgroundColor: skill.color}}
                    ></div>
                  </div>
                  <span className="progress-text">{skill.level}%</span>
                </div>

                <p className="skill-description">{skill.description}</p>

                {skill.projects.length > 0 && (
                  <div className="skill-projects">
                    <h4>Used In:</h4>
                    <div className="project-tags">
                      {skill.projects.map((project, i) => (
                        <span key={i} className="project-tag">{project}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path Section */}
        <div className="learning-path-section">
          <div className="section-header">
            <h2>Learning Journey</h2>
            <p>My progression through different phases of technical development</p>
          </div>

          <div className="learning-timeline">
            {learningPath.map((phase, index) => (
              <div key={index} className={`timeline-item ${getStatusClass(phase.status)}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="phase-header">
                    <h3>{phase.phase}</h3>
                    <span className="phase-period">{phase.period}</span>
                    <span className={`phase-status ${getStatusClass(phase.status)}`}>
                      {phase.status}
                    </span>
                  </div>
                  <p className="phase-description">{phase.description}</p>
                  <div className="phase-skills">
                    {phase.skills.map((skill, i) => (
                      <span key={i} className="phase-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="skills-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Active Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Specializations</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="skills-cta">
          <div className="cta-content">
            <h2>Ready to Apply These Skills</h2>
            <p>
              I'm constantly learning and expanding my technical expertise. 
              Let's discuss how these skills can contribute to your next project.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">
                Get In Touch
              </a>
              <a href="/projects" className="cta-btn secondary">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;