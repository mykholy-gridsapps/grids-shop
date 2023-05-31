import { Container, Grid } from "@mui/material";
import React from "react";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import CategoriesSideTwo from "../../CategoriesSide/CategoriesSideThree/CategoriesSideThree";
import CollectionNintyOne from "../../Collections/CollectionNintyOne/CollectionNintyOne";
import FeaturesOne from "../../Features/FeaturesSeven/FeaturesSeven";
import FooterNine from "../../Footers/FooterNine/FooterNine";
import HeaderOne from "../../Headers/HeaderOne/HeaderOne";
import InfoBoxFour from "../../InfoBox/InfoBoxFour/InfoBoxFour";
import SliderEight from "../../MainSlider/SliderEight/SliderEight";
import NewsletterEight from "../../Newsletter/NewsletterThree/NewsletterThree";
import SaleTen from "../../Sale/SaleSeventeen/SaleSeventeen";
import SaleFive from "../../Sale/SaleTwentyOne/SaleTwentyOne";

import cls from "./template15.module.scss"


const Template15 = () => {
  return (
    <>
      <HeaderOne topBg="transparent" topColor="#777777" bgColor="transparent" />
      <SliderEight />
      <Container maxWidth="xl">
        <InfoBoxFour />
        <Grid container spacing={3}>
          <Grid item lg={3} xs={12}>
            <CategoriesSideTwo />
            <FeaturesOne />
          </Grid>
          <Grid item lg={9} xs={12}>
            <CollectionNintyOne title="Recent Products" subtitle="All our new arrivals in a exclusive brand selection" />
          </Grid>
        </Grid>
        <div className={cls.banners}>
          <Grid container spacing={3}>
            <Grid item lg={4} xs={12}>
              <SaleFive />
            </Grid>
            <Grid item lg={4} xs={12}>
              <SaleFive />
            </Grid>
            <Grid item lg={4} xs={12}>
              <SaleFive />
            </Grid>
          </Grid>
        </div>
        <CollectionNintyOne title="Products On Sale" subtitle="All our new arrivals in a exclusive brand selection" />
        <div className={cls.sale}>
          <SaleTen />
        </div>
        <CollectionNintyOne title="Popular Products" subtitle="All our new arrivals in a exclusive brand selection" />
        <NewsletterEight />
        <BrandsOne border="none"/>
      </Container>
      <FooterNine bgColor="#0b1224"/>
    </>
  );
};

export default Template15;
