import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import cls from './brandsThree.module.scss'

const BrandsThree = () => {
    return (
        <div className={cls.brands}>
            <h3>As featured at</h3>
            <Swiper
                slidesPerView={3}
                loop={false}
                spaceBetween={20}
                centeredSlides={true}
                breakpoints={{
                    575: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 60,
                    },
                    992: {
                        slidesPerView: 7,
                        spaceBetween: 60,
                    }
                }}>
                <SwiperSlide>
                    <div className={cls.brand}>

                        <img src="./imgs/brands/brand-1.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>

                        <img src="./imgs/brands/brand-2.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>

                        <img src="./imgs/brands/brand-3.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>

                        <img src="./imgs/brands/brand-4.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>

                        <img src="./imgs/brands/brand-5.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>

                        <img src="./imgs/brands/brand-6.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.brand}>

                        <img src="./imgs/brands/brand-7.png" alt="brand" width="140" height="60" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default BrandsThree;