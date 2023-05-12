import { useDispatch } from 'react-redux';
import { globalActions } from '../../../store/globalSlice/global-slice';

import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from 'next-i18next';

import cls from './productFourtyFive.module.scss';

const ProductFourtyFive = () => {
  const { i18n } = useTranslation('common');
  const dispatch = useDispatch();

  const open = () => {
    dispatch(globalActions.openQuickView());
  }

  return (
    <div className={cls.productCard}>
      <div className={cls.images}>
        <div className={`${cls.actions} ${cls[i18n.language]}`}>
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
        <img className={cls.main} src="/imgs/shoes.png" alt="product" loading='lazy' />
      </div>
      <div className={cls.details}>
        <h6>Gold Watch</h6>
        <div className={cls.price}>
          <span>$164.47</span>
          <span className={cls.prev}>$183.47</span>
        </div>
      </div>
      <div className={cls.btn}>
        <button>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductFourtyFive;