import ProductTwentySeven from '../../ProductCard/ProductTwentySeven/ProductTwentySeven';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionFourtyFour.module.scss';

const CollectionFourtyFour = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(4)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.collection}>
      <Grid container justifyContent="center" spacing={2}>
        {array.map((_, idx) => (
          <Grid item xs={12} sm={6} lg={5.5} key={idx}>
            <div className={cls.category}>
              <div className={cls.head}>
                <h6>New Arrivals</h6>
                <div>
                  <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
                  <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
                </div>
              </div>
              <div className={cls.products}>
                <Swiper
                  slidesPerView={1}
                  loop={false}
                  spaceBetween={10}
                  modules={[Navigation]}
                  navigation={navigation}
                  breakpoints={{
                    300: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}>
                  {array.map((_, idx) =>
                    <SwiperSlide key={idx}>
                      <ProductTwentySeven />
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CollectionFourtyFour
