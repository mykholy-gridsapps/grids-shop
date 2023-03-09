import { useState } from 'react';

import SaleTwenty from '../../Sale/SaleTwenty/SaleTwenty';
import ProductSix from '../../ProductCard/ProductSix/ProductSix';

import { Swiper, SwiperSlide } from 'swiper/react';

import Grid from '@mui/material/Grid';

import cls from './productsCategoriesNine.module.scss';

const ProductsCategoriesNine = () => {
  const [currentTab, setCurrentTab] = useState('Best Sellers');
  const tabs = ["Best Sellers", "Audio Speakers", "Cameras", "Lamps", "Computer", "Mobile Phones"];

  const myArr = [0, 1, 2, 3, 4];
  const breakpoints = {
    400: {
        slidesPerView: 1
    },
    550: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 2
    },
    992: {
        slidesPerView: 3
    },
    1200: {
        slidesPerView: 4
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className={cls.salePart}>
            <h6>Special Offer</h6>
            <SaleTwenty />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className={cls.tabs}>
            {tabs.map((tab, idx) => (
              <span
                key={idx}
                className={currentTab === tab ? cls.active : ""}
                onClick={() => setCurrentTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
          <Swiper breakpoints={breakpoints} loop={false} spaceBetween={10}>
              {myArr.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductSix />
                </SwiperSlide>
              )}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductsCategoriesNine