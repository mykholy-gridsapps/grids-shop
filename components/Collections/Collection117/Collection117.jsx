import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './collection117.module.scss';

const Collection117 = () => {
  return (
    <div className={cls.collection}>
      <Container maxWidth="xxl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="/imgs/screen.png" alt="product" />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={cls.products}>

            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Collection117;