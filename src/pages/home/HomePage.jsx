import React, { useState, useEffect } from 'react';
import { getAllSosmed } from '../../data/sosmed';

import SocialMedia from './SocialMedia';
import './home.css';

const Home = () => {
  const [sosmeds, setSosmeds] = useState([]);

  useEffect(() => {
    setSosmeds(getAllSosmed());
  }, []);

  return (
    <section className="home__section container">
      <div className="home__content">
        <div className="home__image"></div>
        <div className="home__info">
          <div className="home-info__title">
            <h3>Hi everyone!</h3>
            <h1>
              I am <span>Radya Adi Anggara</span>
            </h1>
            <p>Junior Front End Web Developer || Junior Web Developer</p>
          </div>
          <div className="home-info__social-media">
            {sosmeds.map((sosmed) => (
              <SocialMedia key={sosmed.name} {...sosmed} />
            ))}
          </div>
          <div className="home-info__contact">
            <a href={`mailto:adiradya140@gmail.com`} title="about">
              <i className="uil uil-message"></i>
              <span> Say Hello</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
