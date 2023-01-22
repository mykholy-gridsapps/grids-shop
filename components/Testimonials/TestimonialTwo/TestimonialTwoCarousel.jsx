import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import cls from './testimonialTwoCarousel.module.scss'

import TestimonalOne from "./TestimonialTwo";

const TestimonialTwoCarousel = () => {
    const pagination = {
        clickable: true,
        
    };
    return (

        <Swiper className={cls.widgetTestimonials} pagination={pagination} modules={[Pagination]}>
            <SwiperSlide>
                <TestimonalOne />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonalOne />
            </SwiperSlide>
        </Swiper>
    )
}

export default TestimonialTwoCarousel;