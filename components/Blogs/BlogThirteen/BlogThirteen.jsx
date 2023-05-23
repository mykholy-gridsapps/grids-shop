import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './blogThirteen.module.scss';

const BlogThirteen = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(5)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }

  return (
    <div className={`${cls.blog} darkSmallCustomSliderArrows ${i18n.language}`}>
      <Swiper
        modules={[Navigation]}
        navigation={navigation}
        slidesPerView={1}
        loop={false}
        spaceBetween={10}
        breakpoints={breakpoints}
        className={cls.swiper}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.item}>
              <div className={cls.image}>
                <img src="/imgs/wide.jpg" alt="blog image" />
                <div className={cls.user}>
                  <div>
                    <img src="/imgs/7.jpg" alt="user image" />
                    <span>Mr. Ahmad Eid</span>
                  </div>

                  <div>
                    <span className={cls.num}>5</span>
                    <i className="fa-regular fa-comments"></i>
                  </div>
                </div>
              </div>
              <div className={cls.details}>
                <span>Keyboards / 11 Nov 2022</span>
                <h6>Creative water features and exterior</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur mollitia..</p>
                <Link href='/'>
                  Continue Reading
                  <span>...</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-angle-${i18n.language === 'ar' ? 'right' : 'left'}`}></i></button>
      <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-angle-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
    </div>
  )
}

export default BlogThirteen;
