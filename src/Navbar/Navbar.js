import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
