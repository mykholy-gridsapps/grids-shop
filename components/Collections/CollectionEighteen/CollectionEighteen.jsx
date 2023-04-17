import ProductOne from '../../ProductCard/ProductOne/ProductOne';

import Grid from '@mui/material/Grid';

import cls from './collectionEighteen.module.scss';

const CollectionEighteen = () => {
  return (
    <div className={cls.productsCategories}>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <div className={cls.collection}>
            <div className={cls.part}>
              <img src="/imgs/tall.jpg" alt="sale" />
              <div className={cls.content}>
                <p>Nike</p>
                <span>SPORTWEAR COLLECTION</span>
                <button>SHOP NIKE</button>
              </div>
            </div>
            <div className={cls.part}>
              <img src="/imgs/wide.jpg" alt="sale" />
              <div className={cls.content}>
                <p>Nike</p>
                <span>SPORTWEAR COLLECTION</span>
                <button>SHOP NIKE</button>
              </div>
            </div>
            <div className={cls.part}>
              <img src="/imgs/wide.jpg" alt="sale" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={cls.products}>
            <h4>BAGS COLLECTION</h4>
            <div className={cls.wrapper}>
              <ProductOne />
              <ProductOne />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionEighteen;
