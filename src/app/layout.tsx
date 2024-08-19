import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import './globals.css';
import { Header, Providers, ToTopLinkWithProgress } from '@/components';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title:
    'Shanthosh Krishnakumar | Frontend Developer | React, Next.js, Animations | Auckland',
  description:
    'Discover innovative frontend development solutions with cutting-edge technologies. Specializing in responsive designs, intuitive user interfaces, and optimized performance.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative min-h-svh bg-background font-sans text-foreground antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <Header />
          {children}
          <ToTopLinkWithProgress size={50} strokeWidth={2} />
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
