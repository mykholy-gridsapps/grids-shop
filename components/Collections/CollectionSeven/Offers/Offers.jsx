import HorizontalProductCardOne from '../../../HorizontalProductCard/HorizontalProductCardOne/HorizontalProductCardOne';

import cls from './offers.module.scss';

const Offers = () => {
  return (
    <div className={cls.offers}>
      <div className={cls.offers__head}>
        <h6>Special Offers</h6>
        <p>OFFER ENDS IN: <span>00 DAYS, 00:00:00</span></p>
      </div>
      <HorizontalProductCardOne />
      <HorizontalProductCardOne />
      <HorizontalProductCardOne />
      <HorizontalProductCardOne />
      <HorizontalProductCardOne />
      <HorizontalProductCardOne />
    </div>
  )
}

export default Offers