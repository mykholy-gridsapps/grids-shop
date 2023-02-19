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
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={0}
                    breakpoints={{
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        588: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        797: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}>
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