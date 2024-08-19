'use client';

import { useEffect, useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import clsx from 'clsx';

import { PageReadingProgress, ShinyBtn, ThemeSwitch } from '@/components';
import SlideMenu from './slide-menu';

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
    <div id="top" className="sticky top-0 z-50">
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
          menuItems={mainMenuItems}
        />

        <NavbarContent justify="end">
          <NavbarItem>
            <ShinyBtn href="#cta">Hire me</ShinyBtn>
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

export default Header;
