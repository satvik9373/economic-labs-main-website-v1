import React from 'react';
import { Search, Bell, Sparkles } from 'lucide-react';
import '../styles/about.css';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
     
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
                <p className="hashtag">#Consistency</p>
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