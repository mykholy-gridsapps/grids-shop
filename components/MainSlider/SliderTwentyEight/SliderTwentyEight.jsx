import Link from 'next/link';

import Grid from '@mui/material/Grid';

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderTwentyEight.module.scss';

const SliderTwentyEight = () => {
  return (
    <div className={cls.slider}>
      <div className={cls.main}>
        <div className={cls.slide}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <span>HOT RIGHT NOW</span>
              <h2>Mobile Devices</h2>
              <p className={cls.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi quis consequatur in magnam aut explicabo ad repellat, rem, minus voluptatum blanditiis necessitatibus aspernatur omnis et nemo voluptatibus voluptate quidem.</p>
              <div className={cls.btns}>
                <button>Shop Now</button>
                <Link href='/'>Learn More</Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={cls.wide}>
        <Grid container>
          <Grid item xs={12}>
            <h3>Mobile Devices</h3>
            <p>Sale Up to 50% Off</p>
            <div className={cls.btns}>
              <a href='/'>Shop Now</a>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={cls.secondary}>
        <Grid container>
          <Grid item xs={12}>
            <h3>Mobile Devices</h3>
            <p>Sale Up to 50% Off</p>
            <div className={cls.btns}>
              <a href='/'>Shop Now</a>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={cls.secondary}>
        <Grid container>
          <Grid item xs={12}>
            <h3>Mobile Devices</h3>
            <p>Sale Up to 50% Off</p>
            <div className={cls.btns}>
              <a href='/'>Shop Now</a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default SliderTwentyEight;
