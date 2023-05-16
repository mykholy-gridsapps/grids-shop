import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import cls from './brandsOne.module.scss'

const BrandsOne = ({border, slides}) => {
    return (

        <Swiper 
        style={{border: border}}
        className={cls.swiper}
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        breakpoints={{
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: slides,
                spaceBetween: 20,
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
            <SwiperSlide>
                <img src="./imgs/brands/brand6.png" alt="brand" width="140" height="60" />
            </SwiperSlide>
        </Swiper>
    )
}
export default BrandsOne;