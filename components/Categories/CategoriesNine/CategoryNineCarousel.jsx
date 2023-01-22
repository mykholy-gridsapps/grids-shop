import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryNineCarousel.module.scss'

import CategoryNine from "./CategoryNine";

const CategoryNineCarousel = () => {
    const array = [...Array(7)]
    
    return (
        <div className={cls.categoriesCarousel}>
            <Swiper slidesPerView={3} spaceBetween={0} centeredSlides={true} loop={true}  navigation={true} modules={[Navigation]}>
            {array.map(_=>
            
                <SwiperSlide>
                    <CategoryNine />
                </SwiperSlide>
            )}
            </Swiper>
        </div>
    )
}

export default CategoryNineCarousel;