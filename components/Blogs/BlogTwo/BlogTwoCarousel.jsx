import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import BlogTwo from "./BlogTwo";

import cls from "./blogTwoCarousel.module.scss"
import 'swiper/css';
import "swiper/css/pagination";


const BlogTwoCarousel = () => {
    const pagination = {
        clickable: true,

    };
    const array = [...Array(5)]
    return (
        <div className={cls.swiper}>
            <h2>
                Latest News
            </h2>
            <Swiper
                slidesPerView={1}
                loop={false}
                spaceBetween={20}
                pagination={pagination}
                modules={[Pagination]}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <BlogTwo />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
export default BlogTwoCarousel;