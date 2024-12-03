// src/components/Contact.js
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kiểm tra dữ liệu form trước khi gửi
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus("Please fill in all fields.");
            return;
        }

        // Giả lập gửi form (có thể thay bằng API gọi thật)
        setFormStatus("Thank you for contacting us! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">
                    Send Message
                </button>
                {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
        </div>
    );
};

export default Contact;
