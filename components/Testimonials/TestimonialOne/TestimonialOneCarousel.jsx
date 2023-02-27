import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import cls from './testimonialOneCarousel.module.scss'

import TestimonalOne from "./TestimonialOne";
import { i18n, useTranslation } from "next-i18next";

const TestimonialOneCarousel = () => {
    const { t, i18n } = useTranslation('common');
    const pagination = {
        clickable: true,
        
    };
    return (

        <Swiper className={`${cls.widgetTestimonials} ${cls[i18n.language]}`} pagination={pagination} modules={[Pagination]}>
            <SwiperSlide>
                <TestimonalOne />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonalOne />
            </SwiperSlide>
        </Swiper>
    )
}

export default TestimonialOneCarousel;