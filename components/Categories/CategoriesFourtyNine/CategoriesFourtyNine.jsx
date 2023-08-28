import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './categoriesFourtyNine.module.scss';

const CategoriesFourtyNine = () => {
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
      slidesPerView: 8,
    },
  }

  return (
    <div className={cls.categories}>
      <Swiper className={`${cls.swiper} centerBullets`} slidesPerView={2} loop={false} spaceBetween={20} breakpoints={breakpoints} pagination={pagination} modules={[Pagination]}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.category}>
              <i className="fa-light fa-desktop"></i>
              <h6>Electronics</h6>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CategoriesFourtyNine;
