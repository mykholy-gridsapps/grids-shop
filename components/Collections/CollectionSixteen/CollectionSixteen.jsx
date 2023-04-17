import ProductNine from "../../ProductCard/ProductNine/ProductNine";
import SaleThirtyTwo from "../../Sale/SaleThirtyTwo/SaleThirtyTwo";

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import cls from './collectionSixteen.module.scss';

const CollectionSixteen = () => {
  const myArr = [0, 1, 2, 3, 4];
  const breakpoints = {
    400: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
          <SaleThirtyTwo />
        </Grid>
        <Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
          <Swiper breakpoints={breakpoints} loop={false} spaceBetween={10}>
            {myArr.map((_, idx) =>
              <SwiperSlide key={idx}>
                <ProductNine />
              </SwiperSlide>
            )}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSixteen;