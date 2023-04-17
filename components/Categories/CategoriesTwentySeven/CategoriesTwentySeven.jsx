import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './categoriesTwentySeven.module.scss';

const CategoriesTwentySeven = () => {
  const array = [...Array(10)];
  const breakpoints = {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }
  return (
    <div className={cls.categories}>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.category}>
              <i className="fa-light fa-camera"></i>
              <h6>Cameras</h6>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CategoriesTwentySeven
