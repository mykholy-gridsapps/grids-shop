import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cls from './sliderTwelve.module.scss'


const SliderTwelve = () => {
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/slider/slider-12-1.jpg" alt="client" />

                        <div className={cls.bannerLayer} >
                            <h4>Exclusive Product New Arrival</h4>
                            <h2>Organic Coffee</h2>
                            <div className={cls.positionRelative}>

                                <h3>Special Blend</h3>
                                <h5>Fresh!</h5>
                            </div>
                            <p>Breakfast products on sale</p>
                            <h6>
                                <sup>up to</sup><strong>50%</strong>
                            </h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <img src="./imgs/slider/slider-12-2.jpg" alt="client" />
                        <div className={cls.bannerLayer} >
                            <h4>Exclusive Product New Arrival</h4>
                            <h2>Fit Low Carb</h2>
                            <div className={cls.positionRelative}>

                                <h3>Candy Bar</h3>
                                <h5>Sugar-Free</h5>
                            </div>
                            <p>Breakfast products on sale</p>
                            <h6>
                                <sup>up to</sup><strong>70%</strong>
                            </h6>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderTwelve;