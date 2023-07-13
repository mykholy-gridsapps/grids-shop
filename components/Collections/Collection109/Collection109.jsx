import { useState } from 'react';

import ProductFourtyNine from '../../ProductCard/ProductFourtyNine/ProductFourtyNine';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection109.module.scss';

const Collection109 = ({ rounded }) => {
  const [currentCategory, setCurrentCategory] = useState(1)
  const { i18n } = useTranslation();

  const renderView = () => {
    switch (currentCategory) {
      case 1:
        return (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={cls.swiper}
          >
            {[...Array(3)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      case 2:
        return (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={cls.swiper}
          >
            {[...Array(3)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      case 3:
        return (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={cls.swiper}
          >
            {[...Array(3)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      case 4:
        return (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={cls.swiper}
          >
            {[...Array(3)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductFourtyNine />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        )
    }
  }

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>

      <Container maxWidth="xxl">

        <div className={cls.homeCategory__wrapper}>

          <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>

            <h3>Electronics</h3>

            <div>
              <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Labtops</span>
              <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>Memory Cards</span>
              <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>External Hard Drives</span>
              <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>SSDs</span>
            </div>

          </div>

          <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>

            {renderView()}

          </div>

        </div>

      </Container>

    </div>
  )
}

export default Collection109;