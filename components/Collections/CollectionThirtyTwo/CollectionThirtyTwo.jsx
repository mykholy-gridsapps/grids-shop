import ProductTwentyOne from '../../ProductCard/ProductTwentyOne/ProductTwentyOne';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

import cls from './collectionThirtyTwo.module.scss';

const CollectionThirtyTwo = () => {
  const array = [...Array(3)];
  const pagination = {}

  return (
    <div className={cls.collection}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <h4>Featured Items</h4>
          <div className={cls.part}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              pagination={pagination}
              modules={[Pagination]}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductTwentyOne />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h4>Best Sellers</h4>
          <div className={cls.part}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              pagination={pagination}
              modules={[Pagination]}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductTwentyOne />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h4>New Arrivals</h4>
          <div className={cls.part}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              pagination={pagination}
              modules={[Pagination]}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductTwentyOne />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionThirtyTwo
