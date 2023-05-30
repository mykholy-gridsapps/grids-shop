import { Container, Grid } from "@mui/material";
import React from "react";
import BlogOne from "../../Blogs/BlogOne/BlogOne";
import CollectionEightySix from "../../Collections/CollectionEightySix/CollectionEightySix";
import HeaderOne from "../../Headers/HeaderOne/HeaderOne";
import InfoBoxFive from "../../InfoBox/InfoBoxSix/InfoBoxSix";
import SliderTen from "../../MainSlider/SliderOne/SliderOne";
import NewsletterTwo from "../../Newsletter/NewsletterTwo/NewsletterTwo";
import SaleEight from "../../Sale/SaleEight/SaleEight";
import SaleFour from "../../Sale/SaleFour/SaleFour";
import SaleOne from "../../Sale/SaleOne/SaleOne";
import SaleThree from "../../Sale/SaleThree/SaleThree";
import TestimonialsOne from "../../Testimonials/TestimonialOne/TestimonialOneCarousel";
import CollectionFiftyNine from "../../Collections/CollectionFiftyNine/CollectionFiftyNine";

import cls from "./template13.module.scss"
import FooterOne from "../../Footers/FooterOne/FooterOne";


const Template13 = () => {
  return (
    <>
      <HeaderOne topBg="transparent" topColor="#787878" />
      <Container maxWidth="xl" className={cls.container}>
        <Grid container spacing={2} >
          <Grid item lg={9} xs={12}>
            <SliderTen />
          </Grid>
          <Grid item lg={3} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} md={4} xs={12}>
                <SaleFour height="132px" />
              </Grid>
              <Grid item lg={12} md={4} xs={12}>
                <SaleThree imgHeight="132px" />
              </Grid>
              <Grid item lg={12} md={4} xs={12}>
                <SaleFour height="132px" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <InfoBoxFive />
      <Container maxWidth="xl" className={cls.container}>
        <Grid container spacing={3}>
          <Grid item lg={9} xs={12}>
            <CollectionEightySix />
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <SaleEight />
              </Grid>
              <Grid item md={6} xs={12}>
                <SaleEight />
              </Grid>
            </Grid>
            <CollectionFiftyNine border="none"/>
          </Grid>
          <Grid item lg={3} xs={12} className={cls.side}>
            <SaleOne />
            <NewsletterTwo />
            <TestimonialsOne />
            <BlogOne />
          </Grid>
        </Grid>
      </Container>
      <FooterOne label="none"/>
    </>
  );
};

export default Template13;
