import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import cls from './saleThirtyOne.module.scss'

const SaleThirtyOne = () => {
    return (
        <div className={cls.sale}>

            <Swiper slidesPerView={3} loop={false} spaceBetween={20}>
                <SwiperSlide>
                    <div className={cls.banner}>
                        <figure>
                            <img src="./imgs/sale/sale-31-1.jpg" alt="banner" width="380" height="380" />
                        </figure>

                        <div className={cls.bannerLayerTop}>
                            <h3>Women's Bags &amp; Purses</h3>
                            <h4>
                                <del>20%</del>
                                <strong>30%</strong>
                            </h4>
                        </div>

                        <div className={cls.bannerLayerBottom}>
                            <a href="demo33-shop.html" className={cls.btn}>Shop Now</a>
                        </div>

                        <div className={cls.bannerLayerBottom}>
                            <img src="./imgs/sale/sale-31-2.jpg" alt="brand" width="67" height="21" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={[cls.banner, cls.banner2].join(' ')}>
                        <figure>
                            <img src="./imgs/sale/sale-31-3.jpg" alt="banner" width="380" height="380" />
                        </figure>

                        <div className={cls.bannerLayerTop}>
                            <h3>Women's Shoes</h3>
                        </div>

                        <div className={cls.bannerLayerCircle}>
                            <h4 className=banner-layer-circle-item bg-primary">40
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
                            <h3>Women's Bags &amp; Purses</h3>
                            <h4>
                                <del>20%</del>
                                <strong>30%</strong>
                            </h4>
                        </div>

                        <div className={cls.bannerLayerBottom}>
                            <a href="demo33-shop.html" className={cls.btn}>Shop Now</a>
                        </div>

                        <div className={[cls.bannerLayerBottom, cls.bannerLeft].join(' ')}>
                            <img src="./imgs/sale/sale-31-2.jpg" alt="brand" width="67" height="21" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default SaleThirtyOne;