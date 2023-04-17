import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import cls from './categoriesTwentyEight.module.scss';

const CategoriesTwentyEight = () => {
  const array = [...Array(8)];

  const breakpoints = {
    300: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  }

  return (
    <div className={cls.categories}>
      <h2 className={cls.title}>
        Top Categories Of The Month
      </h2>
      <Swiper slidesPerView={2} loop={false} spaceBetween={20} breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.category}>
              <img src="/imgs/shirt.jpg" alt="product" />
              <h5>Clothing</h5>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CategoriesTwentyEight;
