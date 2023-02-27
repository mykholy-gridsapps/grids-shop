import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import cls from './brandsTwo.module.scss'

const BrandsTwo = () => {
    return (
        <div className={cls.brands}>
            <h2>Shop By Brand</h2>
            <Swiper
                slidesPerView={2}
                loop={false}
                spaceBetween={20}
                breakpoints={{
                    575: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    }
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
export default BrandsTwo;