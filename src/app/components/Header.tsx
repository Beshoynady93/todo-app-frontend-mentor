'use client';

import React, { useEffect, useState } from 'react';
import SwitchThemeBtn from './SwitchThemeBtn';
import { useThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { theme } = useThemeContext();

  const [background, setBackground] = useState('');

  useEffect(() => {
    theme === 'light' && window.innerWidth < 375
      ? setBackground('bg-header-mobile-light')
      : theme === 'dark' && window.innerWidth < 375
        ? setBackground('bg-header-mobile-dark')
        : theme === 'light' && window.innerWidth > 375
          ? setBackground('bg-header-desktop-light')
          : setBackground('bg-header-desktop-dark');
  }, [theme]);

  return (
    <header className={`${background} min-h-[10rem] px-4 py-8`}>
      <div className="mx-auto flex max-w-lg items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-[0.5rem] text-white">
          TODO
        </h1>
        <SwitchThemeBtn />
      </div>
    </header>
  );
};

export default Header;
