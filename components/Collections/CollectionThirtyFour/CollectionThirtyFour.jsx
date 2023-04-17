import ProductEighteen from '../../ProductCard/ProductEighteen/ProductEighteen';
import CountDown from '../../UIs/CountDown/CountDown';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './collectionThirtyFour.module.scss';

const CollectionThirtyFour = () => {
  const array = [...Array(5)];
  const breakpoints = {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.offer}>
            <h3>
              Special Offers!
              <br />
              Up to <span>50% OFF</span>
            </h3>
            <CountDown daysCount={2} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <Swiper
            slidesPerView={1}
            loop={false}
            spaceBetween={10}
            breakpoints={breakpoints}>
            {array.map((_, idx) =>
              <SwiperSlide key={idx}>
                <ProductEighteen />
              </SwiperSlide>
            )}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionThirtyFour;
