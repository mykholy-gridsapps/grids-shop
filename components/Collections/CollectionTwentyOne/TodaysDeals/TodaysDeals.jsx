import ProductOne from "../../../ProductCard/ProductOne/ProductOne";

import Grid from "@mui/material/Grid";

import cls from "./todaysDeals.module.scss";

const TodaysDeals = () => {
  const myArr = [...Array(8)];

  return (
    <div className={cls.todayDeals}>
      <Grid container columnSpacing={2}>
        {myArr.map((element) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={element}>
            <ProductOne />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TodaysDeals;
