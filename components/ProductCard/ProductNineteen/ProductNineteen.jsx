import Rating from '@mui/material/Rating';
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from 'next-i18next';

import cls from './productNineteen.module.scss';

const ProductNineteen = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.productCard}>
      <div className={cls.images}>
        <div className={`${cls.actions} ${cls[i18n.language]}`}>
          <Tooltip title="add to compare" placement="top">
            <i className="fa-light fa-code-compare"></i>
          </Tooltip>
        </div>
        <img className={cls.main} src="/imgs/shoes.png" alt="product" loading='lazy' />
        <img className={cls.secondary} src="/imgs/sh2.png" alt="product" loading='lazy' />
      </div>
      <div className={cls.details}>
        <h6>Gold Watch</h6>
        <div className={cls.reviews}>
          <Rating name="read-only" value={5} readOnly />
          <p>(3 Reviews)</p>
        </div>
        <div className={cls.price}>
          <span>$164.47</span>
          <span className={cls.prev}>$183.47</span>
        </div>
        <div className={cls.btns}>
          <button>Add To Cart</button>
          <Tooltip title="add to wishlist" placement="top">
            <button className={cls.wishlist}><i className="fa-regular fa-heart"></i></button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default ProductNineteen;