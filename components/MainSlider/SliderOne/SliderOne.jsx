import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderOne.module.scss'


const SliderOne = () => {
    const pagination = {
        clickable: true,

    };
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} spaceBetween={0} pagination={pagination} modules={[Pagination]}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/slider/slider-1-1.png" alt="client" />

                        <div className={cls.bannerLayer} >
                            <h4>Find the Boundaries. Push Through!</h4>
                            <h2>Summer Sale</h2>
                            <h3>70% Off</h3>
                            <h5>
                                Starting At
                                <b>
                                    $
                                    <em>199</em>
                                    99
                                </b>
                            </h5>
                            <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <img src="./imgs/slider/slider-1-2.jpg" alt="client" />
                        <div className={cls.bannerLayer}>
                            <h4>Over 200 products with discounts</h4>
                            <h2>Great Deals</h2>
                            <h5>Starting At
                                <b>$<em>299</em>99</b>
                            </h5>
                            <Link href="demo1-shop.html" className={cls.btn}>Get Yours!</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <img src="./imgs/slider/slider-1-3.jpg" alt="client" />
                        <div className={cls.bannerLayer}>
                            <h4>Up to 70% off</h4>
                            <h2>New Arrivals</h2>
                            <h5>Starting At
                                <b>$<em>299</em>99</b>
                            </h5>
                            <Link href="demo1-shop.html" className={cls.btn}>Get Yours!</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderOne;