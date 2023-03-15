import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'

import 'swiper/css';
import "swiper/css/pagination";
import cls from './testimonialSixCarousel.module.scss'

import TestimonalSix from "./TestimonialSix";
import { i18n, useTranslation } from "next-i18next";

SwiperCore.use([Navigation])

const TestimonialSixCarousel = () => {
    const { t, i18n } = useTranslation('common');
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <div className={`${cls.swiper} ${cls[i18n.language]}`}>
            <div className={cls.title}>
                <h2>Testimonials</h2>
                <div className={cls.prev} ref={navigationPrevRef}>
                    <i class="fa-solid fa-angle-left"></i>
                </div>
                <div className={cls.next} ref={navigationNextRef}>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <Swiper
                className={`${cls.widgetTestimonials} ${cls[i18n.language]}`}
                slidesPerView={1}
                loop={false}
                spaceBetween={20}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}>
                <SwiperSlide>
                    <TestimonalSix />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonalSix />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default TestimonialSixCarousel;