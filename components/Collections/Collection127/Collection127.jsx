import { useState } from 'react';

import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';
import OfferCardOne from '../../OfferCards/OfferCardFive/OfferCardFive';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection127.module.scss';

const Collection127 = ({ rounded }) => {
  const [currentCategory, setCurrentCategory] = useState(1)
  const { i18n } = useTranslation();

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>
      <div className={cls.homeCategory__wrapper}>
        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>
          <h3>
            Electronics
            <span></span>
          </h3>
          <div>
            <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>20% Off</span>
            <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>40% Off</span>
            <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>60% Off</span>
            <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>70% Off</span>
          </div>
          <p>
            Go to Daily Deals Section <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>
          </p>
        </div>
        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OfferCardOne />
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={9}>
              <Swiper
                spaceBetween={5}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={cls.swiper}
              >
                {[...Array(3)].map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <Grid container>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
                        <ProductFifty />
                      </Grid>
                    </Grid>
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

export default Collection127;