import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './testimonialThreeCarousel.module.scss'

import TestimonialThree from "./TestimonialThree";

const TestimonialThreeCarousel = () => {
    const pagination = {
        clickable: true,
        
    };
    return (

        <Swiper 
        slidesPerView={1} 
        spaceBetween={0} 
        className={cls.widgetTestimonials} 
        pagination={pagination} 
        modules={[Pagination]}
        breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }}>
            <SwiperSlide>
                <TestimonialThree />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialThree />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialThree />
            </SwiperSlide>
        </Swiper>
    )
}

export default TestimonialThreeCarousel;