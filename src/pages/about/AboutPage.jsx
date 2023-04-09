import React, { useState, useEffect } from 'react';
import { getAllAchive } from '../../data/achive';
import { getAllService } from '../../data/service';

import Profile from './profile/Profile';
// import Skill from './skill/Skill';
import Service from './service/Service';

import './about.css';

const About = () => {
  const [achives, setAchives] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setAchives(getAllAchive());
    setServices(getAllService());
  }, []);

  return (
    <section className="about__section container">
      <Profile achives={achives}></Profile>
      {/* <Skill></Skill> */}
      <Service services={services}></Service>
    </section>
  );
};

export default About;
