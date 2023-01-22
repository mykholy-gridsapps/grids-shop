import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import cls from './testimonialFourCarousel.module.scss'

import TestimonialFour from "./TestimonialFour";
import { Container } from "@mui/system";

const TestimonialFourCarousel = () => {
    const pagination = {
        clickable: true,

    };
    return (
        <div className={cls.testimonials}>
            <Container maxWidth='xl'>
                <h2>
                    Clients Reviews
                </h2>
                <h5>
                    Only the best seller products added recently in our catalog
                </h5>
                <Swiper slidesPerView={1} spaceBetween={30} className={cls.widgetTestimonials} pagination={pagination} modules={[Pagination]}>
                    <SwiperSlide>
                        <TestimonialFour />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialFour />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialFour />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default TestimonialFourCarousel;