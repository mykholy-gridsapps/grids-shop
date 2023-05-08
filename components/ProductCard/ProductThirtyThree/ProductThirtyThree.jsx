import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from './productThirtyThree.module.scss';

const ProductThirtyThree = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.productCard}>
      <div className={cls.effect}></div>
      <div className={cls.sale}>
        -50%
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
          <Tooltip title="search" placement="top">
            <span onClick={() => router.push("/compare")}>
              <i className="fa-regular fa-magnifying-glass"></i>
            </span>
          </Tooltip>
        </div>
      </div>
      <div className={cls.details}>
        <h6>Nike Shoes</h6>
        <span>Accessories</span>
        <div className={cls.price}>
          $199.00
        </div>
        <div className={cls.hiddenDetails}>
          <p>Nam gravida vulputate est venenatis eu at ullamcorper consectetur parturient</p>
          <div className={`${cls.actions} ${cls[i18n.language]}`}>
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
        </div>
      </div>
    </div>
  )
}

export default ProductThirtyThree;
