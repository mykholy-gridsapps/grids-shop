import CountDownBox from '../../UIs/CountDownBox/CountDownBox';
import ProductAvailability from '../../Common/ProductAvailability/ProductAvailability';

import Rating from '@mui/material/Rating';
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from 'next-i18next';

import cls from './offerCardTwo.module.scss';

const OfferCardTwo = ({ small }) => {
  const { i18n } = useTranslation('common');

  const array = [
    '27-inch (diagonal) Retina 5K display'
  ]

  return (
    <div className={cls.productCard}>
      <div className={cls.offer}>
        -20%
      </div>
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
      <CountDownBox daysCount={2} />
      <span className={cls.brand}>Apple</span>
      <h6>2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</h6>
      <div className={cls.reviews}>
        <Rating name="read-only" value={5} readOnly />
        <p>(300)</p>
      </div>
      <div className={cls.price}>
        <span>$164.47</span>
        <span className={cls.prev}>$183.47</span>
      </div>
      <div className={cls.visible}>
        <div className={cls.aval}>
          <ProductAvailability />
        </div>
        <button>Add To Cart</button>
      </div>
      {!small &&
        <ul>
          {array.map((one, idx) => (
            <li key={idx}><i className="fa-sharp fa-light fa-circle-check"></i> {one}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default OfferCardTwo;