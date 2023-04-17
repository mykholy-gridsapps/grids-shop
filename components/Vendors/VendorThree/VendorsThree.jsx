import Link from 'next/link';

import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './vendorsThree.module.scss';

const VendorsThree = () => {
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
                <div className={cls.content}>
                  <h4>Vendor one</h4>
                  <div className={cls.reviews}>
                    <Rating name="read-only" value={4} readOnly />
                    <p>(3 Reviews)</p>
                  </div>
                  <Link href="/">
                    BROWSE THIS VENDOR
                  </Link>
                  <div className={cls.images}>
                    <img src="/imgs/shoe1.jpg" alt="product" />
                    <img src="/imgs/shoe1.jpg" alt="product" />
                    <img src="/imgs/shoe1.jpg" alt="product" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div >
  )
}

export default VendorsThree;
