import SaleSix from '../../Sale/SaleSix/SaleSix';
import ProductSeventeen from '../../ProductCard/ProductSeventeen/ProductSeventeen';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './collectionThirtyFive.module.scss';

const CollectionThirtyFive = () => {
  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  const breakpoints = {
    400: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 1
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} lg={3}>
          <div className={cls.part}>
            <h6>New Arrivals</h6>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={20}
              pagination={pagination}
              modules={[Pagination]}
              breakpoints={breakpoints}
              className="centerBullets">
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductSeventeen />
                  <ProductSeventeen />
                  <ProductSeventeen />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SaleSix />
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className={cls.part}>
            <h6>On Sale</h6>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={20}
              pagination={pagination}
              modules={[Pagination]}
              breakpoints={breakpoints}
              className="centerBullets">
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductSeventeen />
                  <ProductSeventeen />
                  <ProductSeventeen />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionThirtyFive;
