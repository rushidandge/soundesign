import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">Sounde Design Masterclass</p>
          <h1>Learn the art of sound design</h1>
          <a href="#" className="demo-btn">
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
