import { useTranslation } from 'next-i18next';

import cls from './simpleCartCounter.module.scss';

const CartCounter = ({ counter, setCounter }) => {
  const { i18n } = useTranslation('common');

  const counterHandler = (value) => {
    if (value <= 0) return;
    setCounter(value)
  }

  return (
    <div className={`${cls.cartCounter}`}>
      <input type="number" value={counter} onChange={(e) => counterHandler(+e.target.value)} />
      <div className={`${cls.btns} ${cls[i18n.language]}`}>
        <button onClick={() => counterHandler(counter - 1)}>-</button>
        <button onClick={() => counterHandler(counter + 1)}>+</button>
      </div>
    </div>
  )
}

export default CartCounter
