import { useRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { sendGTMEvent } from '@next/third-parties/google';

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

  const handleMenuItemClick = (href: string, label: string) => {
    sendGTMEvent({
      event: 'buttonClicked',
      value: { section: 'Header menu', name: label, link: href },
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
        'text-md group relative z-10 flex h-8 cursor-pointer items-center px-3 uppercase transition-all md:h-10 md:px-4',
        activeSection === href ? 'rounded-xl bg-accent' : 'bg-transparent',
      )}
    >
      <Link
        href={href}
        onClick={() => handleMenuItemClick(href, label)}
        className={
          activeSection === href
            ? 'text-white dark:text-black'
            : 'text-heading transition-all group-hover:text-white group-hover:dark:text-black'
        }
      >
        {label}
      </Link>
    </li>
  );
};

export default SlideMenuItem;
