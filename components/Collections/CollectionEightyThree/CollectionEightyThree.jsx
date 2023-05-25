import Grid from '@mui/material/Grid';

import cls from './collectionEightyThree.module.scss';

const CollectionEightyThree = () => {
  return (
    <div className={cls.collection}>
      <Grid container>
        <Grid item xs={12} md={4} className={cls.banner}>
          <div >
            <div className={cls.bannerContent}>
              <h3 class="banner-title mb-0">Sunglasses</h3>
              <p>16 Products</p>
              <hr class="divider-short-thick" />

              <a href="demo11-shop.html" class="btn">Shop now <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
            <a href="#">
              <img src="./imgs/collection/collection-83-1.jpg" alt="banner" />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={cls.banner}>
          <div >
            <div className={cls.bannerContent}>
              <h3 class="banner-title mb-0">Sunglasses</h3>
              <p>16 Products</p>
              <hr class="divider-short-thick" />

              <a href="demo11-shop.html" class="btn">Shop now <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
            <a href="#">
              <img src="./imgs/collection/collection-83-2.jpg" alt="banner" />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={cls.banner}>
          <div >
            <div className={cls.bannerContent}>
              <h3 class="banner-title mb-0">Sunglasses</h3>
              <p>16 Products</p>
              <hr class="divider-short-thick" />

              <a href="demo11-shop.html" class="btn">Shop now <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
            <a href="#">
              <img src="./imgs/collection/collection-83-3.jpg" alt="banner" />
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionEightyThree