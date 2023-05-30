import { Container, Grid } from "@mui/material";
import React from "react";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import CollectionSeventyEight from "../../Collections/CollectionSeventyEight/CollectionSeventyEight";
import CollectionSixty from "../../Collections/CollectionSixty/CollectionSixty";
import FeaturesThree from "../../Features/FeaturesThree/FeaturesThree";
import FooterTwo from "../../Footers/FooterTwo/FooterTwo";
import HeaderTwentyEight from "../../Headers/HeaderTwentyEight/HeaderTwentyEight";
import InfoBoxOne from "../../InfoBox/InfoBoxThree/InfoBoxThree";
import SliderThirtyThree from "../../MainSlider/SliderThirtyThree/SliderThirtyThree";
import SaleEighteen from "../../Sale/SaleEighteen/SaleEighteen";
import SaleTen from "../../Sale/SaleNinteen/SaleNinteen";

import cls from "./template14.module.scss"


const Template14 = () => {
  return (
    <>
      <HeaderTwentyEight />
      <SliderThirtyThree />
      <div className={cls.infoBox}>
        <Container maxWidth="xl">
          <InfoBoxOne />
        </Container>
      </div>
      <div className={cls.banners}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <SaleEighteen />
            </Grid>
            <Grid item md={4} xs={12}>
              <SaleEighteen />
            </Grid>
            <Grid item md={4} xs={12}>
              <SaleEighteen />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container maxWidth="xl">
        <CollectionSixty />
      </Container>
      <div className={cls.features}>
        <Container maxWidth="xl">
          <FeaturesThree />
        </Container>
      </div>
      <SaleTen />
      <Container maxWidth="xl">
        <BrandsOne border="none" slides="6"/>
        <hr className={cls.seprator}/>
        <CollectionSeventyEight seprator="hidden"/>
      </Container>
      <FooterTwo label="none"/>
    </>
  );
};

export default Template14;
