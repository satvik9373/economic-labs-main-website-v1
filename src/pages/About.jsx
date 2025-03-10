import React from 'react';
import { Search, Bell, Sparkles } from 'lucide-react';
import '../styles/about.css';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-left">
              <img src="https://unstop.com/images/unstop-logo.svg" alt="Unstop" className="logo" />
              <div className="search-container">
                <div className="search-box">
                  <Search size={20} color="#9CA3AF" />
                  <input
                    type="text"
                    placeholder="Search Opportunities"
                    className="search-input"
                  />
                </div>
              </div>
            </div>

            <div className="nav-right">
              <nav className="nav-links">
                <a href="#" className="nav-link">Internships</a>
                <a href="#" className="nav-link">Jobs</a>
                <a href="#" className="nav-link">Competitions</a>
                <a href="#" className="nav-link">Mentorships</a>
                <a href="#" className="nav-link">Practice</a>
                <a href="#" className="nav-link">More</a>
              </nav>

              <button className="icon-button">
                <Bell size={20} color="#4B5563" />
              </button>
              <div className="avatar">
                <span>U</span>
              </div>
              <button className="host-button">
                Host
              </button>
              <button className="business-button">
                For Business
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main">
        <div className="main-container">
          <div className="content-grid">
            {/* Left side with image */}
            <div className="left-content">
              <div className="message-card">
                <Sparkles className="sparkle sparkle-top" size={32} />
                <Sparkles className="sparkle sparkle-bottom" size={32} />
                <h2 className="message-title">Unstop believes that you can</h2>
                <p className="hashtag">#BeUnstoppable</p>
              </div>
            </div>

            {/* Right side with content */}
            <div className="right-content">
              <h1>Unstop</h1>
              <p>
                derived from the belief to #BeUnstoppable, is a community engagement and hiring platform for students and freshers where talent meets opportunities.
              </p>
              
              <p>
                Founded by <span className="highlight">Ankit Aggarwal</span>, Unstop is a playground for this talent to learn, upskill, showcase their skills, gain CV points and get hired while unlocking their true potential throughout their academic journey. This enables them to eventually get hired by their dream employers and start their career journey. The platform connects students across domains in INDIA to a world of opportunities across the GLOBE. Unstop currently has a community of <span className="highlight">21 Million+</span> Students and Freshers.
              </p>

              <p>
                Unstop has been chosen by major brands such as Amazon, Flipkart, HUL, Reliance, Tata, Mahindra, Uber, Accenture, Infosys, EY, PwC, and many others for their early talent recruitment needs. These companies interact with students and early professionals at Unstop and leverage the platform's expertise to build their dream teams.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;