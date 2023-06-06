import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Autoplay, Controller } from 'swiper';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './sliderThirtySeven.module.scss';
import Link from 'next/link';

const SliderThirtySeven = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const [galleryTop, setGalleryTop] = useState(null);
  const [galleryThumbs, setGalleryThumbs] = useState(null);
  const { i18n } = useTranslation('common');

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  useEffect(() => {
    if (loadSwiper && galleryTop && galleryThumbs && !galleryTop.destroyed && !galleryThumbs.destroyed) {
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
    }
  }, [loadSwiper, galleryTop, galleryThumbs]);

  const array = [...Array(2)];

  const images = [
    "/imgs/shoes.png",
    "/imgs/shoes.png",
  ]


  const mainSwiperOptions = {
    modules: [Pagination, Autoplay, Controller],
    spaceBetween: 10,
    grabCursor: true,
    speed: 1000,
    navigation: false,
    loop: true,
    // loopedSlides: 9,
    
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  }

  const subSwiperOptions = {
    modules: [Keyboard, Controller],
    spaceBetween: 10,
    speed: 1000,
    touchRatio: 0.4,
    slideToClickedSlide: true,
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      787: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      }
    }
  }

  return (
    <div className={cls.slider}>
      {loadSwiper &&
        <Swiper
          {...mainSwiperOptions}
          onSwiper={(swiper) => setGalleryTop(swiper)}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.slide} style={{ backgroundImage: '/imgs/slideBg.jpg' }}>
                <Grid container>
                  <Grid item md={6}>
                    <div className={cls.details}>
                        <h2>Spring / Summer Season</h2>
                        <h3>up<br /> to
                        </h3>
                        <h4>50% off</h4>
                        <div></div>
                        <h5>Starting At</h5>
                        <h6><sup>$</sup>19<sup>99</sup></h6>
                        <Link href="#">Shop Now</Link>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      }

      <div className={`${cls.thumbs} thumbs`}>
        {loadSwiper &&
          <Swiper
            {...subSwiperOptions}
            onSwiper={(swiper) => setGalleryThumbs(swiper)}>
            {images.map((img, idx) =>
              <SwiperSlide key={idx}>
                <div className={`${cls.thumb} thumb`}>
                  <img src={img} alt="product" />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        }
      </div>
    </div>
  )
}

export default SliderThirtySeven;
