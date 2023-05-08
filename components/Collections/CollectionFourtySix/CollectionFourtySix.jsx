import CountDownTwo from '../../UIs/CountDownTwo/CountDownTwo';
import ProductSeventeen from '../../ProductCard/ProductSeventeen/ProductSeventeen';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './collectionFourtySix.module.scss';

const CollectionFourtySix = () => {
  const array = [...Array(5)];
  const pagination = { clickable: true };

  const breakpoints = {
    300: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }

  return (
    <div className={cls.collection}>
      <Grid container alignItems="center">
        <Grid item lg={6}>
          <div className={cls.image}>
            <img src="/imgs/sh.png" alt="product" />
          </div>
        </Grid>
        <Grid item lg={6}>
          <div className={cls.details}>
            <h2>Apple Shopping Event</h2>
            <p>Hurry and get discounts on all Apple devices up to 20%</p>
            <CountDownTwo daysCount={2} background="#fff" textColor="#000" />
            <button>Go Shopping</button>
          </div>
        </Grid>
        <Swiper
          slidesPerView={4}
          loop={false}
          pagination={pagination}
          modules={[Pagination]}
          className='centerBullets'
          breakpoints={breakpoints}
          spaceBetween={10}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.slide}>
                <ProductSeventeen />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </Grid>
    </div>
  )
}

export default CollectionFourtySix
