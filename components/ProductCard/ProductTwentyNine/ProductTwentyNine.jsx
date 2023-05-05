import ProductAvailability from '../../Common/ProductAvailability/ProductAvailability';

import { useDispatch } from 'react-redux';
import { globalActions } from '../../../store/globalSlice/global-slice';

import Rating from '@mui/material/Rating';
import Tooltip from "@mui/material/Tooltip";

import cls from './productTwentyNine.module.scss';

const ProductTwentyNine = () => {
  const dispatch = useDispatch();

  const open = () => {
    dispatch(globalActions.openQuickView());
  }

  return (
    <div className={cls.productCard}>
      <div className={cls.sale}>
        -50%
      </div>
      <div className={cls.image}>
        <img src="/imgs/sh.png" alt="product image" />
        <div className={cls.actions}>
          <Tooltip title="quick view" placement="top">
            <i className="fa-light fa-eye" onClick={open}></i>
          </Tooltip>
          <Tooltip title="add to cart" placement="top">
            <i className="fa-light fa-bag-shopping"></i>
          </Tooltip>
          <Tooltip title="add to wishlist" placement="top">
            <i className="fa-light fa-heart"></i>
          </Tooltip>
          <Tooltip title="add to compare" placement="top">
            <i className="fa-light fa-code-compare"></i>
          </Tooltip>
        </div>
      </div>
      <div className={cls.details}>
        <span>Nike Shoes</span>
        <h6>2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</h6>
        <div className={cls.rating}>
          <Rating name="read-only" value={4} readOnly />
          <p>(300)</p>
        </div>
        <div className={cls.price}>
          <span>$36.61</span>
          <span className={cls.prev}>$88.00</span>
        </div>
        <ProductAvailability />
        <button><i className="fa-light fa-bag-shopping"></i> Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductTwentyNine;
