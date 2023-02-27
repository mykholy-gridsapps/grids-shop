import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import cls from './brandsOne.module.scss'

const BrandsOne = () => {
    return (

        <Swiper
        slidesPerView={3}
        loop={false}
        spaceBetween={20}
        breakpoints={{
            575: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 60,
            },
        }}>
            <SwiperSlide>
                <img src="./imgs/brands/brand1.png" alt="brand" width="140" height="60" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./imgs/brands/brand2.png" alt="brand" width="140" height="60" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./imgs/brands/brand1.png" alt="brand" width="140" height="60" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./imgs/brands/brand4.png" alt="brand" width="140" height="60" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./imgs/brands/brand5.png" alt="brand" width="140" height="60" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./imgs/brands/brand6.png" alt="brand" width="140" height="60" />
            </SwiperSlide>
        </Swiper>
    )
}
export default BrandsOne;