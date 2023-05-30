import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import cls from './testimonialEight.module.scss';

const TestimonialEight = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.testimoinal}>
      <img src="/imgs/backo.jpg" alt="background" />
      <Container maxWidth="xl">
        <div className={`${cls.clients} darkSmallCustomSliderArrows`}>
          <h2>
            CUSTOMER REVIEWS
            <span></span>
          </h2>
          <p className={cls.sympol}><i className="fa-duotone fa-quote-right"></i></p>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={pagination}
            navigation={navigation}
            slidesPerView={1}
            loop={false}
            spaceBetween={20}
            className='centerBullets'>
            {array.map((_, idx) =>
              <SwiperSlide key={idx}>
                <div className={cls.one}>
                  <img src="/imgs/drop.jpg" alt="user" />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit atque similique tempore, dolorem sit totam ratione corporis accusantium at nihil eius libero autem ipsam animi ex vero eum quisquam reiciendis?</p>
                  <span>
                    <span>Ahmad eid</span> - Happy Customer
                  </span>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
          <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-angle-left`}></i></button>
          <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-angle-right`}></i></button>
        </div>
      </Container>
    </div>
  )
}

export default TestimonialEight;
