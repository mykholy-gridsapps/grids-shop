import React from "react";
import { Container } from "@mui/system";
import { Swiper, SwiperSlide } from 'swiper/react';

import BlogFour from "./BlogFour";

import cls from "./blogFourCarousel.module.scss"
import 'swiper/css';


const BlogFourCarousel = () => {
    const pagination = {
        clickable: true,
    };
    const array = [...Array(5)]
    return (
        <div className={cls.swiper}>
            <Container maxWidth="xl">
                <h2 className={cls.title}>
                    Latest News
                </h2>
                <p className={cls.description}>Only the latest news from us, stay tuned.</p>
                <Swiper 
                slidesPerView={1} 
                loop={false} 
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}>
                    {array.map((_, idx) =>
                        <SwiperSlide key={idx}>
                            <BlogFour />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </div>
    )
}
export default BlogFourCarousel;