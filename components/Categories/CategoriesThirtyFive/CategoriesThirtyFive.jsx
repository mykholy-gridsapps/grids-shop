import cls from './categoriesThirtyFive.module.scss';

const CategoriesThirtyFive = () => {
  return (
    <div className={cls.category}>
      <div className={`${cls.item} ${cls.large}`}>
        <img src="/imgs/chair.jpg" alt="Category 1" />
        <h2>Category 1</h2>
        <span>300 products</span>
      </div>
      <div className={cls.item}>
        <img src="/imgs/chair.jpg" alt="Category 1" />
        <h2>Category 2</h2>
        <span>300 products</span>
      </div>
      <div className={cls.item}>
        <img src="/imgs/chair.jpg" alt="Category 1" />
        <h2>Category 3</h2>
        <span>300 products</span>
      </div>
      <div className={cls.item}>
        <img src="/imgs/chair.jpg" alt="Category 1" />
        <h2>Category 4</h2>
        <span>300 products</span>
      </div>
      <div className={cls.item}>
        <img src="/imgs/chair.jpg" alt="Category 1" />
        <h2>Category 5</h2>
        <span>300 products</span>
      </div>
    </div>
  )
}

export default CategoriesThirtyFive
