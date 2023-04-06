import cls from './categoriesTwenty.module.scss';

const CategoriesTwenty = () => {
  return (
    <div className={cls.categoriesTwenty}>
      <div className={cls.saleContent}>
        <img src="/imgs/5.jpg" alt="" />
        <div className={cls.content}>
          <p>Trending 2022 Collection</p>
          <span>Take advantage of our latest</span>
          <h4>
            <span>20%</span>
            DISCOUNT
          </h4>
        </div>
      </div>
      <div className={cls.category}>
        <img src="/imgs/7.jpg" alt="" />
        <div className={cls.content}>
          <p>CHECK OUT NOW</p>
          <h4>Classic Watches</h4>
        </div>
      </div>
      <div className={cls.category}>
        <img src="/imgs/7.jpg" alt="" />
        <div className={cls.content}>
          <p>CHECK OUT NOW</p>
          <h4>Classic Watches</h4>
        </div>
      </div>
      <div className={cls.category}>
        <img src="/imgs/7.jpg" alt="" />
        <div className={cls.content}>
          <p>CHECK OUT NOW</p>
          <h4>Classic Watches</h4>
        </div>
      </div>
      <div className={cls.category}>
        <img src="/imgs/7.jpg" alt="" />
        <div className={cls.content}>
          <p>CHECK OUT NOW</p>
          <h4>Classic Watches</h4>
        </div>
      </div>
    </div>
  )
}

export default CategoriesTwenty
