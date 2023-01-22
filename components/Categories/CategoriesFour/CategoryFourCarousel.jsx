import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryFourCarousel.module.scss'

import CategoryFour from "./CategoryFour";
import { Container } from "@mui/system";

const CategoryFourCarousel = () => {
    const array = [...Array(7)]

    return (
        <div className={cls.categoriesCarousel}>
            <h2 class="section-title text-center">
                Browse Categories</h2>
            <p class="section-description text-center">Amazing categories with only top fashion products</p>
            <Swiper slidesPerView={5} spaceBetween={20}>
                {array.map(_ =>

                    <SwiperSlide>
                        <CategoryFour />
                    </SwiperSlide>
                )}
            </Swiper>
        </div >
    )
}

export default CategoryFourCarousel;