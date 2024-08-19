'use client';

import dynamic from 'next/dynamic';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';

import { MoonIcon } from '@/components';
const SunIconComponent = dynamic(
  () => import('@/components/imageComponents/sunIcon'),
  { ssr: false },
);

const themeVariants = [
  {
    key: 'system',
    label: 'System',
  },
  {
    key: 'light',
    label: 'Light',
  },
  {
    key: 'dark',
    label: 'Dark',
  },
];

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light" aria-label="theme mode">
          <span className="hidden dark:inline-block">
            <MoonIcon isActive={theme === 'dark'} />
          </span>
          <span className="dark:hidden">
            <SunIconComponent isActive={theme === 'light'} />
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu items={themeVariants}>
        {(item) => (
          <DropdownItem
            key={item.key}
            onPress={() => setTheme(item.key)}
            color="default"
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeSwitch;
