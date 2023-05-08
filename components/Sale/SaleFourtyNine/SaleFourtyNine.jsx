import Grid from '@mui/material/Grid';

import cls from './saleFourtyNine.module.scss';

const SaleFourtyNine = () => {
  return (
    <div className={cls.sale}>
      <Grid container>
        <Grid item xs={12} md={8} lg={6}>
          <img src="/imgs/electro.jpg" alt="product" />
          <span>New Technologies</span>
          <h2>Webcams 2023</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fugit</p>
          <button>SHOP MORE</button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleFourtyNine;
