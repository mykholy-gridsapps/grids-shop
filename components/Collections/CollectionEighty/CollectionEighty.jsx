import { useState } from 'react';

import ProductThirtySix from '../../ProductCard/ProductThirtySix/ProductThirtySix';
import SaleFourtyFour from '../../Sale/SaleFourtyFour/SaleFourtyFour';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import cls from './collectionEighty.module.scss';

const CollectionEighty = () => {
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
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
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
                <button className='custom-swiper-prev2'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
                <button className='custom-swiper-next2'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
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
                  <ProductThirtySix />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SaleFourtyFour />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SaleFourtyFour />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SaleFourtyFour />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionEighty;
