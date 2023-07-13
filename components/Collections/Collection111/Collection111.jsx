import ProductAvailability from '../../Common/ProductAvailability/ProductAvailability';
import ProductTwentyFive from '../../ProductCard/ProductTwentyFive/ProductTwentyFive';
import SaleTwentySeven from '../../Sale/SaleTwentySeven/SaleTwentySeven';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './collection111.module.scss';

const Collection111 = () => {
  return (
    <div className={cls.collection}>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <div className={cls.latest}>
            <div className={cls.head}>
              <h4>
                Latest Products
                <span></span>
              </h4>
            </div>
            <ProductTwentyFive />
            <ProductTwentyFive />
            <ProductTwentyFive />
            <ProductTwentyFive />
          </div>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <h4>Deals of the week</h4>
          <Swiper
            slidesPerView={1}
            loop={false}
            spaceBetween={20}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className={cls.swiper}>
            {[...Array(3)].map((_, idx) =>
              <SwiperSlide key={idx}>
                <div className={cls.deal}>
                  <div className={cls.images}>
                    <div className={cls.badge}>
                      Save
                      <br />
                      20%
                    </div>
                    <img src="/imgs/chair.webp" alt="deal-image" />
                  </div>
                  <div className={cls.content}>
                    <h5>Ultra Wireless S50 Headphones S50 with Bluetooth</h5>
                    <p className={cls.price}>$39.99</p>
                    <ProductAvailability />
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
          <SaleTwentySeven />
        </Grid>
      </Grid>
    </div>
  )
}

export default Collection111