import { useState } from 'react';

import ProductThirtyFour from '../../ProductCard/ProductThirtyFour/ProductThirtyFour';
import BrandsOne from '../../Brands/BrandsOne/BrandsOne';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import cls from './collectionSeventyTwo.module.scss';

const CollectionSeventyTwo = ({ slides }) => {
  const products = [...Array(10)];
  const navigation = {
    nextEl: '.custom-swiper-next2',
    prevEl: '.custom-swiper-prev2',
  };

  const breakpoints = {
    300: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    },
  }

  return (
    <div className={cls.collection}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <div className={cls.products}>
              <div className={cls.head}>
                <div>
                  <h4>
                    SPECIAL OFFER
                    <span></span>
                  </h4>
                </div>
                <div>
                  <button className='custom-swiper-prev2'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
                  <button className='custom-swiper-next2'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
                </div>
              </div>
              <Swiper
                loop={false}
                spaceBetween={20}
                modules={[Navigation]}
                navigation={navigation}
                className={cls.swiper}
                breakpoints={breakpoints}
              >
                {products.map((_, idx) =>
                  <SwiperSlide key={idx}>
                    <ProductThirtyFour />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Grid>
          <Grid item xs={12}>
            <BrandsOne />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CollectionSeventyTwo;
