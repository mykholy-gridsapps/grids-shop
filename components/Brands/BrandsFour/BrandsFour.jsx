import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import cls from './brandsFour.module.scss'

const BrandsFour = () => {
    return (
        <div className={cls.brands}>

            <Swiper 
            slidesPerView={2} 
            loop={false} 
            spaceBetween={20}
            breakpoints={{
                450: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                588: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                797: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 7,
                    spaceBetween: 20,
                },
                1111: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                },
            }}>
                <SwiperSlide>
                    <a href="demo26-shop.html">Cadillac</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="demo26-shop.html">Chevy</a>
                </SwiperSlide>
                <SwiperSlide>

                    <a href="demo26-shop.html">Dodge</a>
                </SwiperSlide>
                <SwiperSlide>

                    <a href="demo26-shop.html">Ford</a>
                </SwiperSlide>
                <SwiperSlide>

                    <a href="demo26-shop.html">Honda</a>
                </SwiperSlide>
                <SwiperSlide>

                    <a href="demo26-shop.html">Hyundai</a>
                </SwiperSlide>
                <SwiperSlide>

                    <a href="demo26-shop.html">Jeep</a>
                </SwiperSlide>
                <SwiperSlide>

                    <a href="demo26-shop.html">Nissan</a>
                </SwiperSlide>
                <SwiperSlide>

                    <a href="demo26-shop.html">Toyota</a>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
export default BrandsFour;