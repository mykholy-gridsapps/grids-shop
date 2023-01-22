import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './categorySixCarousel.module.scss'

import CategorySix from "./CategorySix";
import { Container } from "@mui/system";

const CategorySixCarousel = () => {
    const array = [...Array(7)]

    return (
        <div className={cls.categoriesCarousel}>
            <Container maxWidth='xl'>
                <Swiper slidesPerView={5} spaceBetween={20}>
                    {array.map(_ =>
                        <SwiperSlide>
                            <CategorySix />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </div >
    )
}

export default CategorySixCarousel;