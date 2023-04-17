import ProductEleven from '../../ProductCard/ProductEleven/ProductEleven';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import cls from './collectionTwenty.module.scss';

const CollectionTwenty = () => {
  const myArr = [0, 1, 2, 3, 4];
  const breakpoints = {
    400: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  }

  return (
    <div className={cls.collecton}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={cls.head}>
            <h6>
              Best Selling Products
              <span></span>
            </h6>
          </div>
          <Grid container>
            <Swiper breakpoints={breakpoints} loop={false} spaceBetween={10}>
              {myArr.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductEleven />
                </SwiperSlide>
              )}
            </Swiper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionTwenty;