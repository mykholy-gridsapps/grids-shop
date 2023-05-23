import cls from './saleSixtyOne.module.scss';

const SaleSixtyOne = () => {
  return (
    <div className={cls.sale}>
      <div className={cls.side}>
        <img src="/imgs/brand.jpg" alt="product" />
        <span>Hich Tech News</span>
        <p>Monster Beats Headphones</p>
        <button>READ MORE</button>
      </div>
      <div className={cls.center}>
        <img src="/imgs/sale.jpg" alt="product" />
        <span>Hich Tech News</span>
        <p>Monster Beats Headphones</p>
      </div>
      <div className={cls.side}>
        <img src="/imgs/brand.jpg" alt="product" />
        <span>Hich Tech News</span>
        <p>Monster Beats Headphones</p>
        <button>READ MORE</button>
      </div>
      <div className={cls.center}>
        <img src="/imgs/sale.jpg" alt="product" />
        <span>Hich Tech News</span>
        <p>Monster Beats Headphones</p>
      </div>
    </div>
  )
}

export default SaleSixtyOne
