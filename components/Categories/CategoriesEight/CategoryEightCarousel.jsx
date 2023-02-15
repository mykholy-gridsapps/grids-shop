import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from "@mui/material";

import CategoryEight from "./CategoryEight";

import 'swiper/css';
import cls from './categoryEightCarousel.module.scss'


const CategoryEightCarousel = () => {
    const array = [...Array(5)]

    return (
        <div className={cls.categoriesCarousel}>
            <Grid container columnSpacing={0}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <div className={cls.catBanner}>
                        <h4>Best Collections</h4>
                        <p>Selected Products From Famous Brands</p>
                    </div>
                </Grid>
                <Grid item lg={9} md={8} sm={6} xs={12}>
                    <Swiper 
                    slidesPerView={3} 
                    spaceBetween={0}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }}>
                        {array.map(_ =>
                            <SwiperSlide>
                                <CategoryEight />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </Grid>
            </Grid>
        </div >
    )
}

export default CategoryEightCarousel;