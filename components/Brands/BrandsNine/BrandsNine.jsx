import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'

import 'swiper/css';
import cls from './brandsNine.module.scss'

const BrandsNine = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const { t, i18n } = useTranslation('common');

    return (
        <div className={`${cls.brands} ${cls[i18n.language]}`}>
            <div className={cls.title}>

                <h2> FROM THE BLOG</h2>
                <div className={cls.prev} ref={navigationPrevRef}>
                    <i class="fa-solid fa-angle-left"></i>
                </div>
                <div className={cls.next} ref={navigationNextRef}>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <Swiper
                slidesPerView={7}
                loop={true}
                spaceBetween={1}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
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
export default BrandsNine;