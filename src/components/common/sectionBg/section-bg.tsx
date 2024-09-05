'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import sectionBgImg from '../../../../public/images/bg-images/section-bg.svg';
import sectionBgImgDark from '../../../../public/images/bg-images/section-bg--dark.svg';

const SectionBg = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <Image
        src={theme === 'light' ? sectionBgImg : sectionBgImgDark}
        alt="section background image"
        width={1572}
        height={795}
        className={`absolute top-0 z-0`}
        priority
      />
    )
  );
};

export default SectionBg;
