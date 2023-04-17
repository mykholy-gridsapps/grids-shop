import React, { useState } from 'react';

import ProductTwentyOne from '../../ProductCard/ProductTwentyOne/ProductTwentyOne';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionThirtyThree.module.scss';

const CollectionThirtyThree = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const { i18n } = useTranslation('common');

  const array = [...Array(8)];
  const breakpoints = {
    350: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  }

  return (
    <div className={cls.categories}>
      <h4>Top Categories Of The Month</h4>
      <div className={cls.head}>
        <Swiper
          slidesPerView={1}
          loop={false}
          spaceBetween={0}
          breakpoints={breakpoints}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx} className={`${cls.slide} ${cls[i18n.language]}`}>
              <div className={`${cls.category} ${activeCategory === idx ? cls.active : ''}`} onClick={() => setActiveCategory(idx)}>
                <i className="fa-light fa-camera"></i>
                <h6>Fashion</h6>
                <span></span>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className={cls.products}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductTwentyOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductTwentyOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductTwentyOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductTwentyOne />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default CollectionThirtyThree;
