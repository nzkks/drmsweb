'use client';

import { useState } from 'react';

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

const mainMenuItems = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <NavbarItem key={label}>
            <Link color="foreground" href={href}>
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {mainMenuItems.map(({ href, label }) => (
          <NavbarMenuItem key={label}>
            <Link className="w-full" href={href} size="lg">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
