import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from "./featuresEighteen.module.scss"

const FeaturesEighteen = () => {
    const array = [...Array(3)];
    return (
        <div className={cls.featureBoxesContainer}>
            <Swiper
                slidesPerView={1}
                loop={false}
                spaceBetween={20}
                className={cls.swiper}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}>
                <SwiperSlide>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-truck-fast"></i>

                        <div className={cls.featureBoxContent}>
                            <h3>Free Shipping on Orders Over $99</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-circle-dollar"></i>

                        <div className={cls.featureBoxContent}>
                            <h3>Up to 40% OFF on Selected Items</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-credit-card-front"></i>

                        <div className={cls.featureBoxContent}>
                            <h3>100% Secure Payment</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FeaturesEighteen;