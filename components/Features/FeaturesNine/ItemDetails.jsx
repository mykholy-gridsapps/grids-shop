import { useState } from 'react';

import CartCounter from '../../Common/CartCounter/CartCounter';

import Rating from '@mui/material/Rating';

import cls from './itemDetails.module.scss';

const ItemDetails = () => {
  const [counter, setCounter] = useState(1);
  const [variant, setVariant] = useState('');
  const [color, setColor] = useState('');

  const variants = ['sm', 'lg', 'xl', 'xxl'];
  const colors = ['red', 'orange', 'steelblue', 'black'];

  return (
    <div className={cls.itemDetails}>
      <h2>Women Fahion Shoes</h2>
      <div className={cls.details}>
        <p>SKU: 1234568277</p>
        <p>CATEGORY: Women's Shoes</p>
      </div>
      <div className={cls.price}>
        <span>$50.00</span>
        <span>-</span>
        <span>$150.00</span>
      </div>
      <div className={cls.reviews}>
        <Rating name="read-only" value={4} readOnly />
        <p>( 6 Reviews )</p>
      </div>
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.</p>
      <div className={cls.colors}>
        <p>Color:</p>
        <div>
          {colors.map(col => (
            <div key={col} className={col === color ? cls.active : ''} onClick={() => setColor(col)} style={{ backgroundColor: col }}></div>
          ))}
        </div>
      </div>
      <div className={cls.variants}>
        <p>Size:</p>
        <div>
          {variants.map(vari => (
            <div key={vari} className={vari === variant ? cls.active : ''} onClick={() => setVariant(vari)}>{vari}</div>
          ))}
        </div>
      </div>
      <div className={cls.cart}>
        <CartCounter counter={counter} setCounter={setCounter} />
        <button>Add To Cart</button>
      </div>
      <div className={cls.wishlist}>
        <div>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <button><i className="fa-light fa-heart"></i> Add To Wishlist</button>
      </div>
    </div >
  )
}

export default ItemDetails
