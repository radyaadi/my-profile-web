import React from 'react';

const ProjectTags = ({ tags, tagsPosition }) => {
  return (
    <div className={`detail__tags ${tagsPosition}`}>
      {tags?.map((tag) => (
        <span className="tag-item" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
