import { useState } from 'react';

import Zoom from '../../UIs/ZoomImage/ZoomImage';
import CartCounter from '../../Common/CartCounter/CartCounter';

import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import cls from './productsCategoriesNineteen.module.scss';
import SmallCountDown from '../../UIs/SmallCountDown/SmallCountDown';

const ProductsCategoriesNineteen = () => {
  const [rate, setRate] = useState(2);
  const [variant, setVariant] = useState('');
  const [color, setColor] = useState('');
  const [counter, setCounter] = useState(1);

  const variants = ['sm', 'lg', 'xl', 'xxl'];
  const colors = ['red', 'orange', 'steelblue', 'black'];

  const categories = [...Array(2)]

  return (
    <div className={cls.collection}>
      <Grid container spacing={1}>
        {categories.map((cat, idx) => (
          <Grid item xs={12} lg={6} key={idx}>
            <div className={cls.part}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} lg={12} xl={6}>
                  <div className={cls.offer}>
                    <Zoom image="/imgs/zoom.jpg" />
                    <div className={cls.timer}>
                      Offer Ends In: <SmallCountDown daysCount={1.5} />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={12} xl={6}>
                  <div className={cls.details}>
                    <h4>Smart Black More Detailed Sharp Television</h4>
                    <div className={cls.price}>
                      <span className={cls.old}>$199.00</span>
                      <span>-</span>
                      <span>$119.00</span>
                    </div>
                    <div className={cls.reviews}>
                      <Rating name="read-only" value={rate} readOnly />
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
                        <CartCounter counter={counter} setCounter={setCounter} small={true} />
                      </div>
                      <button><i className="fa-light fa-bag-shopping"></i> Add To Cart</button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductsCategoriesNineteen;
