import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import cls from "./blogSevenCarousel.module.scss"
import 'swiper/css';
import "swiper/css/pagination";
import BlogSeven from "./BlogSeven";
import { Container } from "@mui/system";


const BlogSevenCarousel = () => {
    const pagination = {
        clickable: true,

    };
    const array = [...Array(5)]
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

                    <Swiper slidesPerView={2} loop={false} spaceBetween={20} pagination={pagination} modules={[Pagination]}>
                        {array.map(_ =>
                            <SwiperSlide>
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