import { useState } from 'react';

import ProductFourtyThree from '../../ProductCard/ProductFourtyThree/ProductFourtyThree';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionNinetyThree.module.scss';

const CollectionNinetyThree = () => {
  const { i18n } = useTranslation('common');

  const [activeLink, setActiveLink] = useState('NEW');

  const array = [...Array(2)];
  const products = [...Array(8)];
  const navigation = {
    nextEl: '.custom-swiper-next2',
    prevEl: '.custom-swiper-prev2',
  };

  const links = [
    'NEW',
    'FEATURED',
    'TOP SELLERS'
  ];

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
              slidesPerView={1}
              loop={false}
              spaceBetween={20}
              modules={[Navigation]}
              navigation={navigation}
              className={cls.swiper}>
              {array.map((_, idx) => (
                <SwiperSlide key={idx}>
                  <Grid container>
                    {products.map((_, idx) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                        <ProductFourtyThree />
                      </Grid>
                    ))}
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionNinetyThree;