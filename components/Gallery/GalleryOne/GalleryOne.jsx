import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import cls from "./galleryOne.module.scss"

const GalleryOne = () => {
    return (
        <div className={cls.gallery}>
            <h3>Follow On Instagram</h3>
            <div className={cls.headingSpacer}></div>
            <Swiper
                slidesPerView={2}
                spaceBetween={0}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: 6,
                        spaceBetween: 0,
                    },
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 0,
                    },
                    1400: {
                        slidesPerView: 8,
                        spaceBetween: 0,
                    },
                }}>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/1.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/2.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/3.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/4.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/5.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/6.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/7.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/8.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/9.jpg"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#"><img src="./imgs/gallery/10.jpg"/></Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GalleryOne;