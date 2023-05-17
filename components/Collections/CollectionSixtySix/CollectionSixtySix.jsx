import Categories from './Categories/Categories';
import ProductThirtyTwo from '../../ProductCard/ProductThirtyTwo/ProductThirtyTwo';
import SaleFourtySeven from '../../Sale/SaleFourtySeven/SaleFourtySeven';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './collectionSixtySix.module.scss';

const CollectionSixtySix = () => {
  const array = [...Array(6)];
  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Categories />
        </Grid>
        <Grid item xs={12} md={9}>
          <div className={cls.products}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              breakpoints={breakpoints}
            >
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductThirtyTwo />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSixtySix;
