import React from 'react';
import ServiceItem from './ServiceItem';

import './service.css';

const Service = ({ services }) => {
  return (
    <div className="about__service">
      <div className="about-service__info">
        <h1 className="about-service__title content__title">My Services</h1>
        <p className="about-service__desc">
          For now, focusing on studying about web development, especially as a
          Front-End Web Developer. As an Front-End Web Developer (begginner
          level), I recently learning about React Js. I created several landing
          pages web using React Js. I also use React Js for creating this
          portfolio web. I also used to had an interest in machine learning and
          learned about artificial intelligence and made several projects
          before.
        </p>
      </div>
      <div className="about-service__content">
        {services.map((service) => (
          <ServiceItem key={service.name} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
