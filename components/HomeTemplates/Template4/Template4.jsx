import { Container, Grid } from "@mui/material";
import React from "react";
import CategoryOne from "../../Categories/CategoriesTwo/CategoryTwoCarousel";
import CollectionSixtyFour from "../../Collections/CollectionSixtyFour/CollectionSixtyFour";
import CollectionSixtySeven from "../../Collections/CollectionSixtySeven/CollectionSixtySeven";
import FeaturesThree from "../../Features/FeaturesThree/FeaturesThree";
import HeaderOne from "../../Headers/HeaderOne/HeaderOne";
import InfoBoxOne from "../../InfoBox/InfoBoxTwo/InfoBoxTwo";
import SliderOne from "../../MainSlider/SliderThree/SliderThree";
import SaleFour from "../../Sale/SaleFour/SaleFour";
import SaleThirteen from "../../Sale/SaleThirteen/SaleThirteen";
import SaleFourteen from "../../Sale/SaleNinteen/SaleNinteen";
import SaleThree from "../../Sale/SaleThree/SaleThree";
import SaleTwo from "../../Sale/SaleTwo/SaleTwo";
import BlogOneCarousel from "../../Blogs/BlogTwo/BlogTwoCarousel";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";

import cls from "./template4.module.scss"
import FooterFour from "../../Footers/FooterFour/FooterFour";

const Template4 = () => {
  return (
    <>
      <HeaderOne />
      <SliderOne />
      <Container maxWidth="xl">
        <InfoBoxOne />
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
      </Container>
      <div className={cls.collection}>
        <Container maxWidth="xl">
          <CollectionSixtyFour title="Featured Products" slides="4" />
        </Container>
      </div>
      <div className={cls.collection2}>
        <Container maxWidth="xl">
          <CollectionSixtyFour title="New Arrivals" slides="5" />
        </Container>
      </div>
      <Container maxWidth="xl">
        <SaleThirteen />
        <div className={cls.categories}>
          <CategoryOne />
        </div>
      </Container>
      <div className={cls.features}>
        <Container maxWidth="xl">
          <FeaturesThree />
        </Container>
      </div>
      <SaleFourteen />
      <Container maxWidth="xl">
        <div className={cls.blogs}>
          <BlogOneCarousel />
        </div>
        <BrandsOne slides="6"/>
        <CollectionSixtySeven />
      </Container>
      <FooterFour />
    </>
  );
};

export default Template4;
