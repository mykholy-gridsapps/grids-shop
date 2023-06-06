import { useState } from 'react';

import ProductTwentyTwo from '../../ProductCard/ProductTwentyTwo/ProductTwentyTwo';
import SaleSeventyOne from '../../Sale/SaleSeventyOne/SaleSeventyOne';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection101.module.scss';

const Collection101 = () => {
  const { i18n } = useTranslation('common');

  const [activeTab, setActiveTab] = useState('All');
  const array = [...Array(3)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  const tabs = [
    'All',
    'Best Seller',
    'Most Viewed',
    'Top Brands'
  ]

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <div>
          <h4>Refrigerators & Freezers</h4>
          <p>Special products in this month.</p>
        </div>
        <div className={cls.actions}>
          <ul>
            {tabs.map((tab, idx) => (
              <li onClick={() => setActiveTab(tab)} className={activeTab === tab ? cls.active : ''}>{tab}</li>
            ))}
          </ul>
          <div>
            <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
            <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
          </div>
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
              <Grid item xs={12} sm={6} md={6} lg={4} xl={12 / 5}>
                <SaleSeventyOne />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={12 / 5}>
                <ProductTwentyTwo />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={12 / 5}>
                <ProductTwentyTwo />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={12 / 5}>
                <ProductTwentyTwo />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={12 / 5}>
                <ProductTwentyTwo />
              </Grid>
            </Grid>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default Collection101;
