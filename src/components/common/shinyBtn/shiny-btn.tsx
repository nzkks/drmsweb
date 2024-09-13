'use client';

import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { sendGTMEvent } from '@next/third-parties/google';

import { cn } from '@/lib/utils';

type Props = {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  isExternal?: boolean;
  downloadFileName?: string;
  colour?: string;
  className?: string;
  ariaLabel?: string;
  isIconOnly?: boolean;
  buttonIdForGA?: string;
  valueForGA?: string;
  children?: React.ReactNode;
};

const ShinyBtn = ({
  href,
  target = '_self',
  isExternal = false,
  className = '',
  ariaLabel = '',
  downloadFileName = '',
  isIconOnly = false,
  buttonIdForGA = '',
  valueForGA = '',
  children,
}: Props) => {
  return (
    <Button
      as={Link}
      href={href}
      target={target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      download={downloadFileName ? downloadFileName : undefined}
      isIconOnly={isIconOnly}
      className={cn(
        `hover:-tranneutral-y-px mx-auto h-full rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-2 text-center shadow-xl shadow-blue-200 transition-all hover:bg-gradient-to-b hover:shadow-2xl hover:shadow-blue-400 dark:shadow-blue-800 dark:hover:shadow-blue-700`,
        className,
      )}
      aria-label={ariaLabel}
      onPress={() => sendGTMEvent({ event: buttonIdForGA, value: valueForGA })}
    >
      <div className={`text-md flex items-center uppercase text-white`}>
        {children}
      </div>
    </Button>
  );
};

export default ShinyBtn;
