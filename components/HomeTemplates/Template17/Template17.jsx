import { Container, Grid } from "@mui/material";
import React from "react";
import BlogThree from "../../Blogs/BlogThree/BlogThree";
import BrandsTwo from "../../Brands/BrandsTwo/BrandsTwo";
import CategoriesFive from "../../Categories/CategoriesFive/CategoryFiveCarousel";
import FooterTen from "../../Footers/FooterTen/FooterTen";
import GalleryTwo from "../../Gallery/GalleryTwo/GalleryTwo";
import HeaderThirtyThree from "../../Headers/HeaderThirtyThree/HeaderThirtyThree";
import SliderThree from "../../MainSlider/SliderThree/SliderThree";
import NewsletterFive from "../../Newsletter/NewsletterFive/NewsletterFive";
import ProductSeven from "../../ProductCard/ProductSeven/ProductSeven";
import SaleSeventyTwo from "../../Sale/SaleSeventyTwo/SaleSeventyTwo";
import TestimonalOne from "../../Testimonials/TestimonialOne/TestimonialOneCarousel";

import cls from "./template17.module.scss"


const Template17 = () => {
  return (
    <>
      <HeaderThirtyThree />
      <SliderThree />
      <Container maxWidth="xl">
        <Grid container className={cls.products}>
          <Grid item md={4} xs={12} className={cls.product}>
            <ProductSeven />
          </Grid>
          <Grid item md={4} xs={12} className={cls.product}>
            <ProductSeven />
          </Grid>
          <Grid item md={4} xs={12} className={cls.product}>
            <ProductSeven />
          </Grid>
          <Grid item md={4} xs={12} className={cls.product}>
            <ProductSeven />
          </Grid>
          <Grid item md={4} xs={12} className={cls.product}>
            <ProductSeven />
          </Grid>
          <Grid item md={4} xs={12} className={cls.product}>
            <ProductSeven />
          </Grid>
        </Grid>
        <Grid container className={cls.banners} spacing={3}>
          <Grid item md={4} xs={12}>
            <SaleSeventyTwo />
          </Grid>
          <Grid item md={4} xs={12}>
            <SaleSeventyTwo />
          </Grid>
          <Grid item md={4} xs={12}>
            <SaleSeventyTwo />
          </Grid>
        </Grid>
        <div className={cls.newsletter}>
          <NewsletterFive />
        </div>
      </Container>
      <div className={cls.products2}>
        <Container maxWidth="xl">

          <Grid container >
            <Grid item md={3} xs={12} className={cls.product}>
              <ProductSeven />
            </Grid>
            <Grid item md={3} xs={12} className={cls.product}>
              <ProductSeven />
            </Grid>
            <Grid item md={3} xs={12} className={cls.product}>
              <ProductSeven />
            </Grid>
            <Grid item md={3} xs={12} className={cls.product}>
              <ProductSeven />
            </Grid>
            <Grid item md={3} xs={12} className={cls.product}>
              <ProductSeven />
            </Grid>
            <Grid item md={3} xs={12} className={cls.product}>
              <ProductSeven />
            </Grid>
            <Grid item md={3} xs={12} className={cls.product}>
              <ProductSeven />
            </Grid>
            <Grid item md={3} xs={12} className={cls.product}>
              <ProductSeven />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container maxWidth="xl">
        <CategoriesFive />
        <div className={cls.brands}>

          <BrandsTwo />
        </div>
      </Container>
      <div className={cls.blogs}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <BlogThree />
            </Grid>
            <Grid item md={6} xs={12}>
              <TestimonalOne />
            </Grid>
          </Grid>
        </Container>
      </div>
      <GalleryTwo />
      <FooterTen />
    </>
  );
};

export default Template17;
