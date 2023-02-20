import React from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import CategoryNine from "./CategoryNine";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryNineCarousel.module.scss'


const CategoryNineCarousel = () => {
    const array = [...Array(7)];
    const { t, i18n } = useTranslation('common')
    
    return (
        <div className={`${cls.categoriesCarousel} ${cls[i18n.language]}`}>
            <Swiper 
            slidesPerView={3} 
            spaceBetween={0} 
            centeredSlides={true} 
            loop={true}  
            navigation={true} 
            modules={[Navigation]}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
            }}>
            {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                    <CategoryNine />
                </SwiperSlide>
            )}
            </Swiper>
        </div>
    )
}

export default CategoryNineCarousel;