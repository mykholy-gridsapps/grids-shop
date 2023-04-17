import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import cls from "./blogOneCarousel.module.scss"
import 'swiper/css';
import "swiper/css/pagination";
import BlogOne from "./BlogOne";


const BlogOneCarousel = () => {
    const pagination = {
        clickable: true,
    };
    const array = [...Array(3)]
    return (
        <div className={cls.swiper}>
            <Swiper slidesPerView={1} loop={true} spaceBetween={0} pagination={pagination} modules={[Pagination]}>
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <BlogOne />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
export default BlogOneCarousel;