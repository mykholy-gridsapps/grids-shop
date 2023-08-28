/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './sliderFourtyThree.module.scss';

const SliderFourtyThree = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { i18n } = useTranslation();
  const array = [...Array(8)];

  const tabs = [
    'So much to watch in 4k tvs',
    'Game consoles',
    'So much to watch in 4k tvs',
    'Limited week deal-gamepad'
  ]

  return (
    <div className={cls.header}>
      <div className={`${cls.header_wrapper}`}>

        <Container maxWidth="xxl">

          <Grid container spacing={5} alignItems="center">

            <Grid item xs={12} lg={8}>

              <div className={`${cls.header__slider} header__slider`}>

                {currentSlide === 1 &&
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
                }

                {currentSlide === 2 &&
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
                        <img src="/imgs/header/Smartphones.png" alt="offerImage" />
                      </Grid>

                    </Grid>

                  </div>
                }

                {currentSlide === 3 &&
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
                }

                {currentSlide === 4 &&
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
                        <img src="/imgs/header/iphone.png" alt="offerImage" />
                      </Grid>

                    </Grid>
                  </div>
                }

              </div>

            </Grid>

            <Grid item xs={12} lg={4}>

              <div className={`${cls.carouselTabs} ${cls[i18n.language]}`}>

                {tabs.map((tab, index) => (
                  <p key={index} className={currentSlide === index + 1 ? cls.active : ''} onClick={() => setCurrentSlide(index + 1)}>
                    <span>{tab}</span>
                  </p>
                ))}

              </div>

            </Grid>

          </Grid>

          <div className={cls.products}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={5}
              className={cls.swiper}
              breakpoints={{
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductFifty />
                </SwiperSlide>
              )}
            </Swiper>
          </div>

        </Container>

      </div>
    </div>
  )
}

export default SliderFourtyThree;