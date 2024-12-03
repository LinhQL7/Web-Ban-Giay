import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>QL7 Shop</h2>
                    <p>
                        Welcome to QL7 Shop, your go-to place for the latest and greatest
                        in footwear fashion. We offer a wide range of styles for every occasion.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#faq">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: contact@ql7shop.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 Shoe Street, Fashion City</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} QL7 Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;