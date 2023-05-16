import ProductFourtySeven from '../../ProductCard/ProductFourtySeven/ProductFourtySeven';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collectionFourtySeven.module.scss';

const CollectionFourtySeven = () => {
  const array = [...Array(3)];

  const breakpoints = {
    300: {
      slidesPerView: 1
    },
    568: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 1
    }
  }

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <div className={cls.deal}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <img src="/imgs/sh.png" alt="product" />
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={cls.details}>
                  <h2>
                    Nike Shoes
                    <br />
                    Collection
                  </h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ratione autem sint exercitationem.</p>
                  <ul>
                    <li><i className="fa-light fa-boot"></i> Shoes</li>
                    <li><i className="fa-light fa-boot"></i> Shoes</li>
                    <li><i className="fa-light fa-boot"></i> Shoes</li>
                    <li><i className="fa-light fa-boot"></i> Shoes</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={2}>
            {array.map((_, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <div className={cls.offer}>
                  <img src="/imgs/sale.jpg" alt="product" />
                  <h5>Xiaomi MI 11</h5>
                  <p>Discount up to 30%</p>
                  <button>view Details</button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className={cls.product}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              navigation={{}}
              breakpoints={breakpoints}
              modules={[Navigation]}
              className='lightSwiper'>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductFourtySeven />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionFourtySeven
