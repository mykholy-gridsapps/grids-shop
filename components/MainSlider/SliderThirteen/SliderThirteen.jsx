import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderThirteen.module.scss'

import { Container } from "@mui/system";

const SliderThirteen = () => {
    const navigation = {
    };
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/slider/slider-13-1.jpg" alt="client" />
                        <div className={cls.bannerLayer} >

                            <div className={cls.bannerLayerLeft} >
                                <h2>TRENDY</h2>
                                <h1>GAMING</h1>
                                <h3>CHAIRS</h3>
                                <h2>DEALS</h2>
                            </div>
                            <div className={cls.bannerLayerRight} >
                                <h4>Porto Game Chair</h4>
                                <h5>from <span>$299.99</span></h5>
                                <h6>
                                    <span>to</span>
                                    <b><sup>$</sup><em>199</em><sup>99</sup></b>
                                </h6>
                                <a href="demo36-shop.html" className={cls.btn}>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <img src="./imgs/slider/slider-13-2.jpg" alt="client" />
                        <div className={cls.bannerLayer} >
                            <div className={cls.bannerLayerLeft} >
                                <h4>Best Gadtets Deals</h4>
                                <h5>from <span>$299.99</span></h5>
                                <h6>
                                    <span>from</span>
                                    <b><sup>$</sup><em>1</em><sup>99</sup></b>
                                </h6>
                                <a href="demo36-shop.html" className={cls.btn}>Shop Now</a>
                            </div>

                            <div className={cls.bannerLayerRight} >
                                <h2>NEW</h2>
                                <h1>SELECTED</h1>
                                <h3>DEALS</h3>
                                <h2>RELEASES</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderThirteen;