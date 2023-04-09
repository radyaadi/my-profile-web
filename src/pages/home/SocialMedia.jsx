import React from 'react';

const SocialMedia = ({ name, link, icon }) => {
  return (
    <a href={link} target="_blank" title={name} rel="noreferrer">
      <i className={icon}></i>
    </a>
  );
};

export default SocialMedia;
