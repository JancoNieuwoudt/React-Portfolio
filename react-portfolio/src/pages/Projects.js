import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Belgium Campus Year Project',
      subtitle: 'AI Fatigue Detection System',
      description: 'Developed an AI-driven fatigue detection system for single-prop aircraft using computer vision and biosensors. Designed a 3D-printed case for cockpit integration and implemented IoT-based alerts for real-time safety monitoring.',
      longDescription: 'This comprehensive year project tackles aviation safety through innovative technology. The system uses advanced computer vision algorithms to detect pilot fatigue in real-time, potentially preventing accidents caused by human error. The solution includes custom hardware integration with a 3D-printed cockpit case and wireless alert systems.',
      technologies: ['OpenCV', 'TensorFlow', 'Raspberry Pi', 'Fusion 360', 'Python', '3D Printing'],
      status: 'In Progress',
      category: 'academic',
      startDate: '2025',
      image: '/images/ai-project.jpg',
      features: [
        'Real-time computer vision processing',
        'Biosensor integration for multi-modal detection',
        'Custom 3D-printed hardware case',
        'IoT-based alert system',
        'Safety-critical system design'
      ],
      challenges: [
        'Real-time processing constraints',
        'Hardware-software integration',
        'Safety-critical reliability requirements'
      ]
    },
    {
      id: 2,
      title: 'Jukskei Tournament Management System',
      subtitle: 'Blazor Web Application',
      description: 'Currently developing a Blazor-based web app to automate tournament creation, round-robin pairings, and real-time score tracking for Jukskei. Replaced manual Excel score sheets with a dynamic solution for players and organizers.',
      longDescription: 'A comprehensive tournament management system built with modern web technologies. This application streamlines the entire tournament process from registration to final results, eliminating the need for manual scoring and paperwork.',
      technologies: ['Blazor', 'C#', '.NET', 'Swagger', 'SQL Server', 'SignalR'],
      status: 'Active Development',
      category: 'personal',
      startDate: '2025',
      image: '/images/jukskei-app.jpg',
      features: [
        'Automated tournament bracket generation',
        'Real-time score updates',
        'Player registration and management',
        'Round-robin pairing algorithms',
        'Live leaderboards',
        'Mobile-responsive design'
      ],
      challenges: [
        'Complex tournament logic implementation',
        'Real-time data synchronization',
        'User experience optimization'
      ]
    },
    {
      id: 3,
      title: 'Mentored Development Project',
      subtitle: 'Professional Software Solution',
      description: 'Collaborated with two alumni mentors, now industry professionals, to develop a software solution adhering to professional standards. This experience provided valuable insight into industry best practices.',
      longDescription: 'A professional development experience working under the guidance of industry mentors. This project focuses on applying enterprise-level development practices, code quality standards, and professional workflows typically found in software companies.',
      technologies: ['Professional Standards', 'Version Control', 'Code Review', 'Agile', 'CI/CD'],
      status: 'Ongoing',
      category: 'professional',
      startDate: '2025',
      image: '/images/mentored-project.jpg',
      features: [
        'Industry-standard development practices',
        'Professional code review process',
        'Agile methodology implementation',
        'Version control best practices',
        'Documentation standards'
      ],
      challenges: [
        'Meeting professional quality standards',
        'Adapting to industry workflows',
        'Collaborative development practices'
      ]
    },
    {
      id: 4,
      title: 'React Portfolio Website',
      subtitle: 'Personal Portfolio & CV',
      description: 'A modern, responsive portfolio website built with React, mimicking GitHub\'s clean design aesthetic. Features dynamic content management and showcases projects, skills, and professional experience.',
      longDescription: 'This portfolio website serves as a comprehensive showcase of my skills and projects. Built with modern React practices, it demonstrates my frontend development capabilities while providing an engaging user experience.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design'],
      status: 'Completed',
      category: 'personal',
      startDate: '2025',
      image: '/images/portfolio-site.jpg',
      githubUrl: 'https://github.com/JancoNieuwoudt/react-portfolio',
      liveUrl: '#',
      features: [
        'GitHub-inspired design',
        'Responsive layout',
        'Dynamic project showcase',
        'Interactive UI components',
        'Professional presentation'
      ],
      challenges: [
        'Design system consistency',
        'Performance optimization',
        'Cross-browser compatibility'
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'academic', label: 'Academic', count: projects.filter(p => p.category === 'academic').length },
    { key: 'personal', label: 'Personal', count: projects.filter(p => p.category === 'personal').length },
    { key: 'professional', label: 'Professional', count: projects.filter(p => p.category === 'professional').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const [selectedProject, setSelectedProject] = useState(null);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'status-completed';
      case 'in progress': return 'status-progress';
      case 'active development': return 'status-active';
      case 'ongoing': return 'status-ongoing';
      default: return 'status-default';
    }
  };

  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="header-content">
          <h1>My Projects</h1>
          <p>A showcase of my development journey and technical skills</p>
        </div>
      </div>

      <div className="projects-container">
        {/* Filter Navigation */}
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`project-status ${getStatusClass(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h4 className="project-subtitle">{project.subtitle}</h4>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-more">+{project.technologies.length - 3} more</span>
                )}
              </div>

              <div className="project-footer">
                <span className="project-date">{project.startDate}</span>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <button className="modal-close" onClick={() => setSelectedProject(null)}>
                  ✕
                </button>
              </div>
              
              <div className="modal-content">
                <h3>{selectedProject.subtitle}</h3>
                
                <div className="modal-status-bar">
                  <span className={`status-badge ${getStatusClass(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className="modal-date">{selectedProject.startDate}</span>
                </div>

                <p className="modal-description">{selectedProject.longDescription}</p>

                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="modal-tech-grid">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Technical Challenges</h4>
                  <ul className="challenges-list">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                  <div className="modal-links">
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View on GitHub
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📁</div>
            <h3>No projects found</h3>
            <p>Try selecting a different category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;