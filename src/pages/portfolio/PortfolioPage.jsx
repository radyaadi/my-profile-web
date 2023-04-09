import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllProject } from '../../data/project';

import PortfolioItem from './PortfolioItem';
import SearchBar from '../../components/searchbar/SearchBar';
import ItemNotFound from './ItemNotFound';

// import FilterList from '../../components/filter/FilterList';
// import { filterCategories } from '../../utils/filter-categories';
// import filterDragger from '../../utils/filter-dragger';

import './portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  // const [filter, setFilter] = useState({ type: 'all' });

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  // const onFilterHandler = (e) => {
  //   setFilter({ type: e.target.textContent });
  // };

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
    setProjects(getAllProject());
  };

  useEffect(() => {
    // if (filter.type === 'all') {
    //   setProjects(getAllProject());
    // } else {
    //   setProjects(getFilteredProject(filter.type));
    // }
    setProjects(getAllProject());
    // filterDragger();
  }, [projects]);

  const filteredProject = projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(keyword.toLowerCase()) ||
      project.category.toLowerCase().includes(keyword.toLowerCase())
    );
  });

  return (
    <section className="portfolio__section container">
      <div className="portfolio__title">
        <span>
          <h1 className="content__title">My Portfolio</h1>
        </span>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </div>
      {!filteredProject.length ? (
        <ItemNotFound />
      ) : (
        <div className="portfolio__contect container">
          {filteredProject.map((project) => (
            <PortfolioItem key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
