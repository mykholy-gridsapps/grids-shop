import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from "./featuresFourteen.module.scss"

const FeaturesFourteen = () => {
    const array = [...Array(5)];
    return (
        <div className={cls.featureBoxesContainer}>
            <div className={cls.head}>
                <span>EFFECTIVE WAYS</span>
                <h2>Our Best Service</h2>
                <p>Authorities in our business will tell in no uncertain terms.</p>
            </div>
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
                {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                        <div className={cls.featureBox}>
                            <i className={cls.iconEarphonesAlt}></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="mb-0 pb-1">Customer Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.
                                </p>
                            </div>

                            <button>View More</button>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default FeaturesFourteen;