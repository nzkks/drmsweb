'use client';

import { useState } from 'react';

import { HeaderMenu } from '@/types';
import SlideMenuItem from './slide-menu-item';
import Cursor from './cursor';

type SlideMenuProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
  menuItems: HeaderMenu[];
};

const SlideMenu = ({
  activeSection,
  setActiveSection,
  menuItems,
}: SlideMenuProps) => {
  const [position, setPosition] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      className="relative hidden w-fit items-center justify-center gap-4 p-1 sm:flex"
    >
      {menuItems.map(({ href, label }) => (
        <SlideMenuItem
          key={label}
          label={label}
          href={href}
          setPosition={setPosition}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      ))}

      <Cursor position={position} />
    </ul>
  );
};

export default SlideMenu;
