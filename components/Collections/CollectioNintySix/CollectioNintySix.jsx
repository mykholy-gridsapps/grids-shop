
import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import ProductOne from "../../ProductCard/ProductOne/ProductOne"

import 'swiper/css';
import "swiper/css/navigation";

import cls from './collectioNintySix.module.scss';

const CollectioNintySix = ({slides}) => {
  const navigation = {
  };
  return (
    <div className={cls.wrapper}>
      <Container maxWidth="xl">
        <h2>Styled Outfits</h2>
        <h5>Starting at
          <span>$ <strong>29</strong>99</span>
        </h5>
        <Swiper
          slidesPerView={1}
          loop={false}
          spaceBetween={20}
          navigation={navigation}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: slides || 4,
              spaceBetween: 20,
            },
          }}
          className={cls.swiper}>
          <SwiperSlide>
            <ProductOne color="#fff"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductOne color="#fff"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductOne color="#fff"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductOne color="#fff"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductOne color="#fff"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductOne color="#fff"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductOne color="#fff"/>
          </SwiperSlide>

        </Swiper>
      </Container>
    </div>
  )
}

export default CollectioNintySix