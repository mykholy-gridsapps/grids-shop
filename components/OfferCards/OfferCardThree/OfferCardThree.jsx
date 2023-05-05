import CountDown from '../../UIs/CountDown/CountDown';
import ProductAvailability from '../../Common/ProductAvailability/ProductAvailability';

import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './offerCardThree.module.scss';

const OfferCardThree = () => {
  const { i18n } = useTranslation('common');

  const array = [
    '27-inch (diagonal) Retina 5K display',
    '27-inch (diagonal) Retina 5K display',
    '27-inch (diagonal) Retina 5K display'
  ]

  return (
    <div className={cls.offerCard}>
      <div className={`${cls.badge} ${cls[i18n.language]}`}>
        Top
        <br />
        Deals
      </div>
      <Grid container>
        <Grid item xs={12} md={5}>
          <div className={cls.image}>
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              spaceBetween={10}>
              <SwiperSlide>
                <img src="/imgs/sh.png" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/sh.png" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/sh.png" alt="product" />
              </SwiperSlide>
            </Swiper>
            <CountDown daysCount={2} tiny={true} />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div className={cls.details}>
            <p>Apple</p>
            <h5>2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD</h5>
            <div className={cls.reviews}>
              <Rating name="read-only" value={5} readOnly />
              <p>(300)</p>
            </div>
            <div className={cls.price}>
              <span>$164.47</span>
              <span className={cls.prev}>$183.47</span>
            </div>
            <ProductAvailability />
            <ul>
              {array.map((one, idx) => (
                <li key={idx}><i className="fa-sharp fa-light fa-circle-check"></i> {one}</li>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default OfferCardThree
