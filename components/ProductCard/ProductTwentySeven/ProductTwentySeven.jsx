import Rating from '@mui/material/Rating';

import cls from './productTwentySeven.module.scss';

const ProductTwentySeven = () => {
  return (
    <div className={cls.productCard}>
      <img src="/imgs/sh.png" alt="product" />
      <div className={cls.reviews}>
        <Rating name="read-only" value={4} readOnly />
        <p>(65)</p>
      </div>
      <div className={cls.price}>
        <span>2856.3</span>
        <span className={cls.prev}>3256.3</span>
      </div>
    </div>
  )
}

export default ProductTwentySeven
