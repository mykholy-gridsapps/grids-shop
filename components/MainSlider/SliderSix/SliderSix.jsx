import React from "react";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderSix.module.scss'
import { Grid } from "@mui/material";

const SliderSix = () => {
    const navigation = {
    };
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <Container maxWidth='xl'>
                        <div className={cls.slide1}>
                            <img src="./imgs/slider/slider-6-1.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <Grid container className={cls.textContainer} columnSpacing={2}>
                                    <Grid item display="flex" alignItems="center" md={6}>
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
                                    <Grid item md={6}>
                                        <h2>
                                            50<small>%<ins>OFF</ins></small>
                                        </h2>
                                    </Grid>
                                </Grid>
                                <div className={cls.btnContainer}>
                                    <a href="demo1-shop.html" className={cls.btn}>Shop Now!</a>
                                </div>

                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container maxWidth='xl'>
                        <div className={cls.slide2}>
                            <img src="./imgs/slider/slider-6-2.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <Grid container className={cls.textContainer} columnSpacing={2}>
                                    <Grid item display="flex" alignItems="center" md={6}>
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
                                    <Grid item md={6}>
                                        <h2>
                                            50<small>%<ins>OFF</ins></small>
                                        </h2>
                                    </Grid>
                                </Grid>
                                <div className={cls.btnContainer}>
                                    <a href="demo1-shop.html" className={cls.btn}>Shop Now!</a>
                                </div>

                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderSix;