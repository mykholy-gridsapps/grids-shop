import { useTranslation } from 'next-i18next';

import cls from './saleSeventy.module.scss';

const SaleSeventy = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.sale}>
      <img src="/imgs/lastBack.jpg" alt="product" />
      <h2>
        iphone 12 pro
        <br />
        128Gb
      </h2>
      <span>Starting from $899</span>
      <ul>
        <li>Makes Water 100% Pure</li>
        <li>Multiple Purification Process</li>
        <li>Retains Essential Minerals</li>
      </ul>
    </div>
  )
}

export default SaleSeventy;
