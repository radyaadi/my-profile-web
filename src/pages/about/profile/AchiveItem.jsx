import React from 'react';

const Achive = ({ name, desc, icon }) => {
  return (
    <div className="achive__box">
      <i className={icon}></i>
      <h6 className="about-profile__achive-title">{name}</h6>
      <span className="about-profile__achive-subtitle">{desc}</span>
    </div>
  );
};

export default Achive;
