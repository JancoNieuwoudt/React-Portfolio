import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  setFormStatus('Sending...');
  
  try {
    await emailjs.send(
      'PortfolioEmail',      
      'ContactMe',     
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'qdAA-WGNws5Xj4Nl-'      
    );
    
    setFormStatus('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    setFormStatus('Sorry, there was an error. Please try emailing me directly.');
  }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'janconieuwoudt.werk@gmail.com',
      description: 'Best for detailed inquiries and formal communication',
      link: 'mailto:janconieuwoudt.werk@gmail.com',
      primary: true
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/janco-nieuwoudt',
      description: 'Professional networking and career opportunities',
      link: 'https://linkedin.com/in/janco-nieuwoudt',
      external: true
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/JancoNieuwoudt',
      description: 'View my code and project repositories',
      link: 'https://github.com/JancoNieuwoudt',
      external: true
    }
  ];

  const opportunities = [
    {
      title: 'Internship Opportunities',
      description: 'Seeking internships in software development, web development, or related fields',
      icon: '🎯'
    },
    {
      title: 'Entry-Level Positions',
      description: 'Open to junior developer roles and graduate programs',
      icon: '🚀'
    },
    {
      title: 'Collaboration Projects',
      description: 'Interested in open-source contributions and collaborative development',
      icon: '🤝'
    },
    {
      title: 'Mentorship',
      description: 'Always eager to learn from experienced developers and industry professionals',
      icon: '📚'
    }
  ];

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Get In Touch</h1>
          <p>Let's connect and explore opportunities together</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info-section">
            <div className="contact-intro">
              <h2>Let's Connect</h2>
              <p>
                I'm actively seeking internship and entry-level opportunities in software development. 
                Whether you're a recruiter, fellow developer, or just want to chat about technology, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.link} 
                  className={`contact-method ${method.primary ? 'primary' : ''}`}
                  target={method.external ? '_blank' : '_self'}
                  rel={method.external ? 'noopener noreferrer' : ''}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-details">
                    <h3>{method.title}</h3>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                  {method.external && (
                    <div className="external-indicator">
                      <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Opportunities Section */}
            <div className="opportunities-section">
              <h2>What I'm Looking For</h2>
              <div className="opportunities-grid">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="opportunity-card">
                    <div className="opportunity-icon">{opportunity.icon}</div>
                    <h3>{opportunity.title}</h3>
                    <p>{opportunity.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="availability-section">
              <h2>Availability & Location</h2>
              <div className="availability-info">
                <div className="availability-item">
                  <span className="availability-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Gauteng, South Africa</p>
                    <small>Open to remote work and relocation opportunities</small>
                  </div>
                </div>
                <div className="availability-item">
                  <span className="availability-icon">🕒</span>
                  <div>
                    <h4>Availability</h4>
                    <p>2026 Internship</p>
                    <small>Currently completing final year of studies</small>
                  </div>
                </div>
                <div className="availability-item">
                  <span className="availability-icon">💼</span>
                  <div>
                    <h4>Work Preference</h4>
                    <p>Internship Opportunity</p>
                    <small>Flexible and eager to contribute</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <div className="form-container">
              <h2>Send a Message</h2>
              <p>Have a specific question or opportunity? Send me a message directly:</p>
              
              {formStatus && (
                <div className="form-status success">
                  {formStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="job">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell me about the opportunity or your message..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.5a.5.5 0 0 1-.708.395L8.5 7.5l-1.5 4.218a.5.5 0 0 1-.943-.064L4.5 8.5l-3.5-1.5a.5.5 0 0 1-.064-.943L8.5 4.5l.893-3.818a.5.5 0 0 1 .54-.11l6.921 2.5z"/>
                  </svg>
                </button>
              </form>

              <div className="form-note">
                <p>
                  <strong>Note:</strong> I typically respond to messages within 24-48 hours. 
                  For urgent matters, please feel free to call or connect on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;