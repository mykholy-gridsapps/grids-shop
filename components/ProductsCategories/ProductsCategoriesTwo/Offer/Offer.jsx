/* eslint-disable @next/next/no-img-element */
import CountDown from "./../../../UIs/CountDown/CountDown";

import cls from './offer.module.scss';

const Offer = () => {
  return (
    <div className={cls.offerSaving}>
      <div className={cls.offerSaving__header}>
        <h3>Special Offer</h3>

        <div className={cls.offerSaving__header__badge}>
          <p>Save</p>

          <span>$20.00</span>
        </div>
      </div>

      <div className={cls.offerSaving__product}>
        <img src="/imgs/products/play.png" alt="offerImage" />

        <h5>Game Console Controller +USB 3.0 Cable</h5>

        <div className={cls.price}>
          <h1>$79.00</h1>

          <span>$99.00</span>
        </div>
      </div>

      <div className={cls.offerSaving__footer}>
        <CountDown daysCount={1.6} />
      </div>
    </div>
  );
}

export default Offer