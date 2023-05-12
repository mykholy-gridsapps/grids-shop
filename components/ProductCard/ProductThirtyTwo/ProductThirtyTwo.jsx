import { useState } from "react";

import Tooltip from "@mui/material/Tooltip";
import Rating from '@mui/material/Rating';
import SmallCartCounter from '../../Common/SmallCartCounter/SmallCartCounter';

import { useTranslation } from "next-i18next";

import cls from './productThirtyTwo.module.scss';

const ProductThirtyTwo = () => {
  const [counter, setCounter] = useState(1);
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.productCard}>
      <div className={cls.effect}></div>
      <div className={cls.sales}>
        <span className={cls.hot}>HOT</span>
        <span className={cls.new}>NEW</span>
      </div>
      <div className={`${cls.actions} ${cls[i18n.language]}`}>
        <Tooltip title="quick view" placement="top">
          <i className="fa-light fa-eye" onClick={open}></i>
        </Tooltip>
        <Tooltip title="add to cart" placement="top">
          <i className="fa-light fa-bag-shopping"></i>
        </Tooltip>
        <Tooltip title="add to wishlist" placement="top">
          <i className="fa-light fa-heart"></i>
        </Tooltip>
      </div>
      <div className={cls.images}>
        <img src="/imgs/sh.png" alt="product" />
        <img src="/imgs/shoes.png" alt="product" className={cls.secondary} />
      </div>
      <div className={cls.details}>
        <h6>Smart watches wood edition</h6>
        <span className={cls.label}>Accessories</span>
        <Rating name="read-only" value={5} readOnly />
        <p className={cls.stock}><i className="fa-regular fa-check"></i> In Stock</p>
        <div className={cls.price}>
          $199.00 <span>/ Piece</span>
        </div>
        <div className={cls.btns}>
          <SmallCartCounter counter={counter} setCounter={setCounter} />
          <button>
            <span className={cls.top}>Add To Cart</span>
            <span className={cls.bottom}><i className="fa-light fa-cart-shopping"></i></span>
          </button>
        </div>
        <div className={cls.hiddenDetails}>
          <ul>
            <li>Brand: <span>Apple</span></li>
            <li>Model: <span>MacBook Pro</span></li>
            <li>Brand: <span>Apple</span></li>
            <li>Model: <span>MacBook Pro</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductThirtyTwo
