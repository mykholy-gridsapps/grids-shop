import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import Link from "next/link";
import { i18n, useTranslation } from "next-i18next";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderThirtyThree.module.scss'

import { Container } from "@mui/system";

const SliderThirtyThree = () => {
    const navigation = {
    };
    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <Container maxWidth="xl">
                        <div className={cls.slide1}>
                            <img src="./imgs/slider/slide-33-1.jpg" alt="slider image" />
                            <div className={cls.bannerLayer}>
                                <h4>Totally Wireless High-Performance</h4>
                                <h2>Select headphones</h2>
                                <h3>30% Off</h3>
                                <h5>Starting AT
                                    <b>$<em>199</em>99</b>
                                </h5>
                                <Link href="#">Shop Now!</Link>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container maxWidth="xl">
                        <div className={cls.slide2}>
                            <img src="./imgs/slider/slide-33-2.jpg" alt="slider image" />
                            <div className={cls.bannerLayer}>
                                <h4>Extra</h4>
                                <h3>20% off</h3>
                                <h3>Accessories</h3>
                                <h2>Drones on sale</h2>
                                <Link href="#">Shop All Sale</Link>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderThirtyThree;