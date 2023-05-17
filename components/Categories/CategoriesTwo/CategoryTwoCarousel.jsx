import React from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import CategoryTwo from "./CategoryTwo";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryTwoCarousel.module.scss'


const CategoryTwoCarousel = () => {
    const array = [...Array(7)];
    const { t, i18n } = useTranslation('common')

    return (
        <div className={`${cls.categoriesCarousel} ${cls[i18n.language]}`}>
            <h2 className={cls.title}>Shop By Category</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <CategoryTwo />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default CategoryTwoCarousel;