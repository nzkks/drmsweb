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
      <div className={`absolute left-1/2 top-0 -z-10 w-full -translate-x-1/2`}>
        <Image
          src={theme === 'light' ? sectionBgImg : sectionBgImgDark}
          alt="section background image"
          width={1572}
          height={795}
          priority
        />
      </div>
    )
  );
};

export default SectionBg;
