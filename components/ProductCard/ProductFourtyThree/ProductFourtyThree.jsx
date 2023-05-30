import { useState } from 'react';

import SmallCartCounter from '../../Common/SmallCartCounter/SmallCartCounter';

import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from './productFourtyThree.module.scss';

const ProductFourtyThree = () => {
  const [counter, setCounter] = useState(1)
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.productCard}>
      <div className={cls.images}>
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
        <img src="/imgs/sh.png" alt="product" />
        <img src="/imgs/shoes.png" alt="product" className={cls.secondary} />
        <div className={cls.btns}>
          <SmallCartCounter counter={counter} setCounter={setCounter} />
          <button>
            <span className={cls.top}>Add To Cart</span>
            <span className={cls.bottom}><i className="fa-light fa-cart-shopping"></i></span>
          </button>
        </div>
      </div>
      <div className={cls.details}>
        <h6>Nike Shoes</h6>
        <span>Accessories</span>
        <div className={cls.price}>
          $199.00
        </div>
      </div>
    </div>
  )
}

export default ProductFourtyThree;
