import ProductOne from "./../../../ProductCard/ProductOne/ProductOne";

import Grid from "@mui/material/Grid";

import cls from "./todaysDeals.module.scss";

const TodaysDeals = () => {
  const myArr = [0, 1, 2, 3, 4, 5];

  return (
    <div className={cls.todayDeals}>
      <Grid container columnSpacing={1}>
        {myArr.map((element) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={element}>
            <ProductOne />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TodaysDeals;
