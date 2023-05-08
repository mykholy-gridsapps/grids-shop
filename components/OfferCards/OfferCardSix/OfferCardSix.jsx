import CountDownTwo from '../../UIs/CountDownTwo/CountDownTwo';

import cls from './offerCardSix.module.scss';

const OfferCardSix = () => {
  return (
    <div className={cls.offerCard}>
      <span>Linited Time Offer</span>
      <p>Premium Audio</p>
      <h2>Quality Headphones</h2>
      <CountDownTwo daysCount={2} />
      <div className={cls.btns}>
        <button>READ MORE</button>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default OfferCardSix
