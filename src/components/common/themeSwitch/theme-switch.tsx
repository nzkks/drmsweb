'use client';

import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { RxMoon as DarkModeIcon } from 'react-icons/rx';
import { HiSun as LightModeIcon } from 'react-icons/hi';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="theme mode"
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group"
    >
      {loaded ? (
        theme === 'dark' ? (
          <span className="group-hover:animate-spin">
            <LightModeIcon size={24} />
          </span>
        ) : (
          <span className="group-hover:animate-ping">
            <DarkModeIcon size={20} />
          </span>
        )
      ) : (
        <span className="animate-pulse">...</span>
      )}
    </Button>
  );
};

export default ThemeSwitch;
