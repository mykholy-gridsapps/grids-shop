import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";


import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoryElevenCarousel.module.scss'

import CategoryEleven from "./CategoryEleven";

const CategoryElevenCarousel = () => {
    const array = [...Array(9)]

    return (
        <div className={cls.categoriesCarousel}>
            <h2 className={cls.sectionTitle}>Browse By Category</h2>
            <Swiper slidesPerView={4} spaceBetween={20} navigation={true} modules={[Navigation]}>
                {array.map(_ =>
                    <SwiperSlide>
                        <CategoryEleven />
                    </SwiperSlide>
                )}
            </Swiper>
        </div >
    )
}

export default CategoryElevenCarousel;