import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderEleven.module.scss'

import { Container } from "@mui/system";

const SliderEleven = () => {
    const navigation = {
    };
    return (
        <div className={cls.slider}>
            <Swiper slidesPerView={1} loop={false} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <Container maxWidth="xl">
                            <div className={cls.content}>
                                <figure>
                                    <img src="./imgs/slider/product-11-1.jpg" alt="client" />
                                </figure>

                                <div className={cls.bannerLayer} >
                                    <h4>Portoblee – Responsive Theme</h4>
                                    <div className={cls.priceBox}>
                                        <span className={cls.saleText}><small>get yours now</small>SALE 34%</span>
                                        <div className={cls.priceWrapper}>
                                            <div className={cls.oldPrice}>$59</div>
                                            <div className={cls.productPrice}>$39</div>
                                        </div>
                                    </div>
                                    <div className={cls.btnIconGroup}>
                                        <a href="demo1-shop.html" className={cls.btn}><i className="fa-solid fa-arrow-right"></i>Select Options</a>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <Container maxWidth="xl">
                            <div className={cls.content}>
                                <div className={cls.bannerLayer} >
                                    <h4>Shoport – eCommerce Theme</h4>
                                    <div className={cls.priceBox}>
                                        <span className={cls.saleText}><small>get yours now</small>SALE 50%</span>
                                        <div className={cls.priceWrapper}>
                                            <div className={cls.oldPrice}>$399</div>
                                            <div className={cls.productPrice}>$198</div>
                                        </div>
                                    </div>
                                    <div className={cls.btnIconGroup}>
                                        <a href="demo1-shop.html" className={cls.btn}><i className="fa-solid fa-arrow-right"></i>Select Options</a>
                                    </div>
                                </div>
                                <figure>
                                    <img src="./imgs/slider/product-11-1.jpg" alt="client" />
                                </figure>

                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderEleven;