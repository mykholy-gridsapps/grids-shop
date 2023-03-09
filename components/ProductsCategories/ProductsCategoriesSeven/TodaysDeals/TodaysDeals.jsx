import ProductOne from "./../../../ProductCard/ProductOne/ProductOne";

import { Swiper, SwiperSlide } from 'swiper/react';

import cls from "./todaysDeals.module.scss";

const TodaysDeals = () => {
  const myArr = [0, 1, 2, 3, 4];
  const breakpoints = {
    400: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 3
    },
    992: {
        slidesPerView: 3
    },
    1200: {
        slidesPerView: 4
    },
  }

  return (
    <div className={cls.todayDeals}>
      <Swiper breakpoints={breakpoints} loop={false} spaceBetween={10}>
          {myArr.map((_, idx) =>
            <SwiperSlide key={idx}>
              <ProductOne />
            </SwiperSlide>
          )}
      </Swiper>
    </div>
  );
};

export default TodaysDeals;
