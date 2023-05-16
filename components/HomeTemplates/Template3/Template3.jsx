import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderEleven from "../../Headers/HeaderEleven/HeaderEleven";
import SliderTwo from "../../MainSlider/SliderTwo/SliderTwo";
import CategoryOne from "../../Categories/CategoriesOne/CategoryOneCarousel";
import SaleTwelve from "../../Sale/SaleTwelve/SaleTwelve";

import cls from "./template3.module.scss"
import FeaturesTwo from "../../Features/FeaturesTwo/FeaturesTwo";
import FooterThree from "../../Footers/FooterThree/FooterThree";
import CollectionSixtyThree from "../../Collections/CollectionSixtyThree/CollectionSixtyThree";


const Template3 = () => {
  return (
    <>
      <HeaderEleven />
      <SliderTwo />
      <div className={cls.categoryContent}>
        <Container maxWidth="xxl" >
          <CategoryOne />
        </Container>
      </div>
      <div className={cls.bannersContent}>
        <Container maxWidth="xxl" >
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xs={12}>
              <SaleTwelve />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <SaleTwelve />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <SaleTwelve />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <SaleTwelve />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={cls.collectionContent}>
        <CollectionSixtyThree />
      </div>
      <div className={cls.featuresContent}>
        <Container maxWidth="xxl" >
          <hr />
          <FeaturesTwo />
        </Container>
      </div>
      <FooterThree />
    </>
  );
};

export default Template3;
