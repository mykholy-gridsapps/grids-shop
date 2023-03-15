import React from "react";
import { i18n, useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
import { Container } from "@mui/system";

import BlogTen from "./BlogTen";

import 'swiper/css';
import "swiper/css/navigation";
import cls from "./blogTenCarousel.module.scss"

SwiperCore.use([Navigation])

const BlogTenCarousel = () => {
    const array = [...Array(5)];
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.swiper} ${cls[i18n.language]}`}>
            <Container maxWidth="xl">
                <div className={cls.title}>

                    <h2> FROM THE BLOG</h2>
                    <div className={cls.prev} ref={navigationPrevRef}>
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className={cls.next} ref={navigationNextRef}>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    loop={false}
                    spaceBetween={20}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}>
                    {array.map((_, idx) =>
                        <SwiperSlide key={idx}>
                            <BlogTen />
                        </SwiperSlide>
                    )}

                </Swiper>
            </Container>
        </div>
    )
}
export default BlogTenCarousel;