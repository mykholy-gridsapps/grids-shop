/* eslint-disable @next/next/no-img-element */
import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';
import SaleTwentySeven from "../../Sale/SaleTwentySeven/SaleTwentySeven";
import OfferCardNine from "../../OfferCards/OfferCardNine/OfferCardNine";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from "swiper/react";

import { useTranslation } from "next-i18next";

import 'swiper/css';
import cls from './collection121.module.scss';

const Collection121 = ({ slides }) => {
  const { t, i18n } = useTranslation('common');

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: slides || 5,
    },
  }

  return (
    <div className={cls.deals}>
      <Container maxWidth="xxl">
        <div className={cls.sale}>
          <SaleTwentySeven />
        </div>
        <div className={cls.view}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} md={4} lg={12 / 5}>
              <OfferCardNine />
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={48 / 5}>
              <Swiper
                loop={true}
                spaceBetween={1}
                className={cls.swiper}
                breakpoints={breakpoints}>
                {[...Array(7)].map((item, idx) => (
                  <SwiperSlide>
                    <div className={cls.grid} key={idx}>
                      <ProductFifty />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Collection121;