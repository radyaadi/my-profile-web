import React from 'react';

const FilterList = ({ keywordHandler, filterCategories, filterHandler }) => {
  return (
    <div class="portfolio__filter container">
      <div class="arrows__icon">
        <i id="left" class="bx bx-chevron-left"></i>
      </div>
      <ul class="filter-box">
        {filterCategories.map((filterItem, index) => (
          <li
            onClick={(e) => {
              filterHandler(e);
              keywordHandler('');
            }}
            key={index}
            class="filter-item"
          >
            {filterItem.type}
          </li>
        ))}
      </ul>
      <div class="arrows__icon">
        <i id="right" class="bx bx-chevron-right"></i>
      </div>
    </div>
  );
};

export default FilterList;
