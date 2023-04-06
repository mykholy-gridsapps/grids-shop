import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from "@mui/system";

import BlogEight from "./BlogEight";

import 'swiper/css';
import cls from "./blogEightCarousel.module.scss"

const BlogEightCarousel = () => {
    const array = [...Array(3)]
    return (
        <div className={cls.swiper}>
            <Container maxWidth="xl">
                <h5>OUR BLOG</h5>
                <h2 className={cls.title}>
                    Recent Articles and News
                </h2>
                <p className={cls.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero idnisl euis
                </p>
                <Swiper
                    slidesPerView={1}
                    loop={false}
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}>
                    {array.map((_, idx) =>
                        <SwiperSlide key={idx}>
                            <BlogEight />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </div>
    )
}
export default BlogEightCarousel;