import React from "react";
import { Container } from "@mui/system";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import BlogSeven from "./BlogSeven";

import cls from "./blogSevenCarousel.module.scss"
import 'swiper/css';
import "swiper/css/pagination";


const BlogSevenCarousel = () => {
    const array = [...Array(5)];
    const pagination = {}
    return (
        <div>
            <Container maxWidth='xl' >
                <h2 className={cls.sectionTitle}>
                    Recipes For This Week
                </h2>
                <p className={cls.sectionDescription}>
                    All our new arrivals in a exclusive brand selection
                </p>
                <div className={cls.swiper}>

                    <Swiper
                        slidesPerView={1}
                        loop={false}
                        spaceBetween={20}
                        pagination={pagination}
                        modules={[Pagination]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}>
                        {array.map((_, idx) =>
                            <SwiperSlide key={idx}>
                                <BlogSeven />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}
export default BlogSevenCarousel;