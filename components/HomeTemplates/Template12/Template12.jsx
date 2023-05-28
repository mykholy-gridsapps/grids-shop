import { Container, Grid } from "@mui/material";
import React from "react";
import CategoriesFourtyOne from "../../Categories/CategoriesFourtyOne/CategoriesFourtyOne";
import HeaderOne from "../../Headers/HeaderTwentyFour/HeaderTwentyFour";
import SliderThirtyOne from "../../MainSlider/SliderThirtyOne/SliderThirtyOne";
import SaleSeventeen from "../../Sale/SaleSeventeen/SaleSeventeen";
import SaleSix from "../../Sale/SaleSix/SaleSix";
import SaleSixtyThree from "../../Sale/SaleSixtyThree/SaleSixtyThree";
import SaleFiftySeven from "../../Sale/SaleFiftySeven/SaleFiftySeven";
import SaleFiftyTwo from "../../Sale/SaleFiftyTwo/SaleFiftyTwo";
import SaleNinteen from "../../Sale/SaleNinteen/SaleNinteen";
import SaleEleven from "../../Sale/SaleEleven/SaleEleven";
import SaleEight from "../../Sale/SaleNine/SaleNine";
import FeaturesFour from "../../Features/FeaturesSix/FeaturesSix";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import CollectionSixtyFour from "../../Collections/CollectionSixtyFour/CollectionSixtyFour";
import CollectionSixtySeven from "../../Collections/CollectionSixtySeven/CollectionSixtySeven";
import FooterFour from "../../Footers/FooterFour/FooterFour";

import cls from "./template12.module.scss"


const Template12 = () => {
  return (
    <>
      <HeaderOne />
      <SliderThirtyOne />
      <CategoriesFourtyOne />
      <Grid container spacing={1} className={cls.banners}>
        <Grid item lg={9} xs={12}>
          <Grid container spacing={1}>
            <Grid item lg={7} xs={12}>
              <SaleSixtyThree />
            </Grid>
            <Grid item lg={5} xs={12}>
              <SaleSix height="320px"/>
            </Grid>
            <Grid item xs={12}>
              <SaleSeventeen height="300px"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} xs={12}>
          <SaleEight />
        </Grid>
        <Grid item xs={12}>
          <SaleNinteen />
        </Grid>
        <Grid item lg={3} xs={12}>
          <SaleFiftyTwo height="510px" imgHeight="510px"/>
        </Grid>
        <Grid item lg={9} xs={12}>
          <Grid container spacing={1}>
            <Grid item lg={6} xs={12}>
              <SaleEleven height="278px"/>
            </Grid>
            <Grid item lg={6} xs={12}>
              <SaleFiftySeven height="278px"/>
            </Grid>
            <Grid item xs={12}>
              <FeaturesFour />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BrandsOne border="none" slides="6"/>
      <div className={cls.container}>
        <hr className={cls.seprator}/>
        <CollectionSixtyFour title="TOP BRANDS COLLECTION" slides="5" />
        <hr className={cls.seprator}/>
        <CollectionSixtyFour title="SUMMER SALE - UP TO 70%" slides="5" />
        <hr className={cls.seprator}/>
        <CollectionSixtySeven />
      </div>
      <FooterFour />
    </>
  );
};

export default Template12;
