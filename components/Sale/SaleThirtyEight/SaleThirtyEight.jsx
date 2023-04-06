import { useEffect, useRef } from 'react';

import { useTranslation } from 'next-i18next';

import cls from './saleThirtyEight.module.scss';

const SaleThirtyEight = () => {
  const animatingContainer = useRef();
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (animatingContainer.current) {
      setInterval(() => {
        if (animatingContainer.current) {
          animatingContainer.current.classList.remove('animationOn')
        }
      }, 45000);
    }
  }, [animatingContainer])

  return (
    <div className={[cls.saleThirtyEight, cls[i18n.language]].join(' ')}>
      <button><span>WHITE FRIDAY SALE!</span></button>
      <div className={cls.slidingText}>
        <div className={`${cls.internalWrapper} ${cls.animationOn} animationOn ${cls[i18n.language]}`} ref={animatingContainer}>
          <p>Dell Vostro 3500 laptop - 11th Intel core</p>
          <p>Dell Vostro 3500 laptop - 11th Intel core</p>
          <p>Dell Vostro 3500 laptop - 11th Intel core</p>
          <p>Dell Vostro 3500 laptop - 11th Intel core</p>
          <p>Dell Vostro 3500 laptop - 11th Intel core</p>
          <p>Dell Vostro 3500 laptop - 11th Intel core</p>
        </div>
      </div>
      <button className={cls.shop}>
        <i className="fa-regular fa-cart-shopping"></i> Shop Now!
      </button>
    </div>
  )
}

export default SaleThirtyEight
