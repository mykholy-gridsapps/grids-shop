import { Container, Grid } from "@mui/material";
import React from "react";
import FooterTwentyThree from "../../Footers/FooterTwentyThree/FooterTwentyThree";
import HeaderThirtyTwo from "../../Headers/HeaderThirtyTwo/HeaderThirtyTwo";
import SaleTwentyTwo from "../../Sale/SaleTwentyTwo/SaleTwentyTwo";
import SaleFiftyFive from "../../Sale/SaleFiftyFive/SaleFiftyFive";
import CollectioNintySix from "../../Collections/CollectioNintySix/CollectioNintySix";
import ProductOne from "../../ProductCard/ProductOne/ProductOne";
import NewsletterEight from "../../Newsletter/NewsletterFour/NewsletterFour";

import cls from "./template16.module.scss"


const Template16 = () => {
  return (
    <>
      <HeaderThirtyTwo />
      <SaleTwentyTwo />
      <Grid container >
        <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
          <SaleFiftyFive justifyContent="flex-start" />
        </Grid>
        <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
          <SaleFiftyFive justifyContent="flex-start" />
        </Grid>
      </Grid>
      <CollectioNintySix />
      <Grid container >
        <Grid item md={6} xs={12} order={{ md: 1, xs: 2 }}>
          <div className={cls.products}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <ProductOne />
              </Grid>
              <Grid item xs={6}>
                <ProductOne />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
          <SaleFiftyFive justifyContent="flex-start" />
        </Grid>
      </Grid>
      <Grid container >
        <Grid item md={6} xs={12}>
          <SaleFiftyFive justifyContent="flex-end"/>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={cls.products}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <ProductOne />
              </Grid>
              <Grid item xs={6}>
                <ProductOne />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <NewsletterEight />
      <SaleTwentyTwo />
      <CollectioNintySix />
      <FooterTwentyThree />
    </>
  );
};

export default Template16;
