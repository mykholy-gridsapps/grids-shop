import { useState } from 'react';

import ProductImages from './ProductImages';
import SimpleCartCounter from '../../../Common/SimpleCartCounter/SimpleCartCounter';

import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './productDetails.module.scss';

const ProductDetails = () => {
  const [variant, setVariant] = useState('');
  const [color, setColor] = useState('');
  const [counter, setCounter] = useState(1);

  const variants = ['sm', 'lg', 'xl', 'xxl'];
  const colors = ['red', 'orange', 'steelblue', 'black'];

  const array = [...Array(6)]

  return (
    <div className={cls.productDetails}>
      <h3>Deals Hot of The Day</h3>
      <Swiper
        slidesPerView={1}
        loop={false}
        spaceBetween={5}
      >
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ProductImages />
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={cls.details}>
                  <h4>Smart Black More Detailed Sharp Television</h4>
                  <div className={cls.price}>
                    <span className={cls.old}>$199.00</span>
                    <span>-</span>
                    <span>$119.00</span>
                  </div>
                  <div className={cls.reviews}>
                    <Rating name="read-only" value={5} readOnly />
                    <p>( 6 Reviews )</p>
                  </div>
                  <div className={cls.colors}>
                    <p>Colors: </p>
                    <div>
                      {colors.map(col => (
                        <div key={col} className={col === color ? cls.active : ''} onClick={() => setColor(col)} style={{ backgroundColor: col }}></div>
                      ))}
                    </div>
                  </div>
                  <div className={cls.variants}>
                    <p>Variants: </p>
                    <div>
                      {variants.map(vari => (
                        <div key={vari} className={vari === variant ? cls.active : ''} onClick={() => setVariant(vari)}>{vari}</div>
                      ))}
                    </div>
                  </div>
                  <div className={cls.actions}>
                    <div className={cls.counter}>
                      <SimpleCartCounter counter={counter} setCounter={setCounter} small={true} />
                    </div>
                    <button><i className="fa-light fa-bag-shopping"></i> Add To Cart</button>
                  </div>

                  <div className={cls.social}>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-pinterest-p"></i>
                  </div>
                </div>
              </Grid>
            </Grid>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default ProductDetails
