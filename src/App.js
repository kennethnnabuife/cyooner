import "./App.css";
import React, { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const SlideAtrandomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

  return (
    <div>
      <div className="header">
        <img
          src="https://res.cloudinary.com/dynmdbdfu/image/upload/v1697070770/cyoonerlogo_PNG_xpaz2h.png"
          alt="Cyooner"
        />

        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
          <div className={`line ${showMenu ? "active" : ""}`}></div>
        </div>
      </div>

      {showMenu && (
        <div className="menu-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}

      <div className="hero-div">
        <div className="overlay"></div>
        <div className="sub-hero">
          <div className="hero-main-text">
            We make quality furnitures and interiors that create a feel of
            elegance to your home and office!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
