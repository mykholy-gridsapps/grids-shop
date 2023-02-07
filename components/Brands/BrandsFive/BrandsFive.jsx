import React from "react";
import { Container } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import 'swiper/css';

import cls from './brandsFive.module.scss'

const BrandsFive = () => {
    return (
        <div className={cls.brands}>
            <Container maxWidth='xxl'>
                <Swiper
                    slidesPerView={6}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={0}>
                    <SwiperSlide>
                        <img src="./imgs/brands/1.png" alt="brand" width="140" height="60" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./imgs/brands/2.png" alt="brand" width="140" height="60" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./imgs/brands/3.png" alt="brand" width="140" height="60" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./imgs/brands/4.png" alt="brand" width="140" height="60" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./imgs/brands/5.png" alt="brand" width="140" height="60" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./imgs/brands/6.png" alt="brand" width="140" height="60" />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}
export default BrandsFive;