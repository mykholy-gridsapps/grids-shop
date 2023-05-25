import React from "react";
import Container from "@mui/material/Container";
import Link from "next/link";
import { i18n, useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderTwentyNine.module.scss'

const SliderTwentyNine = () => {
    const navigation = {
    };
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={10} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/sli2.jpg" alt="client" />

                        <div className={cls.bannerLayer} >
                            <h4>Luxury With Brands We Love</h4>
                            <h3>Womens Lingerie</h3>
                            <h5>
                                Starting At
                            </h5>
                            <h6>
                                $<b>199</b>99
                            </h6>
                            <div className={cls.btnContainer}>
                                <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <img src="./imgs/back.jpg" alt="client" />

                        <div className={cls.bannerLayer} >
                            <h4>Luxury With Brands We Love</h4>
                            <h3>{`Women's`} Hats</h3>
                            <h5>
                                Starting At
                            </h5>
                            <h6>
                                $<b>199</b>99
                            </h6>
                            <div className={cls.btnContainer}>
                                <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderTwentyNine;