import Rating from '@mui/material/Rating';
import Link from 'next/link';

import cls from './horizontalProductCardTwo.module.scss';

const HorizontalProductCardTwo = () => {
  return (
    <div className={cls.horizontalCard}>
      <figure>
        <Link href="#">
          <img src="./imgs/product-1.jpg" />
          <img src="./imgs/product-1-2.jpg" />
        </Link>
      </figure>
      <div className={cls.productDetails}>
        <div className={cls.categoryList}>
          <Link href="#">caps</Link>,
          <Link href="#">fashion</Link>,
          <Link href="#">t-shirts</Link>
        </div>
        <h3> <Link href="#">Porto Arm Chair</Link> </h3>
        <Rating value={5} readOnly/>
        <div className="price-box">
          <span className="product-price">$69.00</span>
        </div>
      </div>
    </div>
  )
}

export default HorizontalProductCardTwo