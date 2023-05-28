import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderThirtyOne.module.scss'
import { useTranslation } from "next-i18next";


const SliderThirtyOne = () => {
    const navigation = {
    };
    const { t, i18n } = useTranslation('common');

    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <div className={cls.slide1}>
                <img src="./imgs/slider/slider-31-1.jpg" alt="client" />

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
        </div>
    )
}

export default SliderThirtyOne;