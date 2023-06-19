import Link from 'next/link';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './sliderTwenty.module.scss';

const SliderTwenty = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(3)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.slider}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} lg={3}>
          <div className={cls.part}>
            <div className={cls.content}>
              <h6>Comfort Chair</h6>
              <Link href='/'>
                Shop Now
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <div className={`${cls.bigWrapper} ${cls[i18n.language]}`}>
            <Swiper
              modules={[Navigation]}
              navigation={navigation}
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              className={cls.swiper}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <div className={cls.big}>
                    <div className={cls.content}>
                      <p>Big & Fresh Offers</p>
                      <h2>Decora & Crafts</h2>
                      <span>Sale On This Weekend</span>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
            <div className={cls.btns}>
              <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-left fa-sm`}></i></button>
              <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-right fa-sm`}></i></button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <div className={cls.part}>
            <div className={cls.content}>
              <h6>Comfort Chair</h6>
              <Link href='/'>
                Shop Now
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SliderTwenty
