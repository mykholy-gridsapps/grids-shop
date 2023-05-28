import { useState } from 'react';

import ProductThirtyOne from '../../ProductCard/ProductFourty/ProductFourty';
import SaleFourtyOne from '../../Sale/SaleFourtyOne/SaleFourtyOne';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionEightyFive.module.scss';

const CollectionEightyFive = ({ reverse }) => {
  const { i18n } = useTranslation('common');

  const [activeLink, setActiveLink] = useState('NEW')

  const array = [...Array(3)];
  const products = [...Array(8)];
  const navigation = {
    nextEl: '.custom-swiper-next2',
    prevEl: '.custom-swiper-prev2',
  };

  const links = [
    'NEW',
    'FEATURED',
    'TOP SELLERS'
  ]

  return (
    <div className={cls.collection}>
      <Grid container spacing={2} justifyContent="center" flexDirection={reverse ? 'row-reverse' : ''}>
        <Grid item xs={12} lg={3}>
          <div className={cls.big}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={12}>
                <SaleFourtyOne />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <SaleFourtyOne />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} lg={9}>
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
              slidesPerView={1}
              loop={false}
              spaceBetween={20}
              modules={[Navigation]}
              navigation={navigation}
              className={cls.swiper}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <Grid container>
                    {products.map((_, idx) => (
                      <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={idx}>
                        <ProductThirtyOne />
                      </Grid>
                    ))}
                  </Grid>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionEightyFive;
