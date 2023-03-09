import Rating from '@mui/material/Rating';

import cls from './productEleven.module.scss';

const ProductEleven = () => {
  return (
    <div className={cls.productCard}>
      <div className={cls.product_image}>
        <img src="./imgs/product-9.jpg" alt="product_image" />
      </div>
      <div className={cls.product_info}>
        <h3>Dede’S Blue Poly Crepe A Line Dress</h3>
        <Rating name="read-only" value={4} readOnly />
        <div className={cls.price}>
          <p>$122</p>
          <p>$112</p>
        </div>
        <div className={cls.btns}>
          <button className={cls.addToWishlist}><i className="fa-light fa-heart"></i></button>
          <button className={cls.addToCart}>Add to cart</button>
          <button className={cls.addToCompare}><i className="fa-light fa-code-compare"></i></button>
        </div>
      </div>
    </div>
  )
}

export default ProductEleven;