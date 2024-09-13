import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import './globals.css';
import {
  Analytics,
  Footer,
  Header,
  Lenis,
  Providers,
  ToTopLinkWithProgress,
} from '@/components';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const titleText =
  'Shanthosh Krishnakumar | Frontend Developer | React, Next.js, Animations | Auckland';
const descriptionText =
  'Discover innovative frontend development solutions with cutting-edge technologies. Specializing in responsive designs, intuitive user interfaces, and optimized performance.';

export const metadata: Metadata = {
  title: titleText,
  description: descriptionText,
  alternates: {
    canonical: 'https://drmsweb.com',
  },
  keywords: [
    'frontend',
    'developer',
    'website',
    'web',
    'auckland',
    'shanthosh',
    'krishnakumar',
    'reactjs',
    'nextjs',
    'development',
  ],
  creator: 'Shanthosh Krishnakumar',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://drmsweb.com',
    title: titleText,
    description: descriptionText,
    siteName: 'Shanthosh - Frontend Developer',
    // images: [
    //   {
    //     url: 'https://drmsweb.com/cover.png',
    //     width: 1200,
    //     height: 630,
    //     alt: titleText,
    //   },
    // ],
  },
  category: 'Web Development',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Analytics />
      <body
        className={cn(
          'relative min-h-svh font-sans text-foreground antialiased',
          fontSans.variable,
        )}
      >
        <Lenis root options={{ lerp: 0.125, duration: 1 }} />
        <div
          id="top"
          aria-hidden={true}
          className="absolute -z-50 size-full bg-background"
        ></div>
        <Providers>
          <Header />
          {children}
          <ToTopLinkWithProgress size={50} strokeWidth={2} />
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
