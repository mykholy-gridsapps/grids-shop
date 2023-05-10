import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './featuresTwelve.module.scss';

const FeaturesTwelve = () => {
  const array2 = [...Array(10)];
  const breakpoints = {
    250: {
      slidesPerView: 1
    },
    400: {
      slidesPerView: 2
    },
    500: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    },
  }

  return (
    <div className={cls.features}>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={10}
        breakpoints={breakpoints}>
        {array2.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.topSlide}>
              <i className="fa-light fa-wreath"></i>
              <div>
                <h6>Home Decor</h6>
                <p>But i must plain</p>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default FeaturesTwelve
