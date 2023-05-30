import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Grid from '@mui/material/Grid';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './sliderThirtyFour.module.scss';

const SliderThirtyFour = () => {
    const { t, i18n } = useTranslation("common");

    return (
        <div className={`${cls.slider} ${cls[i18n.language]}`}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={10} navigation={{}} modules={[Navigation]}>
                <SwiperSlide>
                    <div className={cls.slide1}>
                        <img src="./imgs/sli2.jpg" alt="client" />

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
                                <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.slide2}>
                        <img src="./imgs/back.jpg" alt="client" />

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
                                <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className={cls.features}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className={cls.feature}>
                            <i className="fa-light fa-circle-star"></i>
                            <h5>Best Quality</h5>
                            <p>It’s content strategy gone awry right from the start are wasn’t.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={cls.feature}>
                            <i className="fa-light fa-circle-star"></i>
                            <h5>Best Quality</h5>
                            <p>It’s content strategy gone awry right from the start are wasn’t.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={cls.feature}>
                            <i className="fa-light fa-circle-star"></i>
                            <h5>Best Quality</h5>
                            <p>It’s content strategy gone awry right from the start are wasn’t.</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default SliderThirtyFour;