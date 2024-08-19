'use client';

import { useReadingProgress } from '@/hooks';

const PageReadingProgress = () => {
  const completion = useReadingProgress();

  return (
    <div
      style={{ transform: `translateX(${completion - 100}%)` }}
      className="absolute bottom-0 left-0 h-0.5 w-full bg-accent transition-transform duration-150"
    />
  );
};

export default PageReadingProgress;
