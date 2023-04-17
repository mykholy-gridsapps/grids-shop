import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './categoriesTwentySix.module.scss';
import { Link } from '@mui/material';

const CategoriesTwentySix = () => {
  const array = [...Array(8)];
  const breakpoints = {
    200: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    }
  }

  return (
    <div className={cls.categories}>
      <h4>Top Categories Of The Month</h4>

      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.category}>
              <img src="/imgs/shoes.png" alt="product" />
              <div className={cls.details}>
                <h6>Shoes</h6>
                <Link href='/'>
                  Shop Now
                  <span></span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CategoriesTwentySix
