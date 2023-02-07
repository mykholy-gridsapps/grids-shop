import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import cls from './brandsOne.module.scss'

const BrandsOne = () => {
    return (

            <Swiper slidesPerView={6} loop={true} spaceBetween={60}>
                <SwiperSlide>
                    <img src="./imgs/brands/brand1.png" alt="brand" width="140" height="60" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./imgs/brands/brand2.png" alt="brand" width="140" height="60" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./imgs/brands/brand3.png" alt="brand" width="140" height="60" />
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