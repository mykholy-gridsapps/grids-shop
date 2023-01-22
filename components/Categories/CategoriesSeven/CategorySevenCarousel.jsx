import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './categorySevenCarousel.module.scss'

import CategorySeven from "./CategorySeven";

const CategorySevenCarousel = () => {
    const array = [...Array(9)]

    return (
        <div className={cls.categoriesCarousel}>
            <h2 className={cls.sectionTitle}>Top Categories</h2>
            <Swiper slidesPerView={7} spaceBetween={20}>
                {array.map(_ =>
                    <SwiperSlide>
                        <CategorySeven />
                    </SwiperSlide>
                )}
            </Swiper>
        </div >
    )
}

export default CategorySevenCarousel;