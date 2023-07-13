import CountDown from '../../UIs/CountDown/CountDown';

import cls from './offerCardNine.module.scss';

const OfferCardNine = () => {
  return (
    <div className={cls.offerCard}>
      <h4>
        Week Deals Limited
        <span></span>
      </h4>
      <span className={cls.sympol}>%</span>
      <CountDown daysCount={2} />
    </div>
  )
}

export default OfferCardNine;