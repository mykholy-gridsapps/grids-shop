import ProductThree from '../../ProductCard/ProductThree/ProductThree';
import SaleSeven from '../../Sale/SaleSeven/SaleSeven';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

import cls from './collectionTen.module.scss';

const CollectionTen = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.wrapper}>
      <h5>Recently Released</h5>
      <div className={cls.collection}>
        <Grid container spacing={0.5}>
          <Grid item xs={12} md={4}>
            <div className={cls.sliderPart}>
              <Swiper slidesPerView={1} loop={true} spaceBetween={0} pagination={pagination} modules={[Pagination]}>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
              </Swiper>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={0.5}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default CollectionTen;