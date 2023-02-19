import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import cls from './testimonialFiveCarousel.module.scss'

import TestimonialFive from "./TestimonialFive";
import { Container } from "@mui/system";

const TestimonialFiveCarousel = () => {
    const pagination = {
        clickable: true,

    };
    return (
        <div className={cls.testimonials}>
            <Container maxWidth='lg'>
                <Swiper slidesPerView={1} spaceBetween={30} className={cls.widgetTestimonials} pagination={pagination} modules={[Pagination]}>
                    <SwiperSlide>
                        <TestimonialFive />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialFive />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialFive />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default TestimonialFiveCarousel;