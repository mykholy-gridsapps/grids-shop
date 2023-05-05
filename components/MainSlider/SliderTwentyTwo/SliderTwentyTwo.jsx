import Link from 'next/link';

import CountDown from '../../UIs/CountDown/CountDown';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderTwentyTwo.module.scss';

const SliderTwentyTwo = () => {
  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.slider}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <div className={cls.main}>
            <Swiper
              slidesPerView={1}
              loop={true}
              spaceBetween={20}
              pagination={pagination}
              modules={[Pagination]}
              className='bottomBullets'>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <div className={cls.slide}>
                    <Grid container>
                      <Grid item xs={12}>
                        <span>HOT RIGHT NOW</span>
                        <h2>Mobile Devices</h2>
                        <ul>
                          <li><i className="fa-light fa-circle"></i> Support Gift Service</li>
                          <li><i className="fa-light fa-circle"></i> Support Gift Service</li>
                          <li><i className="fa-light fa-circle"></i> Support Gift Service</li>
                          <li><i className="fa-light fa-circle"></i> Support Gift Service</li>
                        </ul>
                        <div className={cls.btns}>
                          <button>Shop Now</button>
                          <Link href='/'>Learn More</Link>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className={cls.main}>
            <div className={cls.slide}>
              <Grid container>
                <Grid item xs={12} md={8}>
                  <span>NEW ARRIVAL</span>
                  <h2>Choose You Device Today</h2>
                  <p>Remains until the end of the offer</p>
                  <div className={cls.counter}>
                    <CountDown daysCount={2} hideLabel={true} />
                  </div>
                  <div className={cls.btns}>
                    <button>Shop Now</button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SliderTwentyTwo;
