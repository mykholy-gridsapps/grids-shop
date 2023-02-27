import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import 'swiper/css';
import cls from './brandsEight.module.scss'

const BrandsEight = () => {
    return (
        <div className={cls.brands}>
            <h2>Featured Brands</h2>
            <Swiper 
            slidesPerView={7} 
            loop={true} 
            spaceBetween={1} 
            modules={[Navigation]}
            breakpoints={{
                300: {
                    slidesPerView: 2,
                    spaceBetween: 1,
                    centeredSlides: true
                },
                400: {
                    slidesPerView: 3,
                    spaceBetween: 1,
                },
                575: {
                    slidesPerView: 4,
                    spaceBetween: 1,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 1,
                },
                992: {
                    slidesPerView: 7,
                    spaceBetween: 1,
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
export default BrandsEight;