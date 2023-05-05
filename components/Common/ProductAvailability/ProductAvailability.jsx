import cls from './productAvailability.module.scss';

const ProductAvailability = () => {
  return (
    <div className={cls.productAvailability}>
      <div className={cls.progress}>
        <span><span></span></span>
      </div>
      <div className={cls.details}>
        <p>Available: <span>568</span></p>
        <p>Sold: <span>289</span></p>
      </div>
    </div>
  )
}

export default ProductAvailability
