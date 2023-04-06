import Grid from '@mui/material/Grid';

import cls from './categoriesEighteen.module.scss';

const CategoriesEighteen = () => {
  return (
    <div className={cls.categories}>
      <h4>Our Categories</h4>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.one}>
            <img src="/imgs/category/category-4.jpg" alt="category image" />
            <div className={cls.name}>For Men's</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.one}>
            <img src="/imgs/category/category-4.jpg" alt="category image" />
            <div className={cls.name}>For Men's</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.one}>
            <img src="/imgs/category/category-4.jpg" alt="category image" />
            <div className={cls.name}>For Men's</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.one}>
            <img src="/imgs/category/category-4.jpg" alt="category image" />
            <div className={cls.name}>For Men's</div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CategoriesEighteen
