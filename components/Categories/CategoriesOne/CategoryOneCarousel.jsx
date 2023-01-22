import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import cls from './categoryOneCarousel.module.scss'

import CategoryOne from "./CategoryOne";

const CategoryOneCarousel = () => {
    const array = [...Array(7)]
    return (
        <>
            <h2 className={cls.title}>Shop By Category</h2>
            <Swiper slidesPerView={6} spaceBetween={30} >
            {array.map(_=>
            
                <SwiperSlide>
                    <CategoryOne />
                </SwiperSlide>
            )}
            </Swiper>
        </>
    )
}

export default CategoryOneCarousel;