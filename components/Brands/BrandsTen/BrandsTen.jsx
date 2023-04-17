import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './brandsTen.module.scss';

const BrandsTen = () => {
  const array = [...Array(8)];
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }

  return (
    <div className={cls.brands}>
      <h4>Most Popular Brands</h4>
      <Swiper
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}
        className={cls.swiper}
      >
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.brand}>
              <img src="imgs/brand.jpg" alt="brand" loading='lazy' />
              <h6>Games</h6>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default BrandsTen
