import React, { useState } from 'react';
import './App.css';
import ambedkarImage from './assets/DRambedkar.png';

function App() {
  const [ripples, setRipples] = useState([]);

  const handleScreenTap = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : window.innerWidth / 2);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : window.innerHeight / 2);
    
    const newRipple = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY
    };

    setRipples((prev) => [...prev, newRipple]);

    // Cleanup ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 750);
  };

  return (
    <div className="kiosk-container" onClick={handleScreenTap}onTouchStart={handleScreenTap}>
      {/* Background aesthetics */}
      <div className="background-grid" />
      <div className="background-glow" />

      {/* Render touch/click ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="touch-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`
          }}
        />
      ))}

      {/* Main Split View: Left & Right Halves */}
      <main className="main-split-container">
        {/* Left Half: Title in Scribble Font */}
        <section className="left-half">
          <div className="welcome-line-1 scribble-font">
            Welcome to
          </div>
          <div className="welcome-line-2 scribble-font">
            Dr. B. R. Ambedkar E-Virasat
          </div>
          <div className="left-subtitle scribble-font">
            Interactive Educational Kiosk
          </div>
        </section>

        {/* Right Half: Portrait, Name, Subtitle, Years */}
        <section className="right-half">
          <div className="portrait-container">
            <div className="portrait-aura" />
            <div className="portrait-frame">
              <img
                src={ambedkarImage}
                alt="Dr. B. R. Ambedkar reading a book"
                className="portrait-image"
              />
            </div>
            
            <div className="portrait-details">
              <h1 className="portrait-name">
                Dr. B. R. Ambedkar
              </h1>
              <h2 className="portrait-subtitle">
                Father of Indian Constitution
              </h2>
              <div className="portrait-dates">
                1891 – 1956
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Exact Lower Middle Section */}
      <footer className="bottom-prompt-section">
        <div className="prompt-pill">
          <svg
            className="prompt-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M2 12h20" />
          </svg>
          <span className="prompt-text-content">
            Press anywhere to continue
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
