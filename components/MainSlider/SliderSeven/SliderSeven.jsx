import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cls from './sliderSeven.module.scss'

import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const SliderSeven = () => {
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} spaceBetween={0} loop={true}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/slider/slider-7-1.jpg" alt="client" />

                        <div className={cls.bannerLayer} >
                            <h4>Find the Boundaries. Push Through!</h4>
                            <h2>Shoes Sale</h2>
                            <Grid container>
                                <Grid item md={6}>
                                    <h3>
                                        40<small><sup>%</sup><sub>OFF</sub></small>
                                    </h3>
                                </Grid>
                                <Grid className={cls.descount} item md={6}>
                                    <h5>
                                        Starting At
                                    </h5>
                                    <h6>
                                        $<b>119</b>99
                                    </h6>
                                    <a href="demo1-shop.html" className={cls.btn}>Shop Now!</a>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <img src="./imgs/slider/slider-7-2.jpg" alt="client" />
                        <div className={cls.bannerLayer}>
                            <h2>
                                FLASH SALE
                            </h2>
                            <h4>
                                TOP BRANDS<br />SUMMER SUNGLASSES
                            </h4>
                            <h3>
                                STARTING<br />AT<sup className="pl-2 ml-1">$</sup>199<sup>99</sup>
                            </h3>
                            <a href="demo1-shop.html" className={cls.btn}>View Sale</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderSeven;