import ProductAvailability from '../../Common/ProductAvailability/ProductAvailability';
import CountDown from '../../UIs/CountDown/CountDown';

import Rating from '@mui/material/Rating';
import Tooltip from "@mui/material/Tooltip";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/pagination";
import cls from './offerCardOne.module.scss';

const OfferCard = () => {
  const { i18n } = useTranslation('common');
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.offerCard}>
      <div className={`${cls.offer} ${cls[i18n.language]}`}>
        Hurry Up!
      </div>
      <div className={cls.images}>
        <div className={`${cls.actions} ${cls[i18n.language]}`}>
          <Tooltip title="add to cart" placement="top">
            <i className="fa-light fa-bag-shopping"></i>
          </Tooltip>
          <Tooltip title="add to wishlist" placement="top">
            <i className="fa-light fa-heart"></i>
          </Tooltip>
          <Tooltip title="add to compare" placement="top">
            <i className="fa-light fa-code-compare"></i>
          </Tooltip>
        </div>

        <Swiper
          slidesPerView={1}
          loop={false}
          spaceBetween={10}
          pagination={pagination}
          modules={[Pagination]}>
          <SwiperSlide>
            <img className={cls.main} src="/imgs/shoes.png" alt="product" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <img className={cls.main} src="/imgs/shoes.png" alt="product" loading='lazy' />
          </SwiperSlide>
          <SwiperSlide>
            <img className={cls.main} src="/imgs/shoes.png" alt="product" loading='lazy' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={cls.counter}>
        <CountDown daysCount={2} />
      </div>
      <span className={cls.brand}>Apple</span>
      <h6>2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</h6>
      <div className={cls.reviews}>
        <Rating name="read-only" value={5} readOnly />
        <p>(300)</p>
      </div>
      <div className={cls.price}>
        <span>$164.47</span>
        <span className={cls.prev}>$183.47</span>
      </div>
      <ProductAvailability />
      <button>Add To Cart</button>
      <ul>
        <li><i className="fa-sharp fa-light fa-circle-check"></i> 27-inch (diagonal) Retina 5K display</li>
        <li><i className="fa-sharp fa-light fa-circle-check"></i> 27-inch (diagonal) Retina 5K display</li>
        <li><i className="fa-sharp fa-light fa-circle-check"></i> 27-inch (diagonal) Retina 5K display</li>
        <li><i className="fa-sharp fa-light fa-circle-check"></i> 27-inch (diagonal) Retina 5K display</li>
        <li><i className="fa-sharp fa-light fa-circle-check"></i> 27-inch (diagonal) Retina 5K display</li>
        <li><i className="fa-sharp fa-light fa-circle-check"></i> 27-inch (diagonal) Retina 5K display</li>
      </ul>
    </div>
  )
}

export default OfferCard;