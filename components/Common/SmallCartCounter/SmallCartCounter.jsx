import cls from './smallCartCounter.module.scss';

const SmallCartCounter = ({ counter, setCounter }) => {
  const counterHandler = (value) => {
    if (value <= 0) return;
    setCounter(value)
  }

  return (
    <div className={cls.cartCounter}>
      <button onClick={() => counterHandler(counter - 1)}>-</button>
      <input type="number" value={counter} onChange={(e) => counterHandler(+e.target.value)} />
      <button onClick={() => counterHandler(counter + 1)}>+</button>
    </div>
  )
}

export default SmallCartCounter;
