import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import cls from './blogFifteen.module.scss';

const BlogFifteen = () => {
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
      slidesPerView: 3,
    },
  }

  return (
    <div className={cls.blog}>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={20}
        navigation={{}}
        modules={[Navigation]}
        breakpoints={breakpoints}
        className={`${cls.swiper} plainArrows`}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.item}>
              <div className={cls.image}>
                <div className={cls.date}>
                  <p>23</p>
                  <span>JUL</span>
                </div>
                <img src="/imgs/wide.jpg" alt="blog image" />
              </div>
              <div className={cls.content}>
                <div className={cls.tag}>
                  <span>Design, Trends, Inspiration</span>
                </div>
                <div className={cls.details}>
                  <h6>Creative water features and exterior</h6>
                  <div className={cls.activity}>
                    <div className={cls.user}>
                      <img src="/imgs/7.jpg" alt="" />
                      <span>ahmad eid</span>
                    </div>
                    <span>30<i className="fa-solid fa-comments"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default BlogFifteen;
