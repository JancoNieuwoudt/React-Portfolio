import React from 'react';
import { Card } from '../components/card';
import '../styles/main.css';

const Home = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Mon', 'Wed', 'Fri'];
  
    return (
      <div className="home-container">
        <div className="home-content">
          {/* Profile Section */}
          <div className="profile-section">
            {/* Profile Image */}
            <div className="profile-image-container">
              <img 
                src="/api/placeholder/260/260"
                alt="Profile"
                className="profile-image"
              />
              <button className="edit-profile-btn">
                Edit profile
              </button>
            </div>
  
            {/* Profile Info */}
            <div className="profile-info">
              <Card className="profile-card">
                <div className="card-header">
                  <h1>README.md</h1>
                  <button className="edit-btn">
                    ✏️
                  </button>
                </div>
                
                <ul className="profile-details">
                  <li>👋 Hi, I'm @JancoNieuwoudt</li>
                  <li>👀 I'm interested in Software Engineering</li>
                  <li>📚 I'm currently learning C# and JavaScript</li>
                  <li>💞 I'm looking to collaborate on</li>
                  <li>📫 Reach me at: janconieuwoudt.werk@gmail.com</li>
                  <li>⚡ Fun fact...</li>
                </ul>
              </Card>
  
              {/* Repositories Section */}
              <div className="repositories-section">
                <div className="section-header">
                  <h2>Popular repositories</h2>
                  <a href="#" className="customize-link">Customize your pins</a>
                </div>
  
                <div className="repositories-grid">
                  <Card className="repo-card">
                    <h3>JancoNieuwoudt</h3>
                    <p>Config files for my GitHub profile</p>
                    <span className="repo-status">Public</span>
                  </Card>
  
                  <Card className="repo-card">
                    <h3>TestingForge</h3>
                    <p>C#</p>
                    <span className="repo-status">Public</span>
                  </Card>
                </div>
              </div>
  
              {/* Contribution Graph */}
              <div className="contribution-section">
                <div className="section-header">
                  <h2>127 contributions in the last year</h2>
                  <button className="year-selector">
                    2025 ▼
                  </button>
                </div>
  
                <Card className="contribution-card">
                  <div className="months-grid">
                    {months.map(month => (
                      <div key={month} className="month-label">{month}</div>
                    ))}
                  </div>
                  <div className="contributions-grid">
                    {[...Array(91)].map((_, i) => (
                      <div key={i} className="contribution-cell"></div>
                    ))}
                  </div>
                  <div className="contribution-legend">
                    <span>Less</span>
                    <div className="legend-scale">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="legend-cell"></div>
                      ))}
                    </div>
                    <span>More</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home;
