'use client';

import { useEffect, useRef, useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { PageReadingProgress, ThemeSwitch } from '@/components/common';

const mainMenuItems = [
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleMobileMenuPress = (href: string) => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSection(href);
  };

  return (
    <div className="sticky top-0 z-50">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        // shouldHideOnScroll
        maxWidth="xl"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/" onPress={() => setActiveSection('/')}>
              <div className="font-bold text-inherit">SK</div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <SlideMenu
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="#"
              variant="flat"
              className="bg-primary-900 uppercase text-primary-foreground hover:bg-accent hover:text-black"
            >
              Contact
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {mainMenuItems.map(({ href, label }) => (
            <NavbarMenuItem key={label} isActive={activeSection === href}>
              <Link
                className={clsx(
                  'w-full',
                  activeSection === href ? 'text-primary' : 'text-foreground',
                )}
                href={href}
                size="lg"
                onPress={() => handleMobileMenuPress(href)}
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <PageReadingProgress />
    </div>
  );
};

type SlideMenuProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const SlideMenu = ({ activeSection, setActiveSection }: SlideMenuProps) => {
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
      {mainMenuItems.map(({ href, label }) => (
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

type SlideMenuItemProps = {
  label: string;
  href: string;
  setPosition: (position: {
    width: number;
    left: number;
    opacity: number;
  }) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const SlideMenuItem = ({
  label,
  href,
  setPosition,
  activeSection,
  setActiveSection,
}: SlideMenuItemProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          left: ref.current.offsetLeft,
          opacity: 1,
        });
      }}
      className={clsx(
        'relative z-10 flex h-8 cursor-pointer items-center px-3 text-xs uppercase mix-blend-difference md:h-10 md:px-4 md:text-base',
        activeSection === href ? 'rounded-xl bg-accent' : 'bg-transparent',
      )}
    >
      <Link
        href={href}
        onPress={() => setActiveSection(href)}
        className={activeSection === href ? 'text-black' : 'text-heading'}
      >
        {label}
      </Link>
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { width: number; left: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-10 rounded-xl bg-accent"
    />
  );
};

export default Header;
