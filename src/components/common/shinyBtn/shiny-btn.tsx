'use client';

import { Button, Link } from '@nextui-org/react';

import { cn } from '@/lib/utils';
import { sendGTMEvent } from '@next/third-parties/google';

type Props = {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  isExternal?: boolean;
  downloadFileName?: string;
  width?: number;
  height?: number;
  colour?: string;
  className?: string;
  ariaLabel?: string;
  isIconOnly?: boolean;
  sectionForGA?: string;
  labelForGA?: string;
  children?: React.ReactNode;
};

const ShinyBtn = ({
  href,
  target = '_self',
  isExternal = false,
  width = 80,
  height = 40,
  className = '',
  ariaLabel = '',
  downloadFileName = '',
  isIconOnly = false,
  sectionForGA = '',
  labelForGA = '',
  children,
}: Props) => {
  return (
    <Button
      as={Link}
      href={href}
      target={target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ width: `${width}px`, height: `${height}px` }}
      download={downloadFileName ? downloadFileName : undefined}
      isIconOnly={isIconOnly}
      className={cn(
        `hover:-tranneutral-y-px flex h-full rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-2 text-center shadow-xl shadow-blue-200 transition-all hover:bg-gradient-to-b hover:shadow-2xl hover:shadow-blue-400 dark:shadow-blue-800 dark:hover:shadow-blue-700`,
        className,
      )}
      aria-label={ariaLabel}
      onPress={() =>
        sendGTMEvent({
          event: 'buttonClicked',
          value: { section: sectionForGA, name: labelForGA, link: href },
        })
      }
    >
      <div className={`text-md flex items-center uppercase text-white`}>
        {children}
      </div>
    </Button>
  );
};

export default ShinyBtn;
