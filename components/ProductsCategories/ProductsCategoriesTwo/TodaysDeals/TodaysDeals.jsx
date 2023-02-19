import ProductTwo from "./../../../ProductCard/ProductTwo/ProductTwo";

import Grid from "@mui/material/Grid";

import cls from "./todaysDeals.module.scss";

const TodaysDeals = () => {
  const myArr = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={cls.todayDeals}>
      <Grid container className={cls.grid} columnSpacing={1}>
        {myArr.map((element) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
            className={cls.grid}
            key={element}
          >
            <ProductTwo />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TodaysDeals;
