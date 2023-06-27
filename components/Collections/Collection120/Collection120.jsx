import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collection120.module.scss';

const Collection118 = () => {
  const { i18n } = useTranslation('common');
  const array = [...Array(12)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    }
  }

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h4>
          Televison Entertainment
          <span></span>
        </h4>
        <div>
          <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-angle-${i18n.language === 'ar' ? 'right' : 'left'}`}></i></button>
          <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-angle-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={navigation}
        loop={false}
        spaceBetween={0}
        breakpoints={breakpoints}
        className={cls.swiper}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <ProductFifty />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default Collection118;