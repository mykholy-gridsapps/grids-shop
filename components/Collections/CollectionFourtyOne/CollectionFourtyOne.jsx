import ProductTwentyTwo from '../../ProductCard/ProductTwentyTwo/ProductTwentyTwo';
import ProductSeventeen from '../../ProductCard/ProductSeventeen/ProductSeventeen';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import cls from './collectionFourtyOne.module.scss';

const CollectionFourtyOne = () => {
  const array = [...Array(3)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  const navigation2 = {
    nextEl: '.custom-swiper-next2',
    prevEl: '.custom-swiper-prev2',
  };

  const breakpoints = {
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 1
    }
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <div className={cls.head}>
            <div>
              <h4>Refrigerators & Freezers</h4>
              <p>Special products in this month.</p>
            </div>
            <div className={cls.actions}>
              <button className='custom-swiper-prev'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
              <button className='custom-swiper-next'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={navigation}
            slidesPerView={1}
            loop={false}
            spaceBetween={20}
            className={cls.swiper}>
            {array.map((_, idx) =>
              <SwiperSlide key={idx}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ProductTwentyTwo />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ProductTwentyTwo />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ProductTwentyTwo />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ProductTwentyTwo />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ProductTwentyTwo />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ProductTwentyTwo />
                  </Grid>
                </Grid>
              </SwiperSlide>
            )}
          </Swiper>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className={cls.side}>
            <div className={cls.sideHead}>
              <h4>Best Seller</h4>
              <div>
                <button className='custom-swiper-prev2'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
                <button className='custom-swiper-next2'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
              </div>
            </div>
            <div className={cls.content}>
              <Swiper
                modules={[Navigation]}
                navigation={navigation2}
                slidesPerView={1}
                loop={false}
                spaceBetween={20}
                breakpoints={breakpoints}
                className={cls.swiper}>
                {array.map((_, idx) =>
                  <SwiperSlide key={idx}>
                    <ProductSeventeen />
                    <ProductSeventeen />
                    <ProductSeventeen />
                    <ProductSeventeen />
                    <ProductSeventeen />
                    <ProductSeventeen />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionFourtyOne;
