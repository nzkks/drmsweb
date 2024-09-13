'use client';

import {
  ElementType,
  forwardRef,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { useLenis } from '@/lib/lenis';

type Props = {
  href?: string;
  fallback?: ElementType;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  children?: ReactNode;
  className?: string;
};

const Link = forwardRef(function Link(
  { href, fallback = 'div', onClick, ...props }: Props,
  ref,
) {
  const lenis = useLenis();
  const pathname = usePathname();

  if (!href || typeof href !== 'string') {
    const Tag = fallback;

    return <Tag ref={ref} onClick={onClick} {...props} href={href} />;
  }

  const isExternal = href.startsWith('http');

  if (isExternal) {
    props.target = '_blank';
    props.rel = 'noopener noreferrer';
  }

  const isAnchor = href.startsWith('#') || href.startsWith(`${pathname}#`);

  return (
    <NextLink
      ref={ref as RefObject<HTMLAnchorElement>}
      onClick={(e) => {
        if (isAnchor && lenis) {
          e.preventDefault();
          lenis.scrollTo(href);
        }
        onClick?.(e);
      }}
      {...props}
      href={href}
    />
  );
});

export default Link;
