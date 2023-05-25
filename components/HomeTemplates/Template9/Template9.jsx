import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import CollectionSixtyFour from "../../Collections/CollectionSixtyFour/CollectionSixtyFour";
import CollectionSixtyEight from "../../Collections/CollectionSixtyEight/CollectionSixtyEight";
import HeaderTwentyOne from "../../Headers/HeaderTwentyOne/HeaderTwentyOne";
import InfoBoxOne from "../../InfoBox/InfoBoxFour/InfoBoxFour";
import SliderSeven from "../../MainSlider/SliderSeven/SliderSeven";
import NewsletterOne from "../../Newsletter/NewsletterOne/NewsletterOne";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import FooterNine from "../../Footers/FooterNine/FooterNine";

import cls from "./template9.module.scss"


const Template9 = () => {
  return (
    <>
      <Container maxWidth="xl" >
        <InfoBoxOne marginBottom="0" fontSize="12px" iconSize="20px" />
      </Container>
      <HeaderTwentyOne />
      <Container maxWidth="xl" >
        <Grid container >
          <Grid item lg={9} xs={12} mdOffset={3}>
            <SliderSeven />
          </Grid>
        </Grid>
        <div className={cls.collection}>
          <CollectionSixtyFour title="Featured Products" slides="4" />
        </div>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <CollectionSixtyEight bgColor="#f4f4f4" fontSize="18px" />
          </Grid>
          <Grid item md={6} xs={12}>
            <CollectionSixtyEight bgColor="#f4f4f4" fontSize="18px" />
          </Grid>
        </Grid>
        <div className={cls.collection}>
          <CollectionSixtyFour title="FASHION SELECTION " slides="4" />
        </div>
        <NewsletterOne />
        <BrandsOne border="none" slides="6" />
      </Container>
      <FooterNine />
    </>
  );
};

export default Template9;
