import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from "next-i18next";

import CategoryFourteen from "./CategoryFourteen";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryFourteenCarousel.module.scss'


const CategoryFourteenCarousel = () => {
    const array = [...Array(7)];
    const { t, i18n } = useTranslation('common')

    return (
        <div className={`${cls.categoriesCarousel} ${cls[i18n.language]}`}>
            <div className={cls.title}>
                <h2>Shop Categories</h2>
                <a href="demo42-shop.html">VIEW CATEGORIES<i className="fas fa-arrow-right"></i></a>
            </div>
            <Swiper 
            slidesPerView={1} 
            spaceBetween={0}
            breakpoints={{
                500: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
            }}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <CategoryFourteen />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default CategoryFourteenCarousel;