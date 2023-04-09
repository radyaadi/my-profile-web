import React from 'react';

import './search-bar.css';

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className="search__bar">
      <input
        type="text"
        placeholder="Search title or category"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
