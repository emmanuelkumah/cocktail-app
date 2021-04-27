import React from "react";
import heroImage from "./heroImage.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="home-hero-section">
      <div className="container">
        <div className="row home-hero-row">
          <div className="col">
            <div className="home-hero-heading-wrapper">
              <div className="main-heading">
                <h2>Chill your glasses ahead of time</h2>
              </div>
              <p className="sub-heading">
                Search for the perfect mix of spirit, fruit juice and or
                flavored syrup for your next indoor chill-out
              </p>
              <Link to="/cocktail-list">
                <button className="btn-cta">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="home-hero-img-wrapper">
              <img src={heroImage} alt="cocktail" className="home-hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
