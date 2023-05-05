import Rating from '@mui/material/Rating';

import cls from './productTwentyThree.module.scss';

const ProductTwentyThree = () => {
  return (
    <div className={cls.productCard}>
      <img src="/imgs/sh.png" alt="product" loading='lazy' />
      <div className={cls.details}>
        <p>Apple</p>
        <h6>2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</h6>
        <div className={cls.reviews}>
          <Rating name="read-only" value={5} readOnly />
          <p>(300)</p>
        </div>
        <div className={cls.price}>
          <span>$164.47</span>
          <span className={cls.prev}>$183.47</span>
        </div>
      </div>
    </div>
  )
}

export default ProductTwentyThree
