import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryTwoCarousel.module.scss'

import CategoryTwo from "./CategoryTwo";

const CategoryTwoCarousel = () => {
    const array = [...Array(7)]
    
    return (
        <div className={cls.categoriesCarousel}>
            <h2 className={cls.title}>Shop By Category</h2>
            <Swiper slidesPerView={5} spaceBetween={0}  navigation={true} modules={[Navigation]}>
            {array.map(_=>
            
                <SwiperSlide>
                    <CategoryTwo />
                </SwiperSlide>
            )}
            </Swiper>
        </div>
    )
}

export default CategoryTwoCarousel;