import React from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioItem = ({ id, name, category, imgUrl }) => {
  const navigate = useNavigate();

  const onProjectDetailHandler = () => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <div className="project__card" onClick={onProjectDetailHandler}>
      <img src={imgUrl} className="project__image" alt={name} />
      <div className="project__title">
        <h3 className="project__name">{name}</h3>
        <small className="project__category">{category}</small>
      </div>
    </div>
  );
};

export default PortfolioItem;
