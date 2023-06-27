import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';
import SaleTwenty from '../../Sale/SaleTwenty/SaleTwenty';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection115.module.scss';

const Collection115 = ({ rounded }) => {
  const { i18n } = useTranslation();
  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>
      <div className={cls.homeCategory__wrapper}>
        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>
          <h3>
            Electronics
            <span></span>
          </h3>
          <div>
            <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
            <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
          </div>
        </div>
        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <Swiper
            slidesPerView={1}
            loop={false}
            spaceBetween={0}
            modules={[Navigation]}
            navigation={navigation}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className={cls.swiper}>
            {[...Array(7)].map((_, idx) =>
              <SwiperSlide key={idx}>
                <ProductFifty />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Collection115;