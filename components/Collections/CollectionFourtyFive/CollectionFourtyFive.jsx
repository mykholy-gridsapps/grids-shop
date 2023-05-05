import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Grid from '@mui/material/Grid';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collectionFourtyFive.module.scss';

const CollectionFourtyFive = () => {
  const array = [...Array(3)]
  const navigation = {
    clickable: true
  };

  return (
    <div className={cls.collection}>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={10}
        navigation={navigation}
        modules={[Navigation]}
        className='animatedSwiper'>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.slide}>
              <Grid container alignItems='center'>
                <Grid item md={6}>
                  <img src="/imgs/chair.webp" alt="product" />
                </Grid>
                <Grid item md={6}>
                  <div className={`${cls.details} details`}>
                    <span>PRODUCT LANDING PAGE</span>
                    <h2>Vitr Chair - Classic Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tenetur? Exercitationem nam eos repellendus neque beatae, excepturi asperiores iste at quas impedit obcaecati alias deserunt quos voluptas voluptate corrupti voluptatum!</p>
                    <div className={cls.actions}>
                      <span>$19999.00</span>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CollectionFourtyFive
