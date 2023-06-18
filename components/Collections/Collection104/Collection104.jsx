import ProductTwo from '../../ProductCard/ProductTwo/ProductTwo'
import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import cls from './collection104.module.scss';

const CollectionTwenty = ({slides, title}) => {
  const myArr = [0, 1, 2, 3, 4, 5, 6];
  const breakpoints = {
    400: {
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
      slidesPerView: slides
    },
  }

  return (
    <div className={cls.collecton}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={cls.head}>
            <h6>
              {title}
            </h6>
            <a href="demo19-shop.html" class="btn btn-dark">View All</a>
          </div>
          <Swiper breakpoints={breakpoints} loop={false} spaceBetween={20}>
            {myArr.map((_, idx) =>
              <SwiperSlide key={idx}>
                <ProductTwo />
              </SwiperSlide>
            )}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionTwenty;