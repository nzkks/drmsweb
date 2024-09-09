'use client';

import Link from 'next/link';
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { SiLinkedin } from 'react-icons/si';

import { TestimonialBlock } from '@/components';
import recommendationsData from '@/data/recommendations.json';
import { useWindowSize } from '@/hooks';

const Recommendations = () => {
  const { width } = useWindowSize();

  return (
    <>
      <h2 className="text-center text-xl">
        <Link
          href="https://www.linkedin.com/in/shanthoshk/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <span className="group-hover:text-accent">
            LinkedIn Recommendations
          </span>{' '}
          <SiLinkedin
            className="inline-block size-6 group-hover:scale-125"
            aria-hidden={true}
          />
        </Link>
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, Mousewheel]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 10000 }}
        navigation
        pagination={{ clickable: true }}
        mousewheel={{ enabled: width > 768 }}
      >
        {recommendationsData.map((item) => (
          <SwiperSlide key={item.name}>
            <TestimonialBlock
              imageFileName={item.imageFileName}
              name={item.name}
              about={item.about}
              content={item.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Recommendations;
