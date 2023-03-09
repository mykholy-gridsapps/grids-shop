import ProductThree from '../../ProductCard/ProductThree/ProductThree';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import cls from './productsCategoriesTwelve.module.scss';

const ProductsCategoriesEight = () => {
  const pagination = {
    clickable: true,
  };
  const navigation = {
  };
  const breakpoints = {
    200: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    },
    1400: {
      slidesPerView: 2
    }
  }
  const breakpoints2 = {
    200: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    }
  }

  return (
    <div className={cls.wrapper}>
      <h5>Shop By Brand</h5>
      <div className={cls.collection}>
        
        <Swiper breakpoints={breakpoints} loop={true} spaceBetween={20} navigation={navigation} modules={[Navigation]} className={cls.bigSlider} allowTouchMove={false}>
          <SwiperSlide>
            <div className={cls.sliderSide}>
              <h6>Shop by category: computer accessories</h6>
              <Swiper breakpoints={breakpoints2} loop={true} spaceBetween={5} pagination={pagination} modules={[Pagination]}>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
              </Swiper>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.sliderSide}>
              <h6>Shop by category: computer accessories</h6>
              <Swiper breakpoints={breakpoints2} loop={true} spaceBetween={5} pagination={pagination} modules={[Pagination]}>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
              </Swiper>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.sliderSide}>
              <h6>Shop by category: computer accessories</h6>
              <Swiper breakpoints={breakpoints2} loop={true} spaceBetween={5} pagination={pagination} modules={[Pagination]}>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductThree />
                </SwiperSlide>
              </Swiper>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ProductsCategoriesEight