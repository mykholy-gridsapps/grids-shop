import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './vendorsTwo.module.scss';

const VendorsTwo = () => {
  const array = [...Array(6)];

  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

  return (
    <div className={cls.vendors}>
      <h4>Top Weekly Vendors</h4>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={10}
        breakpoints={breakpoints}
        className={cls.swiper}
      >
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.vendor}>
              <img src="/imgs/venBack.jpg" alt="vendor" loading='lazy' />
              <div className={cls.details}>
                <div className={cls.imageWrapper}>
                  <img src="/imgs/vendo.jpg" alt="vendor" loading='lazy' />
                </div>
                <h4>OAIO STORE</h4>
                <p>27 Products</p>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default VendorsTwo
