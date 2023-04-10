import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

import './navigation.css';

const Navigation = () => {
  const [nav, setNav] = useState(true);
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <nav className="nav container">
      <Link to={`/`} className="nav__logo" title="logo">
        <h1>RadyaAdi</h1>
      </Link>
      <div className={`nav__menu ${nav ? 'nav__hide' : ''}`}>
        <div className="nav__toggle" onClick={() => setNav(!nav)}>
          <i className={nav ? 'uil uil-angle-up' : 'uil uil-angle-down'}></i>
        </div>
        <ul className="nav__list">
          <li className="nav__item" title="home">
            <Link to={`/`} className="nav__link">
              <i className="uil uil-estate nav__icon"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav__item" title="about">
            <Link to={`/about`} className="nav__link">
              <i className="uil uil-user nav__icon"></i>
              <span>About</span>
            </Link>
          </li>
          <li className="nav__item" title="portfolio">
            <Link to={`/portfolio`} className="nav__link">
              <i className="uil uil-award nav__icon"></i>
              <span>Portfolio</span>
            </Link>
          </li>
          <li className="nav__item" title="contact">
            <Link to={`/contact`} className="nav__link">
              <i className="uil uil-envelope-alt nav__icon"></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="nav__feature"
        title="theme"
        onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <i className={theme === 'dark' ? 'uil uil-sun' : 'uil uil-moon'}></i>
      </div>
    </nav>
  );
};

export default Navigation;
