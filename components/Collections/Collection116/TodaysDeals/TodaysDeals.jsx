import ProductFifty from '../../../ProductCard/ProductFifty/ProductFifty';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import cls from './todaysDeals.module.scss';

const TodaysDeals = ({ slides }) => {
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
      slidesPerView: slides || 5,
    },
  }

  return (
    <div className={cls.todayDeals}>
      <Swiper
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

export default TodaysDeals