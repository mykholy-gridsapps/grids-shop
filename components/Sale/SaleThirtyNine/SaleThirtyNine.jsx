import cls from './saleThirtyNine.module.scss';

const SaleThirtyNine = () => {
  return (
    <div className={cls.saleThirtyNine}>
      <span></span>
      <div className={cls.content}>
        <p>Extra <span><i className="fa-regular fa-star"></i> 30% off <i className="fa-regular fa-star"></i></span> Online</p>
        <h2>Summer Season Sale</h2>
        <p>Free shipping on orders over $99</p>
        <button><i className="fa-light fa-cart-shopping"></i> SHOP NOW</button>
      </div>
    </div>
  )
}

export default SaleThirtyNine
