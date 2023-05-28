import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderThirty.module.scss'
import { useTranslation } from "next-i18next";


const SliderThirty = () => {
    const navigation = {
    };
    const { t, i18n } = useTranslation('common');

    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} loop={false} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/slider/slider-3-1.jpg" alt="client" />

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
                        <img src="./imgs/slider/slider-3-2.jpg" alt="client" />
                        <div className={cls.bannerLayer}>
                            <div className={cls.mxAuto}>
                                <h4>Extra</h4>
                                <h3>20% off</h3>
                                <h3>Accessories</h3>
                                <h2>Summer Sale</h2>
                                <Link href="category.html" className={cls.btn}>Shop All Sale</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderThirty;