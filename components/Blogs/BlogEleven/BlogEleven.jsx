import Link from 'next/link';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './blogEleven.module.scss';

const BlogEleven = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(5)];
  const breakpoints = {
    350: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }

  return (
    <div className={cls.blogEleven}>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.blog}>
              <div className={cls.image}>
                <img src="/imgs/headphone.jpg" alt="blog" />
              </div>
              <div className={`${cls.details} ${i18n.language === 'ar' ? cls.ar : ''}`}>
                <p>on <span>Sep 27, 2020 | </span> <span>0</span> comment</p>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <Link href="/">
                  READ MORE <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i>
                  <span></span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default BlogEleven
