import { useState } from 'react';

import ProductFourtyThree from '../../ProductCard/ProductFourtyThree/ProductFourtyThree';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionNinetyTwo.module.scss';

const CollectionNinetyTwo = () => {
  const { i18n } = useTranslation('common');

  const [activeLink, setActiveLink] = useState('NEW');

  const products = [...Array(6)];
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
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <div className={cls.products}>
            <div className={cls.head}>
              <div>
                <h4>SPECIAL OFFER</h4>
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
            <Swiper
              loop={false}
              spaceBetween={20}
              modules={[Navigation]}
              navigation={navigation}
              breakpoints={breakpoints}
              className={cls.swiper}>
              {products.map((_, idx) => (
                <SwiperSlide key={idx}>
                  <ProductFourtyThree />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionNinetyTwo;
