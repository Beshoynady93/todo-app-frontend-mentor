'use client';

import Image from 'next/image';
import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

const SwitchThemeBtn = () => {
  const { theme, setTheme } = useThemeContext();

  if (theme === 'light')
    return (
      <button onClick={() => setTheme('dark')}>
        <Image
          src="images/icon-moon.svg"
          alt=""
          width="26"
          height="26"
          color="white"
        />
      </button>
    );
  return (
    <button onClick={() => setTheme('light')}>
      <Image
        src="images/icon-sun.svg"
        alt=""
        width="26"
        height="26"
        color="white"
      />
    </button>
  );
};

export default SwitchThemeBtn;
