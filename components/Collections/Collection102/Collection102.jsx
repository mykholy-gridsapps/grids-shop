import { useState } from 'react';

import ProductTwentyTwo from '../../ProductCard/ProductTwentyTwo/ProductTwentyTwo';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection102.module.scss';

const Collection102 = ({ slides }) => {
  const [activeTab, setActiveTab] = useState('Best seller')
  const { i18n } = useTranslation('common');
  const array = [...Array(3)];
  const arr = [...Array(slides || 5)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  const tabs = [
    'Best seller',
    'Most viewed',
    'Top brands'
  ]

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={cls.head}>
            <div className={cls.tabs}>
              {tabs.map((tab, idx) => (
                <h5 key={idx} className={activeTab === tab ? cls.active : ''} onClick={() => setActiveTab(tab)}>{tab}</h5>
              ))}
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
            spaceBetween={20}
            className={cls.swiper}>
            {array.map((_, idx) =>
              <SwiperSlide key={idx}>
                <Grid container spacing={2}>
                  {arr.map((_, idx) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={12 / 5}>
                      <ProductTwentyTwo />
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
            )}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Collection102;
