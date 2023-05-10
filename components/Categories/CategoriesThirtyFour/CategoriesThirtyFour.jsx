import Grid from '@mui/material/Grid';

import cls from './categoriesThirtyFour.module.scss';

const CategoriesThirtyFour = () => {
  return (
    <div className={cls.categories}>
      <div className={cls.head}>
        <span>Light On The Wallet</span>
        <h2>CUSTOM DESKTOPS</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque numquam nulla iste dignissimos quas ducimus quidem ullam ex perferendis! Distinctio suscipit nihil beatae sit velit natus corrupti culpa, tempora voluptatem.</p>
      </div>
      <Grid container spacing={2} justifyContent="center">
        {[...Array(4)].map((_, index) => (
          <Grid item key={index} xs={12} md={6}>
            <div className={cls.gridItem}>
              <img src="/imgs/case.webp" alt="Product" className={cls.productImage} />
              <div className={cls.productDetails}>
                <h4 className={cls.categoryTitle}>Category Title</h4>
                <ul className={cls.categoryList}>
                  <li><i class="fa-regular fa-check"></i> Category 1</li>
                  <li><i class="fa-regular fa-check"></i> Category 2</li>
                  <li><i class="fa-regular fa-check"></i> Category 3</li>
                  <li><i class="fa-regular fa-check"></i> Category 4</li>
                  <li><i class="fa-regular fa-check"></i> Category 3</li>
                  <li><i class="fa-regular fa-check"></i> Category 4</li>
                </ul>
                <button>READ MORE</button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CategoriesThirtyFour
