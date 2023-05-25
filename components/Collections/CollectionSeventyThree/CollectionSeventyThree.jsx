import ProductThirtyFour from '../../ProductCard/ProductThirtyFour/ProductThirtyFour';
import SaleFourtyFour from '../../Sale/SaleFourtyFour/SaleFourtyFour';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionSeventyThree.module.scss';

const CollectionSeventyThree = () => {
  const { i18n } = useTranslation('common');

  const products = [...Array(12)];
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
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 6
    },
  }

  return (
    <div className={cls.collection}>
      <Container maxWidth="xxl">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <div className={cls.products}>
              <div className={cls.head}>
                <div className={cls.title}>
                  <h4>SPECIAL OFFER</h4>
                  <span></span>
                </div>
                <div>
                  <button className='custom-swiper-prev2'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
                  <button className='custom-swiper-next2'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
                </div>
              </div>
              <Swiper
                slidesPerView={1}
                loop={false}
                spaceBetween={20}
                modules={[Navigation]}
                navigation={navigation}
                breakpoints={breakpoints}
                className={cls.swiper}>
                {products.map((_, idx) =>
                  <SwiperSlide key={idx}>
                    <ProductThirtyFour />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SaleFourtyFour />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SaleFourtyFour />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SaleFourtyFour />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SaleFourtyFour />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CollectionSeventyThree;
