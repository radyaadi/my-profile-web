import React from 'react';
import SkillItem from './SkillItem';
import './skilltemp.css';

const Skill = () => {
  return (
    <div className="about__skill">
      <h1 className="about-skill__title">My Skills</h1>
      <div className="about-skill__content">
        <SkillItem></SkillItem>
      </div>
    </div>
  );
};

export default Skill;
