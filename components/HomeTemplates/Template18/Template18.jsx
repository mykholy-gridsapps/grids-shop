import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import CollectionSeventy from "../../Collections/CollectionSeventy/CollectionSeventy";
import FeaturesTwo from "../../Features/FeaturesTwo/FeaturesTwo";
import FooterThree from "../../Footers/FooterThree/FooterThree";
import HeaderEleven from "../../Headers/HeaderEleven/HeaderEleven";
import SliderThirtySeven from "../../MainSlider/SliderThirtySeven/SliderThirtySeven";
import ProductOne from "../../ProductCard/ProductOne/ProductOne";
import SaleSeventyFour from "../../Sale/SaleSeventyFour/SaleSeventyFour";
import SaleSeventyThree from "../../Sale/SaleSeventyThree/SaleSeventyThree";
import SaleThree from "../../Sale/SaleTwentyThree/SaleTwentyThree";
import cls from "./template18.module.scss"


const Template18 = () => {
  return (
    <>
      <HeaderEleven color="#fff" />
      <SliderThirtySeven />
      <Container maxWidth="xxl" className={cls.products}>
        <Grid container spacing={3}>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <ProductOne />
          </Grid>
        </Grid>
        <div className={cls.btn}>
          <Link href="#">Load More...</Link>
        </div>
      </Container>
      <SaleSeventyThree />
      <Container maxWidth="xxl" className={cls.products}>
        <CollectionSeventy title="Featured Products" slides="6" />

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <SaleThree />
          </Grid>
          <Grid item md={6} xs={12}>
            <SaleThree />
          </Grid>
        </Grid>
      </Container>
      <SaleSeventyFour />
      <div className={cls.featuresContent}>
        <Container maxWidth="xxl" >
          <FeaturesTwo bgColor="#111111" color="#fff" />
        </Container>
      </div>
      <FooterThree  bgColor="#111111" color="#fff"/>
    </>
  );
};

export default Template18;
