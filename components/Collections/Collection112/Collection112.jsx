import { useState } from 'react';

import ProductFourtyNine from '../../ProductCard/ProductFourtyNine/ProductFourtyNine';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collection112.module.scss';

const Collection112 = ({ rounded, slides }) => {
  const [currentCategory, setCurrentCategory] = useState(1)
  const { i18n } = useTranslation();

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: slides || 3,
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
            <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Labtops</span>
            <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>Memory Cards</span>
            <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>External Hard Drives</span>
            <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>SSDs</span>
          </div>
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
            {[...Array(5)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <ProductFourtyNine />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Collection112;