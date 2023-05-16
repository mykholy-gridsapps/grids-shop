import { useState } from 'react';

import ProductOne from "../../ProductCard/ProductOne/ProductOne"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';

import 'swiper/css';
import "swiper/css/pagination";
import cls from './collectionFiftyEight.module.scss';

SwiperCore.use([Pagination]);


const CollectionFiftyEight = () => {

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h2> Featured Products</h2>
      </div>
      <div className={`${cls.pagination} ${"swiper-pagination"}`}></div>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'bullet',
          bulletActiveClass: 'active'
        }}
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className={cls.swiper}>
        <SwiperSlide>
          <ProductOne />
        </SwiperSlide>
        <SwiperSlide>
          <ProductOne />
        </SwiperSlide>
        <SwiperSlide>
          <ProductOne />
        </SwiperSlide>
        <SwiperSlide>
          <ProductOne />
        </SwiperSlide>
        <SwiperSlide>
          <ProductOne />
        </SwiperSlide>
        <SwiperSlide>
          <ProductOne />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CollectionFiftyEight;
