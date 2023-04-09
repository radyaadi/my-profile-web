import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getProject } from '../../../data/project';
import { showFormattedDate } from '../../../utils/date-formatter';

import ProjectTags from './ProjectTags';

import './detail.css';

const PortfolioDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState([]);

  const onDetailCloseHandler = () => {
    navigate('/portfolio');
  };

  useEffect(() => {
    setProject(getProject(id));
  }, [id]);

  const {
    name,
    createdAt,
    category,
    description,
    siteUrl,
    repoUrl,
    imgUrl,
    tags,
  } = project;

  return (
    <div className="project__detail">
      <div className="detail__box">
        <div
          className="btn__close"
          onClick={onDetailCloseHandler}
          title="Close Page"
        >
          <i className="uil uil-times"></i>
        </div>

        <div className="detail__header">
          <img className="detail__image" src={imgUrl} alt={name} />

          <ProjectTags tags={tags} tagsPosition={'x-tags'}></ProjectTags>
        </div>
        <div className="detail__content">
          <h1 className="detail__name">{name}</h1>
          <div className="detail__subtitile">
            <h5>
              <i className="bx bx-category"></i> {category}
            </h5>
            <h5>
              <i className="bx bx-calendar"></i> {showFormattedDate(createdAt)}
            </h5>
          </div>
          <p className="detail__description">{description}</p>
          <ProjectTags tags={tags} tagsPosition={'y-tags'}></ProjectTags>
          <div className="btn__group">
            <a
              href={siteUrl}
              className="btn-site"
              target="_blank"
              title={name}
              rel="noreferrer"
            >
              View Site
            </a>
            <a
              href={repoUrl}
              className="btn-repo"
              target="_blank"
              title={name}
              rel="noreferrer"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
