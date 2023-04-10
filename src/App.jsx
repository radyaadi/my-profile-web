import React, { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/home/HomePage';
import About from './pages/about/AboutPage';
import Portfolio from './pages/portfolio/PortfolioPage';
import PortfolioDetail from './pages/portfolio/detail/PortfolioDetail';
import Contact from './pages/contact/ContactPage';
import Navigation from './components/navigation/Navigation';

const NoteApp = () => {
  const [theme, changeTheme] = useTheme();

  const themeContextValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  useEffect(() => {
    if (localStorage.theme) {
      changeTheme(localStorage.theme);
    } else {
      localStorage.setItem('theme', 'dark');
      changeTheme('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider value={themeContextValue}>
      <header className="header">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default NoteApp;
