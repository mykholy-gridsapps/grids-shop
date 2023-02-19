import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import CategoryThirteen from "./CategoryThirteen";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryThirteenCarousel.module.scss'


const CategoryThirteenCarousel = () => {
    const array = [...Array(7)]
    
    return (
        <div className={cls.categoriesCarousel}>
                <h2 className={cls.title}>Shop By Category</h2>
                <Swiper 
                slidesPerView={1} 
                spaceBetween={30}
                breakpoints={{
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}>
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