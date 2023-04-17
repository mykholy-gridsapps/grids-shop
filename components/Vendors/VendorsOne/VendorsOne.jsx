import { useState } from 'react';

import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './vendorsOne.module.scss';

const VendorsOne = () => {
  const [rate, setRate] = useState(2);
  const array = [...Array(6)];
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
  return (
    <div className={cls.vendors}>
      <h6>Top Weekly Vendors</h6>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.vendor}>
              <div className={cls.images}>
                <img src="/imgs/shoes.png" alt="product image" loading="lazy" />
                <img src="/imgs/shoes.png" alt="product image" loading="lazy" />
                <img src="/imgs/shoes.png" alt="product image" loading="lazy" />
              </div>
              <div className={cls.details}>
                <img src="/imgs/vendor.jpg" alt="vendor" />
                <div>
                  <h6>Vendor1 <span>( 16 Products )</span></h6>
                  <Rating name="read-only" value={rate} readOnly />
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default VendorsOne;
