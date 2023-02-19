import React from "react";
import Container from "@mui/material/Container";
import Link from "next/link";
import { i18n, useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderNine.module.scss'

const SliderNine = () => {
    const navigation = {
    };
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <Container maxWidth='xl'>
                        <div className={cls.slide1}>
                            <img src="./imgs/slider/slider-9-1.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <h2>Electronic<br />Deals</h2>
                                <div className={cls.couponSaleText}>
                                    <h4>Exclusive COUPON</h4>
                                    <h5>
                                        <i>UP TO</i>
                                        <b>$100</b>
                                        <sub>OFF</sub>
                                    </h5>
                                </div>
                                <div className={cls.btnContainer}>
                                    <Link href="demo1-shop.html" className={cls.btn}>View All Now</Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container maxWidth='xl'>
                        <div className={cls.slide2}>
                            <img src="./imgs/slider/slider-9-2.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <h2>Top Brands<br/>Smartphones</h2>
                                <div className={cls.couponSaleText}>
                                    <h4>Exclusive COUPON</h4>
                                    <h5>
                                        <i>UP TO</i>
                                        <b>$100</b>
                                        <sub>OFF</sub>
                                    </h5>
                                </div>
                                <div className={cls.btnContainer}>
                                    <Link href="demo1-shop.html" className={cls.btn}>View All Now</Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderNine;