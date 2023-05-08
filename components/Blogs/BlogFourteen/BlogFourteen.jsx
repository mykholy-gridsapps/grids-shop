import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './blogFourteen.module.scss';

const BlogFourteen = () => {
  const { i18n } = useTranslation('common')

  const array = [...Array(3)];
  const breakpoints = {
    300: {
      slidesPerView: 1
    },
    1200: {
      slidesPerView: 2
    }
  }

  return (
    <div className={`${cls.blogs} customSliderArrows`}>
      <h3>Our New Blogs</h3>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.blog}>
              <div className={cls.image}>
                <div className={cls.date}>
                  <p>23</p>
                  <span>JUL</span>
                </div>
                <img src="/imgs/wide.jpg" alt="blog" />
              </div>
              <div className={`${cls.details} ${cls[i18n.language]}`}>
                <div className={cls.top}>
                  <p>this is top title</p>
                </div>
                <div className={cls.content}>
                  <h5>This is a small blog title</h5>
                  <div className={cls.user}>
                    <div>
                      <img src="/imgs/7.jpg" alt="user image" />
                      <span>ahmad eid</span>
                    </div>
                    <div>
                      <span>30</span> <i className="fa-regular fa-comments"></i>
                    </div>
                  </div>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimus in minima</p>
                  <Link href="/">
                    CONTINUE READING
                    <span>...</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default BlogFourteen
