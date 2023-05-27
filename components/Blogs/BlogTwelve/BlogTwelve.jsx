import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './blogTwelve.module.scss';

const BlogTwelve = ({ slides }) => {
  const { i18n } = useTranslation('common');

  const array = [...Array(5)];

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
      slidesPerView: slides || 3,
    },
  }

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <>
      <div className={cls.head}>
        <span>FURNITURE GUIDES</span>
        <h3>OUR LATEST NEWS</h3>
        <p>Latest trends and inspiration in interior design.</p>
      </div>
      <div className={`${cls.blog} darkSmallCustomSliderArrows ${i18n.language}`}>
        <Swiper
          modules={[Navigation]}
          navigation={navigation}
          slidesPerView={1}
          loop={false}
          spaceBetween={20}
          breakpoints={breakpoints}
          className={`${cls.swiper} darkPlainArrows`}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.item}>
                <div className={cls.image}>
                  <div className={cls.date}>
                    <p>23</p>
                    <span>JUL</span>
                  </div>
                  <div className={cls.icon}>
                    <i className="fa-light fa-eye"></i>
                  </div>
                  <img src="/imgs/wide.jpg" alt="blog image" />
                </div>
                <div className={cls.tag}>
                  <span>Design, Trends, Inspiration</span>
                </div>
                <div className={cls.details}>
                  <h6>Creative water features and exterior</h6>
                  <span>Posted By: ahmad eid</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur mollitia rem reprehenderit repellat perspiciatis fugit esse</p>
                  <Link href='/'>
                    Continue Reading
                    <span>...</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-angle-left`}></i></button>
        <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-angle-right`}></i></button>
      </div>
    </>
  )
}

export default BlogTwelve
