import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './testimonialSeven.module.scss';

const TestimonialSeven = () => {
  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.testimoinal}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <div className={cls.clients}>
            <span>Tripple shop clients</span>
            <h3>
              WHAT THEY SAY ABOUT US
              <span></span>
            </h3>
            <Swiper
              modules={[Pagination]}
              pagination={pagination}
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
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={cls.images}>
            <img src="/imgs/shirt.jpg" alt="product" />
            <img src="/imgs/shirt.jpg" alt="product" />
            <img src="/imgs/shirt.jpg" alt="product" />
            <img src="/imgs/shirt.jpg" alt="product" />
            <img src="/imgs/shirt.jpg" alt="product" />
            <img src="/imgs/shirt.jpg" alt="product" />
            <div className={cls.content}>
              <h6>Products</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sed?</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default TestimonialSeven;
