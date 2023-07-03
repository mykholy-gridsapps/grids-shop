/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './sliderFourtyOne.module.scss';

const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.header_wrapper}>
        <Container maxWidth="xxl">
          <Grid container spacing={3}>
            <Grid item xs={12} xl={9}>
              <Swiper
                slidesPerView={1}
                loop={false}
                spaceBetween={20}
                className={`${cls.header__slider} header__slider`}>
                <SwiperSlide>
                  <div className={`${cls.slide} slide`}>
                    <Grid container alignItems="center" spacing={5}>
                      <Grid item xs={12} md={6}>
                        <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                        <h1 className={cls.title}>The New Standard</h1>
                        <p className={cls.price}>$749</p>
                        <div className={cls.btn}>
                          <button>Start Buying</button>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <img src="/imgs/header/Smartwatchess.png" alt="offerImage" />
                      </Grid>
                    </Grid>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${cls.slide} slide`}>
                    <Grid container alignItems="center">
                      <Grid item xs={12} md={6}>
                        <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                        <h1 className={cls.title}>The New Standard</h1>
                        <p className={cls.price}>$749</p>
                        <div className={cls.btn}>
                          <button>Start Buying</button>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <img src="/imgs/header/Smartphones.png" alt="offerImage" />
                      </Grid>
                    </Grid>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${cls.slide} slide`}>
                    <Grid container alignItems="center">
                      <Grid item xs={12} md={6}>
                        <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                        <h1 className={cls.title}>The New Standard</h1>
                        <p className={cls.price}>$749</p>
                        <div className={cls.btn}>
                          <button>Start Buying</button>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <img src="/imgs/header/iphone.png" alt="offerImage" />
                      </Grid>
                    </Grid>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Grid>

            <Grid item xs={12} xl={3}>
              <div className={cls.announs}>
                <div className={cls.announs_box}>
                  <img src="/imgs/header/Sounddevice.png" alt="image" />
                  <div className={cls.details}>
                    <h3>Catch our deals</h3>
                    <p>$300</p>
                  </div>
                </div>
                <div className={cls.announs_box}>
                  <img src="/imgs/header/annuon3.png" alt="image" />
                  <div className={cls.details}>
                    <h3>Catch our deals</h3>
                    <p>$300</p>
                  </div>
                </div>
                <div className={cls.announs_box}>
                  <img src="/imgs/header/headphone.png" alt="image" />
                  <div className={cls.details}>
                    <h3>Catch our deals</h3>
                    <p>$300</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Header