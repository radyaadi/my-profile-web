import React from 'react';

const ServiceItem = ({ title, available, icon }) => {
  return (
    <div className={`service__item ${available ? '' : 'service__disabled'}`}>
      <i className={`${icon} service-icon`}></i>
      <h6 className="service__name">{title}</h6>
    </div>
  );
};

export default ServiceItem;
