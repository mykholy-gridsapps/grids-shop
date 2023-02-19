import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryThreeCarousel.module.scss'

import CategoryThree from "./CategoryThree";
import { Container } from "@mui/system";

const CategoryThreeCarousel = () => {
    const array = [...Array(7)]

    return (
        <div className={cls.categoriesCarousel}>
            <Container maxWidth="xl">
                <h2 className={cls.title}>Shop By Category</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        500: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        750: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}>
                    {array.map(_ =>

                        <SwiperSlide>
                            <CategoryThree />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </div>
    )
}

export default CategoryThreeCarousel;