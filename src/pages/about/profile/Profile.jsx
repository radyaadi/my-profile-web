import React from 'react';
import AboutImage from '../../../assets/about.jpg';
import Achive from './AchiveItem';

import './profile.css';

const Profile = ({ achives }) => {
  return (
    <div className="about__profile">
      <div className="about-profile__image">
        <img src={AboutImage} alt="" />
      </div>
      <div className="about-profile__info">
        <h1 className="about-profile__title content__title">About Me</h1>
        <p className="about-profile__desc">
          I am a Undergraduate Informatic Student who interest on Front End Web
          Development and Data Science especially Machine Learning Development.
          I'm a honest, disciplined, and hardworking man. I'm able to work
          individually and also by groups.
        </p>
        <div className="about-profile__achive">
          {achives.map((achive) => (
            <Achive key={achive.name} {...achive} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
