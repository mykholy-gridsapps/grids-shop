import Link from 'next/link';
import React from 'react';

import ProductSeventeen from '../../../ProductCard/ProductSeventeen/ProductSeventeen';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './recommend.module.scss';

const Categories = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(3)];
  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 1,
    },
  }

  return (
    <div className={cls.recommend}>
      <h4>Recommend</h4>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={5}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <ProductSeventeen />
            <ProductSeventeen />
            <ProductSeventeen />
            <ProductSeventeen />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default Categories
