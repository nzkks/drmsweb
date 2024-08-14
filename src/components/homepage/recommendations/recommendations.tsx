'use client';

import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import { Container, TestimonialBlock } from '@/components';
import recommendationsData from '@/data/recommendations.json';

const Recommendations = () => {
  return (
    <section className="py-16" id="recommendations">
      <Container>
        <h2 className="text-center text-xl">LinkedIn Recommendations</h2>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, Mousewheel]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 10000 }}
          navigation
          pagination={{ clickable: true }}
          mousewheel={{ enabled: true }}
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
      </Container>
    </section>
  );
};

export default Recommendations;
