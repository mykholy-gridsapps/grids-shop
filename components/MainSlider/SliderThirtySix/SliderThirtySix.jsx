import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderThirtySix.module.scss';


const SliderThirtySix = () => {
    const pagination = {
        clickable: true,

    };
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} spaceBetween={20} pagination={pagination} modules={[Pagination]} className={cls.wrapper}>
                <SwiperSlide>
                    <div className={cls.slide}>
                        <img src="./imgs/slider/slider-1-1.png" alt="client" />
                        <div className={cls.content}>
                            <span>NEW ARRIVALS</span>
                            <h2>
                                Get The Best Collection
                                <br />
                                Of Hand Tools Right
                            </h2>
                            <button><i className="fa-regular fa-bag-shopping"></i> Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide}>
                        <img src="./imgs/slider/slider-1-2.jpg" alt="client" />
                        <div className={cls.content}>
                            <span>NEW ARRIVALS</span>
                            <h2>
                                Get The Best Collection
                                <br />
                                Of Hand Tools Right
                            </h2>
                            <button><i className="fa-regular fa-bag-shopping"></i> Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide}>
                        <img src="./imgs/slider/slider-1-3.jpg" alt="client" />
                        <div className={cls.content}>
                            <span>NEW ARRIVALS</span>
                            <h2>
                                Get The Best Collection
                                <br />
                                Of Hand Tools Right
                            </h2>
                            <button><i className="fa-regular fa-bag-shopping"></i> Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderThirtySix;