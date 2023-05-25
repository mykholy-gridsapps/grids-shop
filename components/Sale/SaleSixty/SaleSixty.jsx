import cls from './saleSixty.module.scss';

const SaleSixty = () => {
  return (
    <div className={cls.sale}>
      <img src="/imgs/sale.jpg" alt="product" />
      <div className={cls.details}>
        <span>Small Title</span>
        <h2>Our Sale Title</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <span className={cls.price}>
        $399.00
      </span>
    </div>
  )
}

export default SaleSixty;
