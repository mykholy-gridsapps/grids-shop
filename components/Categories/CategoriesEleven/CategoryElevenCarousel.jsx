import React from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import CategoryEleven from "./CategoryEleven";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryElevenCarousel.module.scss'


const CategoryElevenCarousel = () => {
    const array = [...Array(9)];
    const { t, i18n } = useTranslation('common')

    return (
        <div className={`${cls.categoriesCarousel} ${cls[i18n.language]}`}>
            <h2 className={cls.sectionTitle}>Browse By Category</h2>
            <Swiper 
            slidesPerView={1} 
            spaceBetween={20} 
            navigation={true} 
            modules={[Navigation]}
            breakpoints={{
                450: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}>
                {array.map(_ =>
                    <SwiperSlide>
                        <CategoryEleven />
                    </SwiperSlide>
                )}
            </Swiper>
        </div >
    )
}

export default CategoryElevenCarousel;