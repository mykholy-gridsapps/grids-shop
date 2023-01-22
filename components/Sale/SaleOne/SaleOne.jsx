import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

import cls from './saleOne.module.scss'

const SaleOne = () => {
    const pagination = {
        clickable: true,

    };
    return (
        <div className={cls.sale}>

            <Swiper slidesPerView={1} loop={true} spaceBetween={0} pagination={pagination} modules={[Pagination]}>
                <SwiperSlide>
                    <div className={cls.banner}>
                        <h3 className={cls.badgeSale}>
                            <em>Sale</em>Many Item
                        </h3>

                        <h4 className={cls.saleText}><small>UP
                            TO</small>50<sup>%</sup><sub>off</sub></h4>
                        <p>Bags, Clothing, T-Shirts, Shoes, Watches and much more...</p>
                        <a href="demo1-shop.html" className={cls.btn}>View Sale</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.banner2}>
                        <figure>
                            <img src="./imgs/sale/sale-1-1.jpg" alt="banner" />
                        </figure>

                        <div className={cls.couponSaleContent}>
                            <h4>DRONE + CAMERAS</h4>
                            <h5><i>UP TO</i><b>$100</b> OFF</h5>
                            <p>Top Brands and Models!</p>
                            <a href="demo1-shop.html" className={cls.btn}>VIEW
                                SALE</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.banner2}>
                        <div class="banner banner5">
                            <h4>HEADPHONES SALE</h4>

                            <figure class="m-b-3">
                                <img src="./imgs/sale/sale-1-2.jpg" alt="banner" />
                            </figure>

                            <div className={cls.couponSaleContent}>
                                <h5><i>UP TO</i><b>50%</b> OFF</h5> <br />
                                <a href="demo1-shop.html" className={cls.btn}>VIEW
                                    SALE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default SaleOne;