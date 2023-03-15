import Rating from '@mui/material/Rating';

import cls from './horizontalProductCardOne.module.scss';

const HorizontalProductCardOne = () => {
  return (
    <div className={cls.horizontalCard}>
      <img src="./imgs/product-1.jpg" alt="product image" />
      <div className={cls.info}>
        <h6>PT Speaker</h6>
        <Rating name="read-only" value={3} readOnly />
        <div className={cls.price}>
          <span>$80</span>
          <span>$75</span>
        </div>
      </div>
    </div>
  )
}

export default HorizontalProductCardOne