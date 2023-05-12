import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

import Rating from '@mui/material/Rating';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/pagination";
import cls from './blogSixteen.module.scss';

const blogSixteen = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(5)];
  const breakpoints = {
    300: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 3
    }
  }

  return (
    <div className={`${cls.blogs} customSliderArrows`}>
      <div className={cls.head}>
        <span>OUR REVIEWS</span>
        <h3>Customer Reviews</h3>
        <p>They have already used our services</p>
      </div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        loop={false}
        spaceBetween={20}
        pagination={{}}
        className={`${cls.swiper} centerBullets`}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.review}>
              <div className={`${cls.reviewHeader} ${cls[i18n.language]}`}>
                <img src="/imgs/drop.jpg" alt="User Image" className={cls.userImage} />
                <div>
                  <h6>username</h6>
                  <Rating name="read-only" value={2} readOnly />
                </div>
              </div>
              <div className={cls.reviewBody}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut faucibus eros. Nunc rhoncus mauris vel tristique sodales.</p>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default blogSixteen
