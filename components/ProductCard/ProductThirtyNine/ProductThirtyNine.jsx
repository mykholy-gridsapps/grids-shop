import Tooltip from "@mui/material/Tooltip";

import cls from './productThirtyNine.module.scss';

const ProductThirtyNine = () => {
  return (
    <div className={cls.productCard}>
      <div className={cls.effect}></div>
      <div className={cls.sale}>
        SALE
      </div>
      <div className={cls.images}>
        <img src="/imgs/sh.png" alt="product" />
        <img src="/imgs/shoes.png" alt="product" className={cls.secondary} />
        <div className={cls.top}>
          <div className={cls.colors}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Tooltip title="add to compare" placement="top">
            <span onClick={() => router.push("/compare")}>
              <i className="fa-light fa-code-compare"></i>
            </span>
          </Tooltip>
        </div>
      </div>
      <div className={cls.details}>
        <h6>Smart watches wood edition</h6>
        <span>Accessories</span>
        <div className={cls.price}>
          $199.00
        </div>
        <div className={cls.hiddenDetails}>
          <div className={cls.actions}>
            <Tooltip title="add to wishlist" placement="top">
              <span onClick={() => router.push("/cart")}>
                <i className="fa-regular fa-heart"></i>
              </span>
            </Tooltip>
            <button>
              <span className={cls.text}>Read More</span>
              <span className={cls.icon}><i className="fa-light fa-eye"></i></span>
            </button>
            <Tooltip title="add to cart" placement="top">
              <span onClick={() => router.push("/cart")}>
                <i className="fa-regular fa-cart-shopping"></i>
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductThirtyNine
