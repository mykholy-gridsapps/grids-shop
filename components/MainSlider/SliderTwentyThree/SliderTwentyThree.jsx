import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderTwentyThree.module.scss';

const SliderTwentyThree = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.slider}>
      <div className={cls.main}>
        <Swiper
          slidesPerView={1}
          loop={false}
          spaceBetween={10}
          pagination={pagination}
          modules={[Pagination]}
          className='bottomBullets2'>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.slide}>
                <Grid container>
                  <Grid item xs={12} md={8} lg={7} xl={6}>
                    <h2>Don't miss our amazing deals</h2>
                    <p>Save 50% off on your first sale</p>
                    <div className={`${cls.subscribe} ${cls[i18n.language]}`}>
                      <input type="text" placeholder='Your email address' />
                      <button>Shop Now</button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  )
}

export default SliderTwentyThree;
