import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid" // Replace with actual image URL
          alt="Contact"
          className="contact-image"
        />
      </div>
      <div className="form-section">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <div className="input-field">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-field">
            <input type="email" placeholder="E-mail" required />
          </div>
          <div className="input-field">
            <textarea placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Contact Us</button>
        </form>
        <div className="contact-info">
          <p><strong>Contact</strong><br />hi@Project.com</p>
          <p><strong>Based in</strong><br />Andhra pradesh, 533101</p>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
