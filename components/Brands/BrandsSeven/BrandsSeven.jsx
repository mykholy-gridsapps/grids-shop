import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';

import cls from './brandsSeven.module.scss'
import { Container } from "@mui/system";

const BrandsSeven = () => {
    const navigation = {
    };
    return (
        <div className={cls.brands}>
            <Container maxWidth="xl">
                <h2>Featured Brands</h2>
                <p>All our new arrivals in a exclusive brand selection</p>
                <Swiper slidesPerView={7} loop={true} spaceBetween={30} navigation={navigation} modules={[Navigation]}>
                    <SwiperSlide>
                        <div className={cls.brand}>
                            <img src="./imgs/brands/brand1.png" alt="brand" width="140" height="60" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cls.brand}>
                            <img src="./imgs/brands/brand2.png" alt="brand" width="140" height="60" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cls.brand}>
                            <img src="./imgs/brands/brand3.png" alt="brand" width="140" height="60" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cls.brand}>
                            <img src="./imgs/brands/brand4.png" alt="brand" width="140" height="60" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cls.brand}>
                            <img src="./imgs/brands/brand5.png" alt="brand" width="140" height="60" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cls.brand}>
                            <img src="./imgs/brands/brand6.png" alt="brand" width="140" height="60" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}
export default BrandsSeven;