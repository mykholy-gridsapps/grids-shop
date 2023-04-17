import ProductSeventeen from '../../../ProductCard/ProductSeventeen/ProductSeventeen';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './bestSeller.module.scss';

const BestSeller = () => {
  const array = [...Array(3)];

  const breackpoints = {
    200: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    800: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 1
    },
  }

  return (
    <div className={cls.bestSeller}>
      <h3>Top 20 Best Seller</h3>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={0}
        breakpoints={breackpoints}
      >
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <ProductSeventeen />
            <ProductSeventeen />
            <ProductSeventeen />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default BestSeller
