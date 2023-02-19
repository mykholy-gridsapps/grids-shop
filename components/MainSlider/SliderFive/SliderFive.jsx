import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderFive.module.scss'


const SliderFive = () => {
    const pagination = {
        clickable: true,

    };
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} pagination={pagination} modules={[Pagination]}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/slider/slider-5-1.jpg" alt="client" />

                        <div className={cls.bannerLayer} >
                            <h2>
                                Summer Fashion Trends
                            </h2>
                            <h3>
                                big sale up to
                            </h3>
                            <h4>
                                80% <small>OFF</small>
                            </h4>
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

                        <video autoPlay loop>
                            <source src="./imgs/slider/slider-5-2.mp4" />
                        </video>
                        <div className={cls.bannerLayerLeft}>
                            <h2>Summer Trends</h2>
                            <h3>sale</h3>
                        </div>
                        <div className={cls.bannerLayerRight}>
                            <h4>prices up to</h4>
                            <h3>
                                80%<small>OFF</small>
                            </h3>
                            <div className={cls.btnContainer}>
                                <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default SliderFive;