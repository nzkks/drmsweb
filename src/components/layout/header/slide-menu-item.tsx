import { useRef } from 'react';
import clsx from 'clsx';
import { sendGTMEvent } from '@next/third-parties/google';

import useScrollSpy from '@/hooks/useScrollSpy';
import { Link } from '@/components';
import { cn } from '@/lib/utils';

const sectionIds = [
  'skills',
  'experience',
  'certifications',
  'recommendations',
  'about',
];

type SlideMenuItemProps = {
  label: string;
  href: string;
  setPosition: (position: {
    width: number;
    left: number;
    opacity: number;
  }) => void;
  setActiveSection: (section: string) => void;
};

const SlideMenuItem = ({
  label,
  href,
  setPosition,
  setActiveSection,
}: SlideMenuItemProps) => {
  const scrolledSectionId = useScrollSpy(sectionIds, 500);
  const ref = useRef<HTMLLIElement>(null);

  const handleMenuItemClick = (href: string, label: string) => {
    sendGTMEvent({
      event: 'Header-Menu-Item-Button-Clicked',
      value: label,
    });
    setActiveSection(href);
  };

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
        'group relative z-10 cursor-pointer transition-all',
        `#${scrolledSectionId}` === href
          ? 'rounded-md bg-accent'
          : 'bg-transparent',
      )}
    >
      <Link
        href={href}
        onClick={() => handleMenuItemClick(href, label)}
        className={cn(
          'text-md flex h-8 items-center px-3 uppercase transition-all md:h-10 md:px-4',
          `#${scrolledSectionId}` === href
            ? 'text-white dark:text-black'
            : 'text-heading group-hover:text-white group-hover:dark:text-black',
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default SlideMenuItem;
