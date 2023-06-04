import ProductTwentyThree from '../../ProductCard/ProductTwentyThree/ProductTwentyThree';
import SaleFourtyFour from '../../Sale/SaleFourtyFour/SaleFourtyFour';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionNinetyEight.module.scss';

const CollectionNinetyEight = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(3)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <div>
          <h4>Top Selling Products</h4>
          <p>Special products in this month.</p>
        </div>
        <div>
          <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
          <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={navigation}
        slidesPerView={1}
        loop={false}
        spaceBetween={10}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductTwentyThree />
              </Grid>
            </Grid>
          </SwiperSlide>
        )}
      </Swiper>

      <div className={cls.sales}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <SaleFourtyFour />
          </Grid>
          <Grid item md={6}>
            <SaleFourtyFour />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default CollectionNinetyEight;
