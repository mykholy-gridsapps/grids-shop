import React from "react";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderEight.module.scss'

const SliderEight = () => {
    const navigation = {
    };
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <Container maxWidth='xl'>
                        <div className={cls.slide1}>
                            <img src="./imgs/slider/slider-8-1.jpg" alt="client" />

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
                                    <a href="demo1-shop.html" className={cls.btn}>Shop Now!</a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container maxWidth='xl'>
                        <div className={cls.slide2}>
                            <img src="./imgs/slider/slider-8-2.jpg" alt="client" />

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

export default SliderEight;