import { useState } from 'react';

import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';
import SaleFourty from '../../Sale/SaleFourty/SaleFourty';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection129.module.scss';

const Collection129 = ({ withSale, rounded }) => {
  const [currentCategory, setCurrentCategory] = useState(1)
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
      slidesPerView: 6,
    },
  }

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>
      {withSale &&
        <div className={cls.sale}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SaleFourty />
            </Grid>
            <Grid item xs={12} md={6}>
              <SaleFourty />
            </Grid>
          </Grid>
        </div>
      }
      <div className={cls.homeCategory__wrapper}>
        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>
          <h3>
            Electronics
            <span></span>
          </h3>
          <p>
            Go to Daily Deals Section <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>
          </p>
        </div>
        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <Grid container>
            {[...Array(10)].map((_, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={12 / 5} key={idx}>
                <ProductFifty />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Collection129;