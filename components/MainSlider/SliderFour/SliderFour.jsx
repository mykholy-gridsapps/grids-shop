import React from "react";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderFour.module.scss'

const SliderFour = () => {
    const navigation = {
    };
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <Container maxWidth='xl'>
                        <div className={cls.slide1}>
                            <img src="./imgs/slider/slider-4-1.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <h4>Find the Boundaries. Push Through!</h4>
                                <h2>Jeans Sale</h2>
                                <h3><em>up<br />to</em>80% OFF</h3>
                                <h5>
                                    Starting At
                                    <b>
                                        $
                                        <em>199</em>
                                        99
                                    </b>
                                </h5>
                                <a href="demo1-shop.html" className={cls.btn}>Shop Now!</a>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container maxWidth='xl'>
                        <div className={cls.slide2}>
                            <img src="./imgs/slider/slider-4-2.jpg" alt="client" />

                            <div className={cls.bannerLayer} >
                                <h2>Women's Business Fashion</h2>
                                <h3><em>up<br />to</em>60% OFF</h3>
                                <h5>
                                    Starting at
                                    <span>$<em>29</em>99</span>
                                </h5>
                                <a href="demo1-shop.html" className={cls.btn}>Shop Now!</a>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderFour;