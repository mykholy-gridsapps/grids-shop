import { useState } from 'react';

import ProductThree from "../../ProductCard/ProductThree/ProductThree"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collectionSixtyFour.module.scss';



const CollectionSixtyFour = ({ title, slides }) => {
  const navigation = {
  };
  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h2>{title}</h2>
      </div>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        navigation={navigation}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: slides,
            spaceBetween: 20,
          },
        }}
        className={cls.swiper}>
        <SwiperSlide>
          <ProductThree />
        </SwiperSlide>
        <SwiperSlide>
          <ProductThree />
        </SwiperSlide>
        <SwiperSlide>
          <ProductThree />
        </SwiperSlide>
        <SwiperSlide>
          <ProductThree />
        </SwiperSlide>
        <SwiperSlide>
          <ProductThree />
        </SwiperSlide>
        <SwiperSlide>
          <ProductThree />
        </SwiperSlide>
        <SwiperSlide>
          <ProductThree />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default CollectionSixtyFour;
