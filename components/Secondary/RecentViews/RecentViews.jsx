import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './recentViews.module.scss';

const RecentViews = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(8)];
  const breakpoints = {
    300: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  }

  return (
    <div className={cls.recentViews}>
      <div className={cls.head}>
        <h5>Your Recent Views</h5>
      </div>

      <div className={cls.products}>
        <Swiper
          slidesPerView={1}
          loop={false}
          spaceBetween={10}
          breakpoints={breakpoints}
          dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
          className={cls.swiper}
        >
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.product}>
                <img src="/imgs/shoes.png" alt="product" loading='lazy' />
                <span>Nike Shoes</span>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div >
  )
}

export default RecentViews;
