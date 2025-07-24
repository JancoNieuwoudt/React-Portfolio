import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const technicalSkills = {
    programming: ['C#', 'Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    frameworks: ['React', 'Blazor', '.NET'],
    tools: ['GitHub', 'Visual Studio', 'VS Code', 'Office 365'],
    databases: ['SQL Server', 'PostgreSQL', 'MongoDB'],
    concepts: ['OOP', 'MVC', 'REST API', 'SOLID']
  };

  const softSkills = [
    'Problem-Solving', 'Communication skills', 'Adaptability & Innovation',
    'Teamwork', 'Leadership', 'Time Management'
  ];

  const achievements = [
    {
      title: 'Jukskei National Colors',
      description: 'Achieved National Colors 3 times, Provincial Colors 7 times',
      icon: '🏆'
    },
    {
      title: 'Provincial Coach & Arbiter',
      description: 'Qualified as Provincial Coach and Club-level Arbiter',
      icon: '👨‍🏫'
    },
    {
      title: 'Head Council Leadership',
      description: 'Served on Head Council of Hoërskool Jeugland in matric',
      icon: '👑'
    },
    {
      title: 'Academic Excellence',
      description: 'Passing with distinction - 78% average',
      icon: '🎓'
    }
  ];

  return (
    <div className="repositories-page">
      <div className="page-header">
        <div className="header-content">
          <h1>About Janco Nieuwoudt</h1>
          <p>Software Engineering Student | Passionate Developer | Future Innovator</p>
        </div>
      </div>

      <div className="repositories-container">
        {/* Navigation Tabs */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span>📋 Overview</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <span>💻 Technical Skills</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <span>🎓 Education</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <span>🏆 Achievements</span>
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-section">
              <div className="about-card">
                <h2>Professional Summary</h2>
                <p>
                  I’m a Software Engineering student at Belgium Campus iTversity, currently passing with distinction and actively pursuing internship or entry-level opportunities. I have hands-on experience with technologies like React, Blazor, C#, JavaScript, SQL, HTML, and CSS, and I’m currently applying core software engineering principles in a mentored industry project focused on design, development, and version control.
                </p>
                <p>
                  With a strong foundation in Mathematics, Physics, and CAT, I approach challenges with analytical thinking and a problem-solving mindset. My experience as a former head council member at Hoërskool Jeugland sharpened my leadership, communication, and organizational skills—traits I carry into every collaborative environment.
                </p>
                <p>
                  Outside of tech, I represent South Africa as a Springbok Jukskei player. Competing nationally has instilled in me discipline, resilience, and teamwork, all of which drive my commitment to building innovative, user-focused solutions in the software world.
                </p>
              </div>

              <div className="languages-card">
                <h2>Languages</h2>
                <div className="languages-list">
                  <div className="language-item">
                    <span className="language-name">English</span>
                    <div className="language-bar">
                      <div className="language-progress" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="language-item">
                    <span className="language-name">Afrikaans</span>
                    <div className="language-bar">
                      <div className="language-progress" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hobbies-card">
                <h2>Interests & Hobbies</h2>
                <div className="hobbies-grid">
                  <div className="hobby-item">🎯 Jukskei</div>
                  <div className="hobby-item">💪 Weightlifting</div>
                  <div className="hobby-item">🚗 Cars & Restoration</div>
                  <div className="hobby-item">🎮 Video Games</div>
                  <div className="hobby-item">📚 Continuous Learning</div>
                  <div className="hobby-item">🏗️ Building Projects</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skills-section">
              <div className="skills-category">
                <h3>Programming Languages</h3>
                <div className="skills-list">
                  {technicalSkills.programming.map(skill => (
                    <span key={skill} className="skill-badge programming">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h3>Frameworks & Libraries</h3>
                <div className="skills-list">
                  {technicalSkills.frameworks.map(skill => (
                    <span key={skill} className="skill-badge frameworks">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h3>Tools & Technologies</h3>
                <div className="skills-list">
                  {technicalSkills.tools.map(skill => (
                    <span key={skill} className="skill-badge tools">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h3>Databases</h3>
                <div className="skills-list">
                  {technicalSkills.databases.map(skill => (
                    <span key={skill} className="skill-badge databases">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h3>Concepts & Methodologies</h3>
                <div className="skills-list">
                  {technicalSkills.concepts.map(skill => (
                    <span key={skill} className="skill-badge concepts">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="soft-skills-section">
                <h3>Soft Skills</h3>
                <div className="soft-skills-grid">
                  {softSkills.map(skill => (
                    <div key={skill} className="soft-skill-item">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-section">
              <div className="education-item current">
                <div className="education-header">
                  <h3>Belgium Campus iTversity</h3>
                  <span className="education-period">2023 - Present</span>
                </div>
                <div className="education-details">
                  <p><strong>Bachelor of Computing, Software Engineering</strong></p>
                  <p>Passing with distinction - 78% average</p>
                  <div className="education-highlights">
                    <div className="highlight-item">📊 Strong academic performance</div>
                    <div className="highlight-item">👥 Team-based projects</div>
                    <div className="highlight-item">🏭 Industry-mentored development</div>
                    <div className="highlight-item">💡 Innovation-focused curriculum</div>
                  </div>
                </div>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h3>Hoërskool Jeugland</h3>
                  <span className="education-period">2018 - 2022</span>
                </div>
                <div className="education-details">
                  <p><strong>National Senior Certificate</strong></p>
                  <p>Passed with 4 distinctions</p>
                  <div className="education-highlights">
                    <div className="highlight-item">👑 Head Council Member</div>
                    <div className="highlight-item">🎯 Leadership Development</div>
                    <div className="highlight-item">📐 Strong STEM Foundation</div>
                    <div className="highlight-item">💻 CAT Excellence</div>
                  </div>
                </div>
              </div>

              <div className="current-learning">
                <h3>Currently Learning</h3>
                <div className="learning-items">
                  <div className="learning-item">
                    <span className="learning-icon">🤖</span>
                    <div>
                      <strong>AI & Machine Learning</strong>
                      <p>Computer vision, TensorFlow, OpenCV</p>
                    </div>
                  </div>
                  <div className="learning-item">
                    <span className="learning-icon">🌐</span>
                    <div>
                      <strong>Advanced Web Development</strong>
                      <p>Modern React patterns, state management</p>
                    </div>
                  </div>
                  <div className="learning-item">
                    <span className="learning-icon">📱</span>
                    <div>
                      <strong>IoT Development</strong>
                      <p>Raspberry Pi, sensor integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="achievements-section">
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                ))}
              </div>

              <div className="experience-section">
                <h3>Work Experience</h3>
                <div className="experience-item">
                  <div className="experience-header">
                    <h4>Software Development Trainee (Mentored Project)</h4>
                    <span className="experience-period">2025 - Present</span>
                  </div>
                  <div className="experience-description">
                    <p>
                      Collaborated with two alumni mentors, now industry professionals, to develop 
                      a software solution adhering to professional standards. This experience provided 
                      valuable insight into industry best practices, including software design, development, 
                      and version control, while enhancing my technical and problem-solving skills bridging 
                      academic knowledge with real-world applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;