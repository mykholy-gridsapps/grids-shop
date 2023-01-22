import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from "./blogEightCarousel.module.scss"
import 'swiper/css';
import BlogEight from "./BlogEight";
import { Container } from "@mui/system";


const BlogEightCarousel = () => {
    const pagination = {
        clickable: true,

    };
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
                <Swiper slidesPerView={3} loop={false} spaceBetween={20}>
                    {array.map(_ =>
                        <SwiperSlide>
                            <BlogEight />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </div>
    )
}
export default BlogEightCarousel;