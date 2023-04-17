/* eslint-disable @next/next/no-img-element */
import CountDown from '../../../UIs/CountDown/CountDown';

import cls from './offer.module.scss';

const Offer = () => {
  return (
    <div className={cls.center}>
      <div className={cls.centerOffer}>
        <span className={cls.label}>Electronics</span>
        <h3>Ultra Wirless S50 Headphones</h3>
        <img src="/imgs/products/headphone.png" alt="productImage" />
        <CountDown daysCount={0.8} />
        <div className={cls.addToCart}>
          <div className={cls.price}>
            <h1>$300</h1>
            <span>$320</span>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Offer