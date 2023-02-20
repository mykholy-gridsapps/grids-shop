import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import CategorySeven from "./CategorySeven";

import 'swiper/css';
import cls from './categorySevenCarousel.module.scss'


const CategorySevenCarousel = () => {
    const array = [...Array(9)]

    return (
        <div className={cls.categoriesCarousel}>
            <h2 className={cls.sectionTitle}>Top Categories</h2>
            <Swiper 
            slidesPerView={2} 
            spaceBetween={20}
            breakpoints={{
                350: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                450: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 7,
                    spaceBetween: 20,
                },
            }}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <CategorySeven />
                    </SwiperSlide>
                )}
            </Swiper>
        </div >
    )
}

export default CategorySevenCarousel;