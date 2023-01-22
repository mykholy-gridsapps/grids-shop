import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from "./blogFourCarousel.module.scss"
import 'swiper/css';
import BlogFour from "./BlogFour";
import { Container } from "@mui/system";


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
                <Swiper slidesPerView={2} loop={false} spaceBetween={20}>
                    {array.map(_ =>
                        <SwiperSlide>
                            <BlogFour />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </div>
    )
}
export default BlogFourCarousel;