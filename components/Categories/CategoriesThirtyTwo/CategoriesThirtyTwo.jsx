import Grid from '@mui/material/Grid';

import cls from './categoriesThirtyTwo.module.scss';

const CategoriesThirtyTwo = () => {
  return (
    <div className={cls.categories}>
      <Grid container spacing={2} justifyContent="center">
        {[...Array(8)].map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} xl={3}>
            <div className={cls.gridItem}>
              <img src="/imgs/sh.png" alt="Product" className={cls.productImage} />
              <div className={cls.productDetails}>
                <h4 className={cls.categoryTitle}>Category Title</h4>
                <ul className={cls.categoryList}>
                  <li>Category 1</li>
                  <li>
                    <div className={cls.badge}>
                      <div className={cls.triangle}></div>
                      <span>New</span>
                    </div>
                    Category 2
                  </li>
                  <li>Category 3</li>
                  <li>Category 4</li>
                </ul>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CategoriesThirtyTwo
