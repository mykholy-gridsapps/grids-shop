import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderOne from "../../Headers/HeaderOne/HeaderOne";
import InfoBoxOne from "../../InfoBox/InfoBoxOne/InfoBoxOne";
import SliderOne from "../../MainSlider/SliderOne/SliderOne";
import CategoriesSideOne from "../../CategoriesSide/CategoriesSideOne/CategoriesSideOne";
import SaleOne from "../../Sale/SaleOne/SaleOne";
import SaleTwo from "../../Sale/SaleTwo/SaleTwo";

const Template1 = () => {
  return (
    <>
      <HeaderOne />
      <Container maxWidth="xl">
        <InfoBoxOne />
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <CategoriesSideOne />
            
            <SaleOne />
          </Grid>
          <Grid item xs={12} lg={9}>
            <SliderOne />
            <SaleTwo />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};



export default Template1;
