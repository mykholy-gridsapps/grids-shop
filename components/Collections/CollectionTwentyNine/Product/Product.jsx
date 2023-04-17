import { useState } from 'react';

import Zoom from '../../../UIs/ZoomImage/ZoomImage';
import Rating from '@mui/material/Rating';
import SimpleCartCounter from '../../../Common/SimpleCartCounter/SimpleCartCounter';

import Grid from '@mui/material/Grid';

import cls from './product.module.scss';

const Product = () => {
  const [variant, setVariant] = useState('');
  const [counter, setCounter] = useState(1);

  const variants = ['sm', 'lg', 'xl', 'xxl'];

  return (
    <div className={cls.product}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <div className={cls.image}>
            <Zoom image="/imgs/shoes.png" />
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={cls.details}>
            <h6>Men's Season Blue Clothes</h6>

            <div className={cls.price}>
              <span>$150.00</span>
              <span>-</span>
              <span>$180.00</span>
            </div>
            <div className={cls.reviews}>
              <Rating name="read-only" value={4} readOnly />
              <p>( 6 Reviews )</p>
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
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Product
