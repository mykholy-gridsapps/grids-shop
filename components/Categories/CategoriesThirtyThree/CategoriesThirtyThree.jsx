import Grid from '@mui/material/Grid';

import cls from './categoriesThirtyThree.module.scss';

const CategoriesThirtyThree = () => {
  return (
    <div className={cls.categories}>
      <Grid container spacing={1}>
        {[...Array(6)].map((_, idx) => (
          <Grid item xs={12} sm={4} md={4} lg={2} key={idx}>
            <div className={cls.category}>
              <img src="/imgs/category.jpg" alt="category image" />
              <div className={cls.content}>
                <h5>Technology</h5>
                <span>33 products</span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CategoriesThirtyThree
