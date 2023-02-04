import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderTwo.module.scss'

import { Container } from "@mui/system";

const SliderTwo = () => {
    const navigation = {

    };
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/slider/slider-2-1.jpg" alt="client" />

                        <div className={cls.bannerLayer} >
                            <h2>Winter Fashion Trends</h2>
                            <h3 className="text-uppercase mb-0">Get up to 30% off</h3>
                            <h4 className="m-b-4">on Jackets</h4>

                            <h5 >Starting at<span><sup>$</sup>199<sup>99</sup></span></h5>
                            <a href="demo3-shop.html" className={cls.btn} role="button">Shop Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <img src="./imgs/slider/slider-2-2.jpg" alt="client" />
                        <div className={cls.bannerLayer}>
                            <h2>New Season Hats </h2>
                            <h3><small>Up to</small>20% off</h3>

                            <hr />

                            <h5>Starting at <span>$<em>19</em>99</span>
                            </h5>
                            <a href="demo3-shop.html" className={cls.btn} role="button">Shop Now <i
                                className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderTwo;