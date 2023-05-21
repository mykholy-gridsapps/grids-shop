import { Container, Grid } from "@mui/material";
import React from "react";
import CollectionSixty from "../../Collections/CollectionSixty/CollectionSixty";
import HeaderSixteen from "../../Headers/HeaderSixteen/HeaderSixteen";
import SaleFifteen from "../../Sale/SaleThirtyFour/SaleThirtyFour";
import CategoriesThree from "../../Categories/CategoriesThree/CategoryThreeCarousel";
import CollectionSixtySeven from "../../Collections/CollectionSixtySeven/CollectionSixtySeven";
import CollectionSixtyEight from "../../Collections/CollectionSixtyEight/CollectionSixtyEight";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import BlogThree from "../../Blogs/BlogThree/BlogThree";
import TestimonalOne from "../../Testimonials/TestimonialOne/TestimonialOneCarousel";


const Template7 = () => {
  return (
    <>
      <HeaderSixteen />
      <Container maxWidth="xl" >
        <Grid container spacing={3}>
          <Grid item lg={6} xs={12}>
            <SaleFifteen />
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
    </>
  );
};

export default Template7;
