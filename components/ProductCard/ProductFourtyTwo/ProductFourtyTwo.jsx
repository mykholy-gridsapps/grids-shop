import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from './productFourtyTwo.module.scss';

const ProductFourtyTwo = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.productCard}>
      <div className={cls.details}>
        <div className={cls.actions}>
          <Tooltip title="add to wishlist" placement="top">
            <span onClick={() => router.push("/cart")}>
              <i className="fa-regular fa-heart"></i>
            </span>
          </Tooltip>
          <Tooltip title="add to cart" placement="top">
            <span onClick={() => router.push("/cart")}>
              <i className="fa-regular fa-cart-shopping"></i>
            </span>
          </Tooltip>
          <Tooltip title="add to compare" placement="top">
            <span onClick={() => router.push("/cart")}>
              <i className="fa-regular fa-code-compare"></i>
            </span>
          </Tooltip>
        </div>
        <h6>Nike Shoes</h6>
        <span>Accessories</span>
        <div className={cls.price}>
          $199.00
        </div>
        <button>
          <span className={cls.top}>Add To Cart</span>
          <span className={cls.bottom}><i className="fa-regular fa-cart-shopping"></i></span>
        </button>
      </div>
      <div className={cls.images}>
        <img src="/imgs/wide.jpg" alt="product" />
      </div>
    </div>
  )
}

export default ProductFourtyTwo;
