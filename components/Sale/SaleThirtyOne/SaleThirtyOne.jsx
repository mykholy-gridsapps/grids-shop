import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import cls from './saleThirtyOne.module.scss'
import { i18n, useTranslation } from "next-i18next";

const SaleThirtyOne = () => {
    const { t, i18n } =useTranslation('common');
    return (
        <div className={`${cls.sale} ${cls[i18n.language]}`}>

            <Swiper 
            slidesPerView={1} 
            loop={false} 
            spaceBetween={20}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}>
                <SwiperSlide>
                    <div className={cls.banner}>
                        <figure>
                            <img src="./imgs/sale/sale-31-1.jpg" alt="banner" width="380" height="380" />
                        </figure>

                        <div className={cls.bannerLayerTop}>
                            <h3>Womens Bags &amp; Purses</h3>
                            <h4>
                                <del>20%</del>
                                <strong>30%</strong>
                            </h4>
                        </div>

                        <div className={cls.bannerLayerBottom}>
                            <a href="demo33-shop.html" className={cls.btn}>Shop Now</a>
                        </div>

                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={[cls.banner, cls.banner2].join(' ')}>
                        <figure>
                            <img src="./imgs/sale/sale-31-3.jpg" alt="banner" width="380" height="380" />
                        </figure>

                        <div className={cls.bannerLayerTop}>
                            <h3>Womens Shoes</h3>
                        </div>

                        <div className={cls.bannerLayerCircle}>
                            <h4 className="banner-layer-circle-item bg-primary">40
                                <sup>%</sup>
                            </h4>
                        </div>

                        <div className={cls.bannerLayerBottom}>
                            <a href="demo33-shop.html" className={cls.btn}>Shop Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={[cls.banner, cls.banner3].join(' ')}>
                        <figure>
                            <img src="./imgs/sale/sale-31-4.jpg" alt="banner" width="380" height="380" />
                        </figure>

                        <div className={cls.bannerLayerTop}>
                            <h3>Womens Bags &amp; Purses</h3>
                            <h4>
                                <del>20%</del>
                                <strong>30%</strong>
                            </h4>
                        </div>

                        <div className={cls.bannerLayerBottom}>
                            <a href="demo33-shop.html" className={cls.btn}>Shop Now</a>
                        </div>

                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default SaleThirtyOne;