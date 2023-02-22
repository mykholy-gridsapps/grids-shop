import React from "react";
import Container from "@mui/material/Container";
import { i18n, useTranslation } from "next-i18next";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderSix.module.scss'

const SliderSix = () => {
    const navigation = {
    };
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    {/* <Container maxWidth='xl'> */}
                        <div className={cls.slide1}>
                            <img src="./imgs/slider/slider-6-1.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <Grid container className={cls.textContainer}>
                                    <Grid item display="flex" alignItems="center" sm={6} xs={7}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <h4>
                                                    Furniture & Garden
                                                </h4>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <h3>
                                                    Huge Sale
                                                </h3>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={6} xs={5}>
                                        <h2>
                                            50<small>%<ins>OFF</ins></small>
                                        </h2>
                                    </Grid>
                                </Grid>
                                <div className={cls.btnContainer}>
                                    <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
                                </div>

                            </div>
                        </div>
                    {/* </Container> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <Container maxWidth='xl'> */}
                        <div className={cls.slide2}>
                            <img src="./imgs/slider/slider-6-2.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <Grid container className={cls.textContainer}>
                                    <Grid item display="flex" alignItems="center" sm={6} xs={7}>
                                        <Grid container>
                                            <Grid item md={12}>
                                                <h4>
                                                    Furniture & Garden
                                                </h4>
                                            </Grid>
                                            <Grid item md={12}>
                                                <h3>
                                                    Huge Sale
                                                </h3>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={6} xs={5}>
                                        <h2>
                                            50<small>%<ins>OFF</ins></small>
                                        </h2>
                                    </Grid>
                                </Grid>
                                <div className={cls.btnContainer}>
                                    <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
                                </div>

                            </div>
                        </div>
                    {/* </Container> */}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderSix;