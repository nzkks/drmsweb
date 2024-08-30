'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import sectionBgImg from '../../../../public/images/bg-images/section-bg.svg';
import sectionBgImgDark from '../../../../public/images/bg-images/section-bg--dark.svg';

type Props = {
  top?: string;
};

const SectionBg = ({ top = '0px' }: Props) => {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  let imageUrl = sectionBgImgDark;
  if (theme === 'light') {
    imageUrl = sectionBgImg;
  }

  return isLoaded ? (
    <Image
      src={imageUrl}
      alt="section background image"
      width={1572}
      height={795}
      className={`absolute top-[${top}] -z-10`}
      priority
    />
  ) : (
    <div className={`absolute top-${top}] -z-10 h-[795px] w-[1572px]`}></div>
  );
};

export default SectionBg;
