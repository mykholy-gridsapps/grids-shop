import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoriesFourtyOne.module.scss';
import Link from 'next/link';
import { Container } from '@mui/material';

const CategoriesFourty = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.categories}>
      <Container maxWidth="xxl">
        <Swiper
          slidesPerView={1}
          loop={false}
          spaceBetween={20}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 6,
            },
          }}>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">DRESS</Link>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  )
}

export default CategoriesFourty
