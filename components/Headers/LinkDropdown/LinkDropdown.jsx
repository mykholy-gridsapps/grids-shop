import Grid from "@mui/material/Grid";

import cls from './linkDropdown.module.scss';

const LinkDropdown = () => {
  return (
    <div className={cls.pagesDropdown}>
      <div className={cls.linkDropdown}>
        <Grid container>
          <Grid item md={3}>
            <h5>Laptops</h5>

            <ul>
              <li>Thin and Light Laptops</li>
              <li>Gaming Laptops</li>
              <li>Budget Laptops</li>
              <li>Business Laptops</li>
              <li>Apple</li>
              <li>HP</li>
              <li>Lenovo</li>
              <li>Acer</li>
              <li>Dell</li>
            </ul>
          </Grid>

          <Grid item md={3}>
            <h5>Tablets</h5>

            <ul>
              <li>Apple</li>
              <li>Lenovo</li>
              <li>Samsung</li>
              <li>Micromax</li>
              <li>iBall</li>
              <li>Keyboard</li>
              <li>Mice</li>
              <li>Laptop Bags</li>
              <li>PC Speakers</li>
              <li>Batteries</li>
            </ul>
          </Grid>

          <Grid item md={3}>
            <h5>Mobiles</h5>

            <ul>
              <li>Samsung</li>
              <li>Lenovo</li>
              <li>MI</li>
              <li>Motorola</li>
              <li>Oppo</li>
              <li>Panasonic</li>
              <li>HTC</li>
              <li>LG</li>
              <li>Blackberry</li>
              <li>Nokia</li>
              <li></li>
            </ul>
          </Grid>

          <Grid item md={3}>
            {/* <img src="/imgs/products/play.png" alt="categoryImage" /> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LinkDropdown;
