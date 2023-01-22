import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryThirteenCarousel.module.scss'

import CategoryThirteen from "./CategoryThirteen";
import { Container } from "@mui/system";

const CategoryThirteenCarousel = () => {
    const array = [...Array(7)]
    
    return (
        <div className={cls.categoriesCarousel}>
                <h2 className={cls.title}>Shop By Category</h2>
                <Swiper slidesPerView={4} spaceBetween={30}>
                {array.map(_=>
                
                    <SwiperSlide>
                        <CategoryThirteen />
                    </SwiperSlide>
                )}
                </Swiper>
        </div>
    )
}

export default CategoryThirteenCarousel;