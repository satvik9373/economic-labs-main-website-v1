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
                <h2 className="message-title">Economic labs</h2>
                <p className="hashtag">#BeUnstoppable</p>
              </div>
            </div>

            {/* Right side with content */}
            <div className="right-content">
              <h1>Economics Labs</h1>
              <p>
              Economic Labs is a dynamic platform designed to bridge the gap between academia and industry by empowering students, colleges, and companies. Founded with a vision to create a future-ready workforce, we focus on providing students with opportunities to up skill, gain real-world experience, and connect with industry professionals globally.
              </p>
              
             

              <p>
We believe in fostering a collaborative ecosystem where students can learn, showcase their talents, and secure paid internships, while colleges and companies benefit from fresh, innovative talent. Our mission is to transform the traditional education-to-employment pathway by making it more practical, engaging, and accessible for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;