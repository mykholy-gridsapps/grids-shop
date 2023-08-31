import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoriesFifty.module.scss';

const CategoriesFifty = () => {
  const { i18n } = useTranslation('common')
  const array = [...Array(20)];

  const breakpoints = {
    300: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 5,
    },
    900: {
      slidesPerView: 8,
    },
    1200: {
      slidesPerView: 10,
    },
  }

  return (
    <div className={`${cls.categories} ${cls[i18n.language]}`}>
      <Swiper
        modules={[Navigation]}
        navigation={{}}
        slidesPerView={1}
        loop={false}
        spaceBetween={10}
        breakpoints={breakpoints}
        className={`${cls.swiper} darkPlainArrows`}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.category}>
              <i className="fa-regular fa-mobile"></i>
              <p>Mobile Phone</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CategoriesFifty
