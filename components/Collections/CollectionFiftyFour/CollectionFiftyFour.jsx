import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collectionFiftyFour.module.scss';

const CollectionFiftyFour = () => {
  const array = [...Array(3)];

  return (
    <div className={cls.collection}>
      <div className={`${cls.item} ${cls.item1}`}>
        <img src="/imgs/headphone.jpg" alt="product" />
        <span className={cls.smallTitle}>Small Title</span>
        <h2 className={cls.bigTitle}>The Interior And
          Exterior Lights</h2>
        <button className={cls.button}>Shop Now</button>
      </div>
      <div className={`${cls.item} ${cls.item2}`}>
        <Swiper
          slidesPerView={1}
          loop={false}
          navigation={{}}
          modules={[Navigation]}
          spaceBetween={10}
          className={`${cls.swiper} plainArrows`}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.slide}>
                <img src="/imgs/headphone.jpg" alt="product" />
                <span className={cls.smallTitle}>Small Title</span>
                <h2 className={cls.bigTitle}>The Interior And
                  Exterior Lights</h2>
                <div className={cls.btns}>
                  <button className={cls.button}>View More</button>
                  <button className={cls.outlined}>Shop Now</button>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className={`${cls.item} ${cls.item3}`}>
        <img src="/imgs/headphone.jpg" alt="product" />
        <span className={cls.smallTitle}>Small Title</span>
        <h2 className={cls.bigTitle}>The Interior And
          Exterior Lights</h2>
        <button className={cls.button}>Shop Now</button>
      </div>
      <div className={`${cls.item} ${cls.item4}`}>
        <img src="/imgs/headphone.jpg" alt="product" />
        <span className={cls.smallTitle}>Small Title</span>
        <h2 className={cls.bigTitle}>The Interior And
          Exterior Lights</h2>
        <button className={cls.button}>Shop Now</button>
      </div>
    </div>
  )
}

export default CollectionFiftyFour
