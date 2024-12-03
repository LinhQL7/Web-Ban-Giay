// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-header">
                <h1>About Us</h1>
                <p>Welcome to QL7 Shop, where comfort meets style.</p>
            </div>
            <div className="about-content">
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        QL7 Shop was founded with the vision of providing high-quality,
                        stylish, and affordable footwear for everyone. We believe that the
                        right pair of shoes can make all the difference in your day.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to offer a wide variety of shoes for all occasions,
                        ensuring that every customer finds something they love. Whether
                        you're looking for casual shoes, sportswear, or formal shoes, we have
                        the perfect pair for you.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>High-Quality Materials</li>
                        <li>Affordable Prices</li>
                        <li>Free Shipping on Orders Over $50</li>
                        <li>Easy Returns</li>
                        <li>Customer Satisfaction Guaranteed</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
