import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from './productFourtyOne.module.scss';

const ProductFourtyOne = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.productCard}>
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
      <div className={cls.details}>
        <h6>Nike Shoes</h6>
        <span>Accessories</span>
      </div>
      <div className={cls.images}>
        <img src="/imgs/sh.png" alt="product" />
        <img src="/imgs/shoes.png" alt="product" className={cls.secondary} />
      </div>
      <div className={cls.price}>
        $199.00
      </div>
    </div>
  )
}

export default ProductFourtyOne;
