import Zoom from '../../../UIs/ZoomImage/ZoomImage';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './productImages.module.scss';
import { useState } from 'react';

const ProductImages = () => {
  const images = [
    "/imgs/shoes.png",
    "/imgs/wat.png",
    "/imgs/sh2.png",
    "/imgs/sh.png",
    "/imgs/shoes.png",
  ]
  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <div className={cls.productImages}>
      <div className={cls.vertical}>
        <Swiper
          slidesPerView={4}
          loop={false}
          spaceBetween={5}
          direction="vertical"
          className={cls.swiper}
        >
          {images.map((image, idx) =>
            <SwiperSlide key={idx} className={cls.swiperSlide}>
              <img src={image} alt="image" loading='lazy' onClick={() => setActiveImage(image)} className={activeImage === image ? cls.active : ''} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className={cls.bigImage}>
        <Zoom image={activeImage} />
      </div>
    </div>
  )
}

export default ProductImages
