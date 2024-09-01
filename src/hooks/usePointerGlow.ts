'use client';
import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

type StatusProps = {
  x: string;
  y: string;
  xp: string;
  yp: string;
};

export const usePointerGlow = () => {
  const { width } = useWindowSize();
  const [status, setStatus] = useState<StatusProps | null>();

  useEffect(() => {
    function syncPointer({
      x: pointerX,
      y: pointerY,
    }: {
      x: number;
      y: number;
    }): void {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--xp', xp);
      document.documentElement.style.setProperty('--y', y);
      document.documentElement.style.setProperty('--yp', yp);
      setStatus({ x, y, xp, yp });
    }

    if (width > 768) {
      document.body.addEventListener('pointermove', syncPointer);
    }
    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, [width]);

  return [status];
};
