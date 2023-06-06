import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './categoriesThirty.module.scss';

const CategoriesThirty = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(3)];
  const arr = [...Array(16)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.categories}>
      <div className={cls.head}>
        <div>
          <h4>Featured Categories</h4>
          <p>Choose your necessary products from this feature categories.</p>
        </div>
        <div>
          <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
          <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
        </div>
      </div>
      <Grid container>
        <Swiper
          modules={[Navigation]}
          navigation={navigation}
          slidesPerView={1}
          loop={false}
          spaceBetween={10}
          className={cls.swiper}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <Grid container spacing={1} justifyContent="center">
                {arr.map((_, idx) => (
                  <Grid item xs={6} sm={4} md={2} lg={1.5} key={idx}>
                    <div className={cls.category}>
                      <img src="/imgs/sh.png" alt="category" />
                      <h6>Nike Shoes</h6>
                      <p>625 items</p>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </SwiperSlide>
          )}
        </Swiper>
      </Grid>
    </div>
  )
}

export default CategoriesThirty;
