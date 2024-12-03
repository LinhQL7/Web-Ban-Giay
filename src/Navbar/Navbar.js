import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Đảo ngược trạng thái khi nhấn vào hamburger menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>QL7 Shop</h1>
      </div>
      {/* Kết hợp trạng thái để hiển thị menu khi nhấn */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      {/* Icon hamburger */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
