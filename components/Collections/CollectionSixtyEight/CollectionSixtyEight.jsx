import { useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import ProductFive from '../../ProductCard/ProductFive/ProductFive';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collectionSixtyEight.module.scss';


const CollectionSixtyEight = () => {
  const navigation = {
  };
  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h2> Featured Products</h2>
      </div>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        navigation={navigation}
        modules={[Navigation]}
        className={cls.swiper}>
        <SwiperSlide>
          <ProductFive />
        </SwiperSlide>
        <SwiperSlide>
          <ProductFive />
        </SwiperSlide>
        <SwiperSlide>
          <ProductFive />
        </SwiperSlide>
        <SwiperSlide>
          <ProductFive />
        </SwiperSlide>
        <SwiperSlide>
          <ProductFive />
        </SwiperSlide>
        <SwiperSlide>
          <ProductFive />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CollectionSixtyEight;
