import CountDownTwo from '../../UIs/CountDownTwo/CountDownTwo';

import { useTranslation } from 'next-i18next';

import cls from './saleSeventyOne.module.scss';

const SaleSeventyOne = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.sale}>
      <img src="/imgs/lastBack.jpg" alt="product" />
      <h2>
        iphone 12 pro
        <br />
        128Gb
      </h2>
      <p>Special products in this month. Special products in this month.</p>
      <div className={cls.countDown}>
        <CountDownTwo daysCount={2} background={`var(--secondary-background)`} tiny={true} />
      </div>
      <button>LEARN MORE <i className={`fa-sharp fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
    </div>
  )
}

export default SaleSeventyOne;
