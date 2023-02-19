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

        <Swiper slidesPerView={2} spaceBetween={30} className={cls.widgetTestimonials} pagination={pagination} modules={[Pagination]}>
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