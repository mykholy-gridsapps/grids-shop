import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from "@mui/material";
import SwiperCore, { Navigation } from 'swiper'

import CategorySeventeen from "./CategorySeventeen";

import 'swiper/css';
import cls from './categorySeventeenCarousel.module.scss'
import { useTranslation } from "react-i18next";


const CategorySeventeenCarousel = () => {
    const array = [...Array(5)];
    const { t, i18n } = useTranslation('common');
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <div className={`${cls.categories} ${cls[i18n.language]}`}>
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
                        slidesPerView: 1,
                        centeredSlides: true
                    },
                    400: {
                        slidesPerView: 2,
                        centeredSlides: true
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                }}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <CategorySeventeen />
                    </SwiperSlide>
                )}
            </Swiper>
        </div >
    )
}

export default CategorySeventeenCarousel;