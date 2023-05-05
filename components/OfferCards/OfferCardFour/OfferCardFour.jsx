import Rating from '@mui/material/Rating';

import cls from './offerCardFour.module.scss';
import CountDownTwo from '../../UIs/CountDownTwo/CountDownTwo';

const OfferCardFour = () => {
  return (
    <div className={cls.offerCard}>
      <img src="/imgs/sh.png" alt="product" />
      <div className={cls.details}>
        <div className={cls.counter}>
          <CountDownTwo daysCount={2} background={`var(--secondary-background)`} />
        </div>
        <div className={cls.content}>
          <h6>2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</h6>
          <div className={cls.rating}>
            <Rating name="read-only" value={4} readOnly />
            <p>(300)</p>
          </div>
          <div className={cls.actions}>
            <div className={cls.price}>
              <span>$36.61</span>
              <span className={cls.prev}>$88.00</span>
            </div>
            <button><i className="fa-light fa-bag-shopping"></i> Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCardFour
