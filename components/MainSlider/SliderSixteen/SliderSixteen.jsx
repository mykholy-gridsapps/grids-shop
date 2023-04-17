import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Autoplay, Controller } from 'swiper';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './sliderSixteen.module.scss';

const SliderSixteen = () => {
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

  const array = [...Array(5)];

  const images = [
    "/imgs/shoes.png",
    "/imgs/shoes.png",
    "/imgs/shoes.png",
    "/imgs/shoes.png",
    "/imgs/shoes.png",
    "/imgs/shoes.png"
  ]


  const mainSwiperOptions = {
    modules: [Pagination, Autoplay, Controller],
    spaceBetween: 10,
    grabCursor: true,
    speed: 1000,
    navigation: false,
    loop: true,
    loopedSlides: 9,
    autoplay: {
      delay: 10000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  }

  const subSwiperOptions = {
    modules: [Keyboard, Controller],
    spaceBetween: 10,
    centeredSlides: true,
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
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 4,
      },
      787: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
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
                      <p>FROM ONLINE STORE</p>
                      <h2>Fashion Lifestyle Collection</h2>
                      <span>Free shipping on all orders above $99.00</span>
                      <button>SHOP NOW <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i></button>
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

export default SliderSixteen;
