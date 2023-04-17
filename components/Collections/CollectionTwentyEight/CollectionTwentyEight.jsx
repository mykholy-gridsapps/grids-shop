/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import ProductEighteen from '../../ProductCard/ProductEighteen/ProductEighteen';
import SmallCountDown from '../../UIs/SmallCountDown/SmallCountDown';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionTwentyEight.module.scss';

const CollectionTwentyEight = () => {
  const { i18n } = useTranslation();

  const array = [...Array(8)];
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

  return (
    <div className={`${cls.homeCategory}`}>

      <div className={cls.homeCategory__wrapper}>

        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>

          <div className={cls.title}>
            <h3>Smart phones & tablets</h3>
            <div className={cls.countDown}>
              <span>Offer Ends In:</span>
              <SmallCountDown daysCount={2} />
            </div>
          </div>

          <div>
            <Link href="/">
              More Products <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>

        </div>

        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <Swiper
            slidesPerView={1}
            loop={false}
            spaceBetween={20}
            breakpoints={breakpoints}>
            {array.map((_, idx) =>
              <SwiperSlide key={idx}>
                <ProductEighteen />
              </SwiperSlide>
            )}
          </Swiper>
        </div>

      </div>

    </div>
  )
}

export default CollectionTwentyEight;