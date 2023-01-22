import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import cls from "./blogTwoCarousel.module.scss"
import 'swiper/css';
import "swiper/css/pagination";
import BlogTwo from "./BlogTwo";


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
            <Swiper slidesPerView={4} loop={false} spaceBetween={20} pagination={pagination} modules={[Pagination]}>
                {array.map(_ =>
                    <SwiperSlide>
                        <BlogTwo />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
export default BlogTwoCarousel;