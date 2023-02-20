import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from "./blogFiveCarousel.module.scss"
import 'swiper/css';
import BlogFive from "./BlogFive";


const BlogFiveCarousel = () => {
    const pagination = {
        clickable: true,

    };
    const array = [...Array(5)]
    return (
        <div className={cls.swiper}>
            <h2 className={cls.title}>
                Latest News
            </h2>
            <Swiper slidesPerView={2} loop={false} spaceBetween={20}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <BlogFive />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
export default BlogFiveCarousel;