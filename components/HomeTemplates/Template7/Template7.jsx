import { Container, Grid } from "@mui/material";
import React from "react";
import CollectionSixty from "../../Collections/CollectionSixty/CollectionSixty";
import HeaderSixteen from "../../Headers/HeaderSixteen/HeaderSixteen";
import CategoriesThree from "../../Categories/CategoriesThree/CategoryThreeCarousel";
import CollectionSixtySeven from "../../Collections/CollectionSixtySeven/CollectionSixtySeven";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import BlogThree from "../../Blogs/BlogThree/BlogThree";
import TestimonalOne from "../../Testimonials/TestimonialOne/TestimonialOneCarousel";
import SaleFiftySix from "../../Sale/SaleFiftySix/SaleFiftySix";
import SaleFiftySeven from "../../Sale/SaleFiftySeven/SaleFiftySeven";
import SaleFiftyEight from "../../Sale/SaleFiftyEight/SaleFiftyEight";
import SaleFiftyNine from "../../Sale/SaleFiftyNine/SaleFiftyNine";
import FooterFour from "../../Footers/FooterFour/FooterFour";

import cls from "./template7.module.scss"


const Template7 = () => {
  return (
    <>
      <HeaderSixteen />
      <Container maxWidth="xl">
        <Grid container columnSpacing={3} className={cls.bannersContainer}>
          <Grid item lg={6} xs={12} className={cls.bannerOne}>
            <SaleFiftySix />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Grid container  className={cls.banners}>
              <Grid item xs={12} className={cls.banner}>
                <SaleFiftyEight />
              </Grid>
              <Grid item xs={12} className={cls.banner}>
                <SaleFiftySeven />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} className={cls.banner}>
            <SaleFiftyNine />
          </Grid>
        </Grid>
        <CollectionSixty />
      </Container>
      <CategoriesThree />
      <Container maxWidth="xl" >

        <CollectionSixtySeven />
        <BrandsOne slides="6"/>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <BlogThree />
          </Grid>
          <Grid item md={6} xs={12}>
            <TestimonalOne />
          </Grid>
        </Grid>
      </Container>
      <FooterFour/>
    </>
  );
};

export default Template7;
