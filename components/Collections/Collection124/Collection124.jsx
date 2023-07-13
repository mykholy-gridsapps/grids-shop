import { useState } from 'react';

import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection124.module.scss';

const Collection124 = ({ rounded }) => {
  const [currentCategory, setCurrentCategory] = useState(1)
  const { i18n } = useTranslation();

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
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
  }

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>
      <div className={cls.homeCategory__wrapper}>
        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>
          <h3>
            Electronics
            <span></span>
          </h3>
          <div>
            <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>20% Off</span>
            <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>40% Off</span>
            <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>60% Off</span>
            <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>70% Off</span>
          </div>
          <p>
            Go to Daily Deals Section <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>
          </p>
        </div>
        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={cls.swiper}
            breakpoints={breakpoints}
          >
            {[...Array(10)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <ProductFifty />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Collection124;