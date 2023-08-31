/* eslint-disable @next/next/no-img-element */
import CategoriesFifty from '../../Categories/CategoriesFifty/CategoriesFifty';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './sliderFourtyFive.module.scss';

const SliderFourtyFive = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.header}>
      <div className={`${cls.header_wrapper}`}>
        <Container maxWidth="xxl">
          <Swiper
            slidesPerView={1}
            loop={false}
            spaceBetween={20}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={`${cls.header__slider} header__slider`}>
            <SwiperSlide>
              <div className={`${cls.slide} slide`}>
                <Grid container alignItems="center" spacing={5}>
                  <Grid item xs={12} md={5}>
                    <p>Limited</p>
                    <h1 className={cls.title}>The New Standard</h1>
                    <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <img src="/imgs/header/Smartwatchess.png" alt="offerImage" />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div className={cls.details}>
                      <h4>Wiudescreen 4K SUHD TV</h4>
                      <p className={cls.price}>
                        $3.299.00
                      </p>
                      <button>But Now</button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${cls.slide} slide`}>
                <Grid container alignItems="center" spacing={5}>
                  <Grid item xs={12} md={5}>
                    <p>Limited</p>
                    <h1 className={cls.title}>The New Standard</h1>
                    <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <img src="/imgs/header/Smartphones.png" alt="offerImage" />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div className={cls.details}>
                      <h4>Wiudescreen 4K SUHD TV</h4>
                      <p className={cls.price}>
                        $3.299.00
                      </p>
                      <button>But Now</button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${cls.slide} slide`}>
                <Grid container alignItems="center" spacing={5}>
                  <Grid item xs={12} md={5}>
                    <p>Limited</p>
                    <h1 className={cls.title}>The New Standard</h1>
                    <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <img src="/imgs/header/iphone.png" alt="offerImage" />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div className={cls.details}>
                      <h4>Wiudescreen 4K SUHD TV</h4>
                      <p className={cls.price}>
                        $3.299.00
                      </p>
                      <button>But Now</button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
      <div className={cls.categories}>
        <Container maxWidth="xxl">
          <CategoriesFifty />
        </Container>
      </div>
    </div>
  )
}

export default SliderFourtyFive;