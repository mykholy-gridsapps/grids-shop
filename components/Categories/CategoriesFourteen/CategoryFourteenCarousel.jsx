import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryFourteenCarousel.module.scss'

import CategoryFourteen from "./CategoryFourteen";
import { Container } from "@mui/system";

const CategoryFourteenCarousel = () => {
    const array = [...Array(7)]

    return (
        <div className={cls.categoriesCarousel}>
            <div className={cls.title}>
                <h2>Shop Categories</h2>
                <a href="demo42-shop.html">VIEW CATEGORIES<i class="fas fa-arrow-right"></i></a>
            </div>
            <Swiper slidesPerView={4} spaceBetween={0}>
                {array.map(_ =>

                    <SwiperSlide>
                        <CategoryFourteen />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default CategoryFourteenCarousel;