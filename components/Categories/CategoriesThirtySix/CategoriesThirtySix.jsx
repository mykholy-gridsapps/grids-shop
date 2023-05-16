import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './categoriesThirtySix.module.scss';

const CategoriesThirtySix = () => {
  const array = [...Array(12)];

  const pagination = {
    clickable: true
  };

  const breakpoints = {
    300: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    },
  }

  return (
    <div className={cls.categories}>
      <h2 className={cls.title}>
        Most Popular Categories
      </h2>
      <Swiper className={`${cls.swiper} centerBullets`} slidesPerView={2} loop={false} spaceBetween={10} breakpoints={breakpoints} pagination={pagination} modules={[Pagination]}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.category}>
              <img src="/imgs/sh.png" alt="product" />
              <h6>Clothing</h6>
              <p>255 items</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CategoriesThirtySix;
