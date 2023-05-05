import OfferCardThree from '../../OfferCards/OfferCardThree/OfferCardThree';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import cls from './collectionFourtyTwo.module.scss';

const CollectionsFourtyTwo = () => {
  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h4>Explore Our Top Deals</h4>
        <p>Special products in this month.</p>
      </div>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        navigation={true}
        className={`${cls.centerbullets} centerBullets2`}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <OfferCardThree />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CollectionsFourtyTwo
