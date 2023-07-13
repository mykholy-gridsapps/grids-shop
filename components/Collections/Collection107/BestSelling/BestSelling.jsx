import ProductFifty from '../../../ProductCard/ProductFifty/ProductFifty';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import cls from './bestSelling.module.scss';

const BestSelling = () => {
  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  }

  return (
    <div className={cls.bestSelling}>
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={1}
        className={cls.swiper}
        breakpoints={breakpoints}>
        {[...Array(7)].map((item, idx) => (
          <SwiperSlide>
            <div className={cls.grid} key={idx}>
              <ProductFifty />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BestSelling;