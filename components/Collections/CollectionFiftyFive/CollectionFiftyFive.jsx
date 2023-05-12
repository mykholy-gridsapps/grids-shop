import { useState } from 'react';

import ProductThirtySix from '../../ProductCard/ProductThirtySix/ProductThirtySix';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from "next-i18next";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collectionFiftyFive.module.scss';

const CollectionFiftyFive = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState('Today Deals')
  const { t, i18n } = useTranslation('common');

  const tabs = [
    {
      title: "Top Products",
      icon: <i className="fa-light fa-poo-storm"></i>
    },
    {
      title: "Today Deals",
      icon: <i className="fa-light fa-calendar-week"></i>
    },
    {
      title: "Featured Products",
      icon: <i className="fa-light fa-sparkles"></i>
    },
    {
      title: "Best Selling",
      icon: <i className="fa-light fa-cart-shopping"></i>
    }
  ]

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
      slidesPerView: 5,
    },
  }

  return (
    <div className={cls.collection}>
      <div className={cls.tabs}>
        {tabs.map((tab, idx) => (
          <span
            className={currentTabIndex === tab.title ? cls.active : ""}
            onClick={() => setCurrentTabIndex(tab.title)}
            key={idx}
          >
            <span></span>
            <p>
              {tab.icon}
              {tab.title}
            </p>
          </span>
        ))}
      </div>

      <div className={cls.view}>
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
              <ProductThirtySix />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default CollectionFiftyFive;