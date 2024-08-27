'use client';

import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { ThemeProvider } from '@/components';

const Providers = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
