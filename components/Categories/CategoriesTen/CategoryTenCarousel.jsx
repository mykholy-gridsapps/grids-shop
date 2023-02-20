import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from "@mui/system";

import CategoryTen from "./CategoryTen";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryTenCarousel.module.scss'


const CategoryTenCarousel = () => {
    const array = [...Array(7)]
    
    return (
        <div className={cls.categoriesCarousel}>
            <Container maxWidth="xl">
                <Swiper 
                slidesPerView={1} 
                spaceBetween={30}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <CategoryTen />
                    </SwiperSlide>
                )}
                </Swiper>
            </Container>
        </div>
    )
}

export default CategoryTenCarousel;