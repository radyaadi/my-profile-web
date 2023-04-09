import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = (value) => {
    setTheme(value);
    const root = window.document.documentElement;
    root.setAttribute('data-theme', value);
    localStorage.setItem('theme', value);
  };
  return [theme, changeTheme];
};

export default useTheme;
