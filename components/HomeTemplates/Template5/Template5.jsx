import { Container, Grid } from "@mui/material";
import React from "react";
import CategoryOne from "../../Categories/CategoriesTwo/CategoryTwoCarousel";
import CollectionSixtyFour from "../../Collections/CollectionSixtyFour/CollectionSixtyFour";
import CollectionSixtySeven from "../../Collections/CollectionSixtySeven/CollectionSixtySeven";
import FeaturesFour from "../../Features/FeaturesFour/FeaturesFour";
import HeaderOne from "../../Headers/HeaderOne/HeaderOne";
import InfoBoxThree from "../../InfoBox/InfoBoxThree/InfoBoxThree";
import SliderFour from "../../MainSlider/SliderFour/SliderFour";
import SaleFour from "../../Sale/SaleFour/SaleFour";
import SaleThirteen from "../../Sale/SaleThirteen/SaleThirteen";
import SaleFourteen from "../../Sale/SaleNinteen/SaleNinteen";
import SaleThree from "../../Sale/SaleThree/SaleThree";
import SaleTwo from "../../Sale/SaleTwo/SaleTwo";
import BlogOneCarousel from "../../Blogs/BlogTwo/BlogTwoCarousel";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import FooterFive from "../../Footers/FooterFive/FooterFive";

import cls from "./template5.module.scss"
import CollectionSixtyEight from "../../Collections/CollectionSixtyEight/CollectionSixtyEight";
import ProductOne from "../../ProductCard/ProductOne/ProductOne";

const Template5 = () => {
  return (
    <>
      <HeaderOne bgColor="transparent" />
      <Container maxWidth="xl">
        <InfoBoxThree />
      </Container>
      <SliderFour />
      <Container maxWidth="xl">

        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <CollectionSixtyEight />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CollectionSixtyEight />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CollectionSixtyEight />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <SaleTwo />
          </Grid>
          <Grid item xs={12} lg={4}>
            <SaleThree />
          </Grid>
          <Grid item xs={12} lg={4}>
            <SaleFour />
          </Grid>
        </Grid>
        <div className={cls.products}>
          <Grid container spacing={3}>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
            <Grid item lg md={3} sm={4} xs={12}>
              <ProductOne />
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="xl">
        <SaleThirteen />
      </Container>
      <div className={cls.features}>
        <Container maxWidth="xl">
          <FeaturesFour />
        </Container>
      </div>
      <Container maxWidth="xl">
        <BrandsOne slides="6" />
      </Container>
      <FooterFive />
    </>
  );
};

export default Template5;
