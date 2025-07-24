import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Profile Section */}
        <div className="profile-section">
          {/* Profile Image */}
          <div className="profile-image-container">
            <img 
              src="/react-portfolio/images/me.jpg"
              alt="Profile"
              className="profile-image"
            />
            <button className="edit-profile-btn">
              View CV
            </button>
          </div>

          {/* Profile Info */}
          <div className="profile-info">
            {/* Main README Card */}
            <div className="profile-card">
              <div className="card-header">
                <h1>Janco Nieuwoudt</h1>
                <div className="profile-subtitle">Software Engineering Student</div>
              </div>
              
              <div className="profile-bio">
                <p>
                  Motivated and detail-oriented Software Engineering student passionate about clean code, 
                  real-world problem solving, and continuous growth. <strong>Evolving with every commit.</strong>
                </p>
              </div>

              <ul className="profile-details">
                <li>🎓 Bachelor of Computing in Software Engineering at Belgium Campus iTversity</li>
                <li>💻 Proficient in C#, JavaScript, React, SQL, and Blazor</li>
                <li>🏆 Maintaining a 78% average with distinction</li>
                <li>🎯 Currently seeking internship or entry-level opportunities</li>
                <li>📍 Based in Gauteng, South Africa</li>
                <li>📧 Contact: janconieuwoudt.werk@gmail.com</li>
              </ul>

              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Active Projects</span>
                </div>
              </div>
            </div>

            {/* Quick Skills Section */}
            <div className="skills-overview">
              <h2>Core Technologies</h2>
              <div className="skills-grid-home">
                <div className="skill-tag">
                  <span className="skill-dot csharp"></span>
                  <span>C#</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-dot blazor"></span>
                  <span>Blazor</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-dot react"></span>
                  <span>React</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-dot javascript"></span>
                  <span>JavaScript</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-dot python"></span>
                  <span>Python</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-dot java"></span>
                  <span>Java</span>
                </div>         
                <div className="skill-tag">
                  <span className="skill-dot sql"></span>
                  <span>SQL</span>
                </div>     
              </div>
            </div>

            {/* Featured Projects */}
            <div className="repositories-section">
              <div className="section-header">
                <h2>Featured Projects</h2>
                <Link to="/projects" className="customize-link">View all projects</Link>
              </div>

              <div className="repositories-grid">
                <div className="repo-card">
                  <h3>AI Fatigue Detection System</h3>
                  <p>AI-driven fatigue detection for single-prop aircraft using computer vision and biosensors</p>
                  <div className="repo-tech">
                    <span className="tech-tag">OpenCV</span>
                    <span className="tech-tag">TensorFlow</span>
                    <span className="tech-tag">Raspberry Pi</span>
                    <span className="tech-tag">Python</span>
                  </div>
                  <span className="repo-status">In Progress</span>
                </div>

                <div className="repo-card">
                  <h3>Jukskei Tournament System</h3>
                  <p>Blazor-based web app automating tournament creation and real-time score tracking</p>
                  <div className="repo-tech">
                    <span className="tech-tag">Blazor</span>
                    <span className="tech-tag">C#</span>
                    <span className="tech-tag">.NET</span>
                  </div>
                  <span className="repo-status">In Progress</span>
                </div>

                <div className="repo-card">
                  <h3>Mentored Development Project</h3>
                  <p>Professional software solution developed under industry mentor guidance</p>
                  <div className="repo-tech">
                    <span className="tech-tag">Professional Standards</span>
                    <span className="tech-tag">Version Control</span>
                  </div>
                  <span className="repo-status">Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;