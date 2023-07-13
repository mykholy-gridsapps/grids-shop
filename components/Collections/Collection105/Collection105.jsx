
import { Grid } from "@mui/material";
import ProductTwo from "../../ProductCard/ProductTwo/ProductTwo"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collection105.module.scss';



const Collection105 = () => {

  const array = [...Array(8)];
  const breakpoints = {
    300: {
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
      slidesPerView: 4,
    },
  }

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h2> Featured Products</h2>
      </div>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        navigation={{}}
        modules={[Navigation]}
        className='darkPlainArrows'
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <ProductTwo />
          </SwiperSlide>
        )}
      </Swiper>

    </div>
  )
}

export default Collection105;
