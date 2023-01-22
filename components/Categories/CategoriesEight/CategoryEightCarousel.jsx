import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './categoryEightCarousel.module.scss'

import CategoryEight from "./CategoryEight";
import { Grid } from "@mui/material";

const CategoryEightCarousel = () => {
    const array = [...Array(5)]

    return (
        <div className={cls.categoriesCarousel}>
            <Grid container columnSpacing={0}>
                <Grid item lg={3} >
                    <div className={cls.catBanner}>
                        <h4>Best Collections</h4>
                        <p>Selected Products From Famous Brands</p>
                    </div>
                </Grid>
                <Grid item lg={9} >
                    <Swiper slidesPerView={3} spaceBetween={0}>
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