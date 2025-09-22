import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Timeless <span className="highlight">Elegance</span>
          </h1>
          <p className="hero-subtitle">
            Discover our exclusive collection of luxury watches crafted with precision and passion. 
            Each timepiece tells a story of excellence and sophistication.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">Shop Collection</button>
            <button className="btn btn-secondary">Watch Our Story</button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Premium Brands</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-watch">
          <div className="watch-display">
            <div className="watch-image">
              ⌚
            </div>
            <div className="watch-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
