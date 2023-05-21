import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import Container from '@mui/material/Container';

import 'swiper/css';
import "swiper/css/pagination";
import cls from './categoriesThirtyEight.module.scss';

const CategoriesThirtyEight = () => {
  const array = [...Array(12)];

  const pagination = {
    clickable: true
  };

  const breakpoints = {
    300: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 3,
    },
    768: {
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
      <Container maxWidth="xl">
        <h2 className={cls.title}>
          Top Categories
          <span></span>
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
      </Container>
    </div>
  )
}

export default CategoriesThirtyEight;
