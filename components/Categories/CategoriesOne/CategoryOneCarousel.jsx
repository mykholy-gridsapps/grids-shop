import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import CategoryOne from "./CategoryOne";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './categoryOneCarousel.module.scss'


const CategoryOneCarousel = () => {
    const array = [...Array(7)]
    return (
        <>
            <h2 className={cls.title}>Shop By Category</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    450: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    800: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    992: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <CategoryOne />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default CategoryOneCarousel;