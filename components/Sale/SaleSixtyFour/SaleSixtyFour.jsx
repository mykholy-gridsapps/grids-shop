import cls from './saleSixtyFour.module.scss';

const SaleSixtyFour = () => {
  return (
    <div className={cls.sale}>
      <img src="/imgs/sale333.jpg" alt="product" />
      <div className={cls.details}>
        <span>Small Title</span>
        <h2>
          Our Sale Title
          <br />
          Redeeming Factors
        </h2>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default SaleSixtyFour;
