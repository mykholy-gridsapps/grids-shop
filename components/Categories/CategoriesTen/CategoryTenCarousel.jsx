import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryTenCarousel.module.scss'

import CategoryTen from "./CategoryTen";
import { Container } from "@mui/system";

const CategoryTenCarousel = () => {
    const array = [...Array(7)]
    
    return (
        <div className={cls.categoriesCarousel}>
            <Container maxWidth="xl">
                <Swiper slidesPerView={3} spaceBetween={30}>
                {array.map(_=>
                
                    <SwiperSlide>
                        <CategoryTen />
                    </SwiperSlide>
                )}
                </Swiper>
            </Container>
        </div>
    )
}

export default CategoryTenCarousel;