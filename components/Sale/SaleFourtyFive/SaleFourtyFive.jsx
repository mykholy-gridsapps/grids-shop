import cls from './saleFourtyFive.module.scss';

const SaleFourtyFive = () => {
  return (
    <div className={cls.sale}>
      <div className={cls.content}>
        <p>END AT SUMMER SALE</p>
        <span>UP TO</span>
        <h2>
          70
          <span>%</span>
        </h2>
        <h5>DISCOUNT</h5>
        <button>shop now</button>
      </div>
    </div>
  )
}

export default SaleFourtyFive
