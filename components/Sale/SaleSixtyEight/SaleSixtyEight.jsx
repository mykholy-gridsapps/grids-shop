import { useTranslation } from 'next-i18next';

import cls from './saleSixtyEight.module.scss';

const SaleSixtyEight = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.sale}>
      <img src="/imgs/brand.jpg" alt="product" />
      <span>Starting from $899</span>
      <h2>
        iphone 12 pro
        <br />
        128Gb
      </h2>
      <p>Special Sale</p>
      <button>SHOP NOW <i className={`fa-sharp fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
    </div>
  )
}

export default SaleSixtyEight
