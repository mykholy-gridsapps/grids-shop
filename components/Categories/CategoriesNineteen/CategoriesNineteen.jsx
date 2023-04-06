import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import cls from './categoriesNineteen.module.scss';

const CategoriesNineteen = () => {
  const array = [...Array(5)];

  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }

  return (
    <div className={cls.categories}>
      <h2 className={cls.title}>
        Popular Categories
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

export default CategoriesNineteen
