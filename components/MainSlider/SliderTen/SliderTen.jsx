import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import Link from "next/link";
import { i18n, useTranslation } from "next-i18next";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderTen.module.scss'

import { Container } from "@mui/system";

const SliderTen = () => {
    const navigation = {
    };
    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <Container maxWidth="xl">
                        <div className={cls.slide1}>
                            <img src="./imgs/slider/slider-10-1.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <h2>Discover our Arrivals!</h2>
                                <Link href="demo1-shop.html" className={cls.btn}><span>View our Dresses </span><i className="fa-solid fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container maxWidth="xl">
                        <div className={cls.slide2}>
                            <img src="./imgs/slider/slider-10-2.jpg" alt="client" />
                            <div className={cls.bannerLayer} >
                                <h2>Trendy Collections!</h2>
                                <Link href="demo1-shop.html" className={cls.btn}><span>View our Specials</span><i className="fa-solid fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderTen;