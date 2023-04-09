import React from 'react';

const SkillItem = () => {
  return (
    <>
      <div className="skill-content">
        <h3 className="skill-content__title">Front-End Web</h3>
        <div className="skill-content__box">
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">HTML</h3>
              <span className="skill__level">Advanced</span>
            </div>
          </div>
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">CSS</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">Javascript</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">React</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">Git</h3>
              <span className="skill__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-content">
        <h3 className="skill-content__title">Back-End Web</h3>
        <div className="skill-content__box">
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">Javascript</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">Python</h3>
              <span className="skill__level">Beginner</span>
            </div>
          </div>
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">Node Js</h3>
              <span className="skill__level">Beginner</span>
            </div>
          </div>
          <div className="skill__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skill__name">SQL</h3>
              <span className="skill__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
