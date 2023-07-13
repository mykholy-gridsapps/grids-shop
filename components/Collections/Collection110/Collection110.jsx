import { useState } from 'react';

import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';
import SaleTwentySeven from '../../Sale/SaleTwentySeven/SaleTwentySeven';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection110.module.scss';

const Collection110 = ({ rounded }) => {
  const [currentCategory, setCurrentCategory] = useState(1)
  const { i18n } = useTranslation();

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  const renderView = () => {
    switch (currentCategory) {
      case 1:
        return (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={navigation}
            className={cls.swiper}
          >
            {[...Array(3)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      case 2:
        return (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={navigation}
            className={cls.swiper}
          >
            {[...Array(3)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      case 3:
        return (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={navigation}
            className={cls.swiper}
          >
            {[...Array(3)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      case 4:
        return (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={navigation}
            className={cls.swiper}
          >
            {[...Array(3)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ProductFifty />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        )
    }
  }

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>
      <Container maxWidth="xxl">
        <SaleTwentySeven />
        <div className={cls.homeCategory__wrapper}>
          <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>
            <h3>Electronics</h3>
            <div>
              <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
              <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
            </div>
          </div>
          <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
            {renderView()}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Collection110;