import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './blogTwelve.module.scss';

const BlogTwelve = () => {
  const array = [...Array(5)];

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }

  return (
    <div className={cls.blog}>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}
        className={cls.swiper}>
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
    </div>
  )
}

export default BlogTwelve
