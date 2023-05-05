import CountDownTwo from '../../UIs/CountDownTwo/CountDownTwo';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderTwentyFour.module.scss';

const SliderTwentyFour = () => {
  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.slider}>
      <div className={cls.big}>
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={0}
          pagination={pagination}
          className='centerBullets3'
          modules={[Pagination]}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.slide}>
                <h2>Apple Shopping Event</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum.</p>
                <button>Shop Now</button>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className={cls.wide}>
        <h2>Aurora Headset</h2>
        <CountDownTwo daysCount={2} background="#fff" textColor="#000" />
        <button>Shop Now</button>
      </div>
      <div className={cls.small}>
        <h5>New Dual Sense</h5>
        <p>For PlayStation 5</p>
        <button>View Details</button>
      </div>
      <div className={cls.small}>
        <h5>New Dual Sense</h5>
        <p>For PlayStation 5</p>
        <button>View Details</button>
      </div>
    </div>
  )
}

export default SliderTwentyFour
