import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import cls from './brandsSix.module.scss'

const BrandsSix = () => {
    return (
        <div className={cls.brands}>
            <h2>Shop By Brand</h2>
            <h5>Only the best seller products added recently in our catalog</h5>
            <Swiper 
            slidesPerView={6} 
            loop={true} 
            spaceBetween={30}
            breakpoints={{
                300: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                575: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                700: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                800: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            }}>
                <SwiperSlide>
                    <div className={cls.brand}>
                        <img src="./imgs/brands/brand1.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>
                        <img src="./imgs/brands/brand2.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>
                        <img src="./imgs/brands/brand1.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>
                        <img src="./imgs/brands/brand4.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>
                        <img src="./imgs/brands/brand5.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>
                        <img src="./imgs/brands/brand6.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default BrandsSix;