import { useState } from 'react';

import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';
import SaleTwentySeven from '../../Sale/SaleTwentySeven/SaleTwentySeven';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection128.module.scss';

const Collection128 = ({ withSale }) => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const { i18n } = useTranslation();

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  }

  return (
    <div className={cls.homeCategory}>
      <div className={cls.sale}>
        {withSale &&
          <SaleTwentySeven />
        }
      </div>
      <div className={cls.homeCategory__wrapper}>
        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>
          <h3>
            Electronics
            <span></span>
          </h3>
          <div>
            <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Top 20</span>
            <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>All in One</span>
            <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>Laptops</span>
            <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>Gaming</span>
          </div>
        </div>
        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4} lg={3}>
              <img src="/imgs/salee.jpg" alt="sale" />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Swiper
                spaceBetween={5}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={cls.swiper}
                breakpoints={breakpoints}
              >
                {[...Array(10)].map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <ProductFifty />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Collection128;