import ProductThirtySix from '../../ProductCard/ProductThirtySix/ProductThirtySix';
import OfferCardSix from '../../OfferCards/OfferCardSix/OfferCardSix';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import 'swiper/css';
import cls from './collectionFiftyTwo.module.scss';

const CollectionFiftyTwo = () => {
  const breakpoints = {
    300: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    },
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <div className={cls.offerCard}>
            <OfferCardSix />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className={cls.products}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={breakpoints}>
              {[...Array(10)].map(((_, idx) => (
                <SwiperSlide key={idx}>
                  <ProductThirtySix />
                </SwiperSlide>
              )))}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionFiftyTwo;
