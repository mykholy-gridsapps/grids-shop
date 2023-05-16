import { Container, Grid } from "@mui/material";
import React from "react";
import CategoriesSideOne from "../../CategoriesSide/CategoriesSideOne/CategoriesSideOne";
import HeaderTwo from "../../Headers/HeaderFour/HeaderFour";
import InfoBoxOne from "../../InfoBox/InfoBoxOne/InfoBoxOne";
import SliderTwo from "../../MainSlider/SliderOne/SliderOne";
import SaleFive from "../../Sale/SaleFive/SaleFive";
import SaleSix from "../../Sale/SaleSix/SaleSix";
import SaleSeven from "../../Sale/SaleSeven/SaleSeven";
import SaleEight from "../../Sale/SaleEight/SaleEight";
import SaleNine from "../../Sale/SaleNine/SaleNine";
import SaleTen from "../../Sale/SaleTen/SaleTen";
import SaleEleven from "../../Sale/SaleEleven/SaleEleven";
import SaleThree from "../../Sale/SaleThree/SaleThree";
import SaleFiftyOne from "../../Sale/SaleFiftyOne/SaleFiftyOne";
import CollectionSixty from "../../Collections/CollectionSixty/CollectionSixty";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import FooterTwo from "../../Footers/FooterTwo/FooterTwo";

import cls from "./template2.module.scss"


const Template2 = () => {
  return (
    <>
      <HeaderTwo />
      <Container maxWidth="xl" className={cls.container}>
        <Grid container spacing={3}>

          <Grid item xs={12} lg={3}>
            <CategoriesSideOne />
          </Grid>
          <Grid item xs={12} lg={9}>
            <SliderTwo />
          </Grid>
        </Grid>
        <InfoBoxOne margin="0 0 20px" />
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SaleFive />
              </Grid>
              <Grid item xs={12}>
                <SaleFiftyOne />
              </Grid>
              <Grid item xs={12}>
                <SaleTen />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SaleSix />
              </Grid>
              <Grid item xs={12}>
                <SaleEight />
              </Grid>
              <Grid item xs={12}>
                <SaleEleven />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SaleSeven />
              </Grid>
              <Grid item xs={12}>
                <SaleNine />
              </Grid>
              <Grid item xs={12}>
                <SaleThree />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div  className={cls.collectionContainer}>
        <Container maxWidth="xl">
          <CollectionSixty />
        </Container>
      </div>
      <Container maxWidth="xl">
        <BrandsOne border="none" slides="6"/>
      </Container>
      <FooterTwo />
    </>
  );
};

export default Template2;
