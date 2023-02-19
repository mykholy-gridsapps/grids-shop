import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from "@mui/system";

import CategorySix from "./CategorySix";

import 'swiper/css';
import cls from './categorySixCarousel.module.scss'


const CategorySixCarousel = () => {
    const array = [...Array(7)]

    return (
        <div className={cls.categoriesCarousel}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        360: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        500: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        800: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        }
                    }}>
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