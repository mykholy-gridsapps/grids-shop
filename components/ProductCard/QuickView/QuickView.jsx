// NEXT STUFF
import { useState } from 'react';
// MATERIAL UI STUFF
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
// PACKAGES
import { Swiper, SwiperSlide } from 'swiper/react';
// import ReactImageMagnify from 'react-image-magnify';
import ZoomImage from '../../UIs/ZoomImage/ZoomImage';
// OTHERS
import { useTranslation } from 'next-i18next';
// STYLES FILES
import cls from './quickView.module.scss';
import Link from 'next/link';

const QuickView = ({ setOpenQuickView }) => {
  const images = [
    "./imgs/product-1.jpg",
    "./imgs/product-1-2.jpg",
    "./imgs/product-1.jpg",
    "./imgs/product-1-2.jpg",
    "./imgs/product-1.jpg"
  ]
  const variants = ['sm', 'md', 'lg', 'xl', 'xxl']
  const [activeImage, setActiveImage] = useState(images[0]);
  const [rate, setRate] = useState(4);
  const [activeVariant, setActiveVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { t, i18n } = useTranslation('common');


  const close = () => {
    setOpenQuickView(false)
  }
  const breakpoints = {
    200: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
  }

  const changeQuantity = (number) => {
    if (number < 1) return;
    setQuantity(number)
  }

  return (
    <div className={cls.quickView}>
      <div className={cls.overlay} onClick={close}></div>
      <div className={cls.contentArea}>
        <div className={[cls.close, cls[i18n.language]].join(" ")} onClick={close}>
          <i className="fa-regular fa-xmark"></i>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <div className={cls.imagesArea}>
              <div className={cls.bigImage}>
                {/* <ReactImageMagnify {...{
                  smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      isFluidWidth: true,
                      src: "https://www.lifeofpix.com/wp-content/uploads/2018/06/20180120-P1201659-1600x1089.jpg",
                  },
                  largeImage: {
                      src: "https://www.lifeofpix.com/wp-content/uploads/2018/06/20180120-P1201659-1600x1089.jpg",
                      width: 700,
                      height: 850
                  },
                  enlargedImageContainerDimensions: {
                      width: '100%',
                      height: '100%'
                  },
                }} /> */}
                <ZoomImage image={activeImage} />
                {/* <img src={activeImage} alt="product" /> */}
              </div>
              <div className={cls.smallImages}>
                <Swiper 
                  loop={false} 
                  spaceBetween={20}
                  breakpoints={breakpoints}>
                    {images.map((image, idx) => (
                      <SwiperSlide key={idx} onClick={() => setActiveImage(image)}>
                        <img src={image} alt="product" className={image === activeImage ? cls.active : ''} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <div className={cls.infoArea}>
              <div className={cls.top}>
                <h3>Apple iPhone 14 Pro Max (256 GB) - Gold...</h3>
                <div className={cls.data}>
                  <div className={cls.review}>
                    <Rating
                      name="simple-controlled"
                      value={rate}
                      onChange={(event, newValue) => {
                        setRate(newValue);
                      }}
                    />
                    <p>( 5 Reviews )</p>
                  </div>
                  <Link href='/'>
                    <><i className="fa-regular fa-eye"></i> See product in details</>
                  </Link>
                </div>
              </div>
              <p className={cls.price}>$1,699.00 <span>1,899.00</span></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum quos voluptatum eos suscipit provident est incidunt vero. Dolor quibusdam ducimus ad aliquid numquam, explicabo corporis sequi earum nostrum quia?</p>
              <div className={cls.info}>
                <div><p>Brand:</p> <span>Samsung</span></div>
                <div><p>Availability:</p> <span>12 in stock</span></div>
              </div>
              <div className={cls.variants}>
                <p>Variants: </p>
                <ul>
                  {variants.map((one, idx) => (
                    <li key={idx} className={one === activeVariant ? cls.active : ''} onClick={() => setActiveVariant(one)}>{ one }</li>
                  ))}
                </ul>
              </div>
              <div className={cls.addToCart}>
                <Tooltip title="Add To Wishlist" placement="top">
                  <button className={cls.addToWishlist}><i className="fa-regular fa-heart"></i></button>
                </Tooltip>
                <div className={cls.number}>
                  <button onClick={() => changeQuantity(quantity + 1)}>+</button>
                  <input type="number" value={quantity} onChange={(e) => changeQuantity(+e.target.value)} />
                  <button onClick={() => changeQuantity(quantity - 1)}>-</button>
                </div>
                <button><i className="fa-duotone fa-cart-plus"></i> Add To Cart</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default QuickView