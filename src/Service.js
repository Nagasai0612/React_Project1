import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const About = () => {
  return (
    <div className="app-container">

      <div className="image-container">
        <img
          src="https://assets.servicemela.com/public/cover-images/thumbnail-design7573b0ea-7412-4c34-938c-793f20d44fff.jpg"
          alt="Sample"
          className="background-image"
        />
        <div className="text-overlay">
          <h2>Services</h2>

        </div>
      </div>
      <br></br>
      <div className='btn'>
        <Link className='button' to="/contact">Contact Us</Link>
      </div>


      <div className="services-section">
        <ServiceCard
          icon="🤖"
          title="Web Development"
          description="Our developers design professional websites that allow businesses to present their offerings to their customers in a comprehensive way."
        />
        <ServiceCard
          icon="📱"
          title="Mobile App"
          description="If you are looking for a mobile application for android and iOS, come a step forward and connect with us. We design and develop creative applications."
        />
        <ServiceCard
          icon="📞"
          title="IVR Calling"
          description="IVR services help to call management solution that initiates communication with customers. Our design allows you to personalize the service to the customers."
        />
      </div>
    </div>

  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>

  );
};

export default About;