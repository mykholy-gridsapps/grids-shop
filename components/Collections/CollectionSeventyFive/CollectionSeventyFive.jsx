import { useState } from 'react';

import ProductThirtyFour from '../../ProductCard/ProductThirtyFour/ProductThirtyFour';
import SaleFourtyEight from '../../Sale/SaleFourtyEight/SaleFourtyEight';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionSeventyFive.module.scss';

const CollectionSeventyFive = () => {
  const { i18n } = useTranslation('common');
  const [activeLink, setActiveLink] = useState('NEW');

  const array = [...Array(8)];
  const navigation = {
    nextEl: '.custom-swiper-next2',
    prevEl: '.custom-swiper-prev2',
  };

  const links = [
    'NEW',
    'FEATURED',
    'TOP SELLERS'
  ];
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
      slidesPerView: 4
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <SaleFourtyEight />
        </Grid>
        <Grid item xs={12} md={9}>
          <div className={cls.head}>
            <div>
              <h4>MOST POPULAR FOR MAN</h4>
              <span></span>
              <ul>
                {links.map((link, idx) => (
                  <li key={idx} className={activeLink === link ? cls.active : ''} onClick={() => setActiveLink(link)}>{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <button className='custom-swiper-prev2'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
              <button className='custom-swiper-next2'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
            </div>
          </div>
          <div className={cls.products}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={1}
              modules={[Navigation]}
              navigation={navigation}
              breakpoints={breakpoints}
              className={cls.swiper}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductThirtyFour background={`var(--default-background)`} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSeventyFive;
