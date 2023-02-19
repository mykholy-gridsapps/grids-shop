import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import CategoryFour from "./CategoryFour";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryFourCarousel.module.scss'


const CategoryFourCarousel = () => {
    const array = [...Array(7)]

    return (
        <div className={cls.categoriesCarousel}>
            <h2 className="section-title text-center">
                Browse Categories</h2>
            <p className="section-description text-center">Amazing categories with only top fashion products</p>
            <Swiper 
            slidesPerView={5} 
            spaceBetween={20}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}>
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