import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderOne from "../../Headers/HeaderOne/HeaderOne";
import InfoBoxOne from "../../InfoBox/InfoBoxOne/InfoBoxOne";
import SliderOne from "../../MainSlider/SliderOne/SliderOne";
import CategoriesSideOne from "../../CategoriesSide/CategoriesSideOne/CategoriesSideOne";
import SaleOne from "../../Sale/SaleOne/SaleOne";
import SaleTwo from "../../Sale/SaleTwo/SaleTwo";
import SaleThree from "../../Sale/SaleThree/SaleThree";
import SaleFour from "../../Sale/SaleFour/SaleFour";
import CollectionSixty from "../../Collections/CollectionSixty/CollectionSixty";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import CollectionFiftyNine from "../../Collections/CollectionFiftyNine/CollectionFiftyNine";
import FeaturesOne from "../../Features/FeaturesOne/FeaturesOne"
import NewsletterTwo from "../../Newsletter/NewsletterTwo/NewsletterTwo"
import TestimonialsOne from "../../Testimonials/TestimonialOne/TestimonialOneCarousel"
import BlogOne from "../../Blogs/BlogOne/BlogOneCarousel"
import FooterOne from "../../Footers/FooterOne/FooterOne"

import cls from "./template1.module.scss"


const Template1 = () => {
  return (
    <>
      <HeaderOne />
      <Container maxWidth="xl">
        <InfoBoxOne />
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3} className={cls.side}>
            <CategoriesSideOne />
            <SaleOne />
            <NewsletterTwo />
            <TestimonialsOne />
            <BlogOne />
          </Grid>
          <Grid item xs={12} lg={9}>
            <SliderOne />
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                 <SaleTwo />
              </Grid>
              <Grid item md={4} xs={12}>
                 <SaleThree />
              </Grid>
              <Grid item md={4} xs={12}>
                 <SaleFour />
              </Grid>
            </Grid>
            <CollectionSixty />
            <BrandsOne />
            <CollectionFiftyNine />
            <FeaturesOne />
          </Grid>
        </Grid>
      </Container>
      <FooterOne />
    </>
  );
};

export default Template1;
