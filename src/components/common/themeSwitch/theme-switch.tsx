'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { RxMoon as DarkModeIcon } from 'react-icons/rx';
import { RxSun as LightModeIcon } from 'react-icons/rx';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="theme mode"
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group"
    >
      {theme === 'dark' ? (
        <LightModeIcon size={16} className="group-hover:animate-spin" />
      ) : (
        <DarkModeIcon size={16} className="group-hover:animate-ping" />
      )}
    </Button>
  );
};

export default ThemeSwitch;
