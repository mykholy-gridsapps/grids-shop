import CountDown from './../../UIs/CountDown/CountDown';

import cls from './saleThirtyTwo.module.scss';

const SaleThirtyTwo = () => {
  return (
    <div className={cls.saleThirtyTwo}>
      <div className={cls.banner}>
        <span>H</span>
        <span>O</span>
        <span>T</span>
        <p></p>
        <span>D</span>
        <span>E</span>
        <span>A</span>
        <span>L</span>
        <span>S</span>
      </div>
      <div className={cls.details}>
        <ul>
          <li>UP TO 30% OFF</li>
          <li>UP TO 30% OFF</li>
          <li>UP TO 30% OFF</li>
          <li>UP TO 30% OFF</li>
          <li>UP TO 30% OFF</li>
        </ul>
        
        <CountDown daysCount={0.8} />
      </div>
    </div>
  )
}

export default SaleThirtyTwo