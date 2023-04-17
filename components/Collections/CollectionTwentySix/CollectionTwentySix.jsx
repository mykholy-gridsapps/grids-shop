import Recommend from './Recommend/Recommend';
import ProductEighteen from '../../ProductCard/ProductEighteen/ProductEighteen';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './collectionTwentySix.module.scss';
import SaleFourty from '../../Sale/SaleFourty/SaleFourty';

const CollectionTwentySix = () => {
  const array = [...Array(6)];
  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <Recommend />
        </Grid>
        <Grid item xs={12} lg={9}>
          <div className={cls.products}>
            <SaleFourty />
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              breakpoints={breakpoints}
            >
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductEighteen />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionTwentySix
