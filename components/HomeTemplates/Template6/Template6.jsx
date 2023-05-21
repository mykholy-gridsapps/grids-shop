import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderFourteen from "../../Headers/HeaderFourteen/HeaderFourteen";
import SliderSix from "../../MainSlider/SliderFive/SliderFive";
import FooterThree from "../../Footers/FooterThree/FooterThree";
import SaleEight from "../../Sale/SaleEight/SaleEight";
import SaleThree from "../../Sale/SaleThree/SaleThree";
import SaleFiftyTwo from "../../Sale/SaleFiftyTwo/SaleFiftyTwo";
import SaleFiftyThree from "../../Sale/SaleFiftyThree/SaleFiftyThree";
import SaleFiftyFive from "../../Sale/SaleFiftyFive/SaleFiftyFive";
import ProductOne from "../../ProductCard/ProductOne/ProductOne";
import FeaturesFour from "../../Features/FeaturesFour/FeaturesFour";
import CollectionSeventy from "../../Collections/CollectionSeventy/CollectionSeventy";

import cls from "./template6.module.scss"
import FooterSix from "../../Footers/FooterSix/FooterSix";


const Template6 = () => {
  return (
    <>
      <HeaderFourteen />
      <SliderSix />
      <Grid container>
        <Grid item xl={3} sm={6} xs={12}>
          <SaleFiftyThree imgHeight="200px"/>
        </Grid>
        <Grid item xl={3} sm={6} xs={12}>
          <SaleFiftyTwo imgHeight="200px"/>
        </Grid>
        <Grid item xl={3} sm={6} xs={12}>
          <SaleEight imgHeight="200px"/>
        </Grid>
        <Grid item xl={3} sm={6} xs={12}>
          <SaleThree imgHeight="200px"/>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item md={6} xs={12} order={{md:1, xs:2}}>
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
        <Grid item md={6} xs={12} order={{md:2, xs:1}}>
          <SaleFiftyFive justifyContent="flex-start"/>
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
      <div className={cls.features}>
        <FeaturesFour />
        <hr />
      </div>
      <div className={cls.features}>
        <CollectionSeventy  title="Featured Products" slides="5"/>
      </div>
      <FooterSix />
    </>
  );
};

export default Template6;
