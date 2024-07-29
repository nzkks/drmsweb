'use client';

import { useEffect, useState } from 'react';

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

const mainMenuItems = [
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">SK</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {mainMenuItems.map(({ href, label }) => (
          <NavbarItem key={label} isActive={activeSection === href}>
            <Link
              className={
                activeSection === href ? 'text-primary' : 'text-foreground'
              }
              href={href}
              onPress={() => setActiveSection(href)}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="flat"
            color="primary"
            className="text-primary"
          >
            Contact
          </Button>
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
              onPress={() => setActiveSection(href)}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
