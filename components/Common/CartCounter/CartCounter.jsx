import cls from './cartCounter.module.scss';

const CartCounter = ({ counter, setCounter, small }) => {
  const counterHandler = (value) => {
    if (value <= 0) return;
    setCounter(value)
  }

  return (
    <div className={`${cls.cartCounter} ${small ? cls.small : ''}`}>
      <button onClick={() => counterHandler(counter - 1)}>-</button>
      <input type="number" value={counter} onChange={(e) => counterHandler(+e.target.value)} />
      <button onClick={() => counterHandler(counter + 1)}>+</button>
    </div>
  )
}

export default CartCounter
