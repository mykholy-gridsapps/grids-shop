import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './vendors.module.scss';

const VendorsFour = () => {
  const array = [...Array(6)];
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    550: {
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
      <div className={cls.head}>
        <h4>Top Weekly Vendors</h4>
      </div>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.vendor}>
              <div className={cls.details}>
                <img src="/imgs/vendor.jpg" alt="vendor" />
                <div className={cls.content}>
                  <div>
                    <h6>Vendor 1</h6>
                    <p>(27 Products)</p>
                  </div>
                  <Rating name="read-only" value={4} readOnly />
                </div>
              </div>
              <div className={cls.images}>
                <img src="/imgs/shoe1.jpg" alt="product" />
                <img src="/imgs/shoe1.jpg" alt="product" />
                <img src="/imgs/shoe1.jpg" alt="product" />
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

    </div>
  )
}

export default VendorsFour;
