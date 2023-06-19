import { Container, Grid } from "@mui/material";
import React from "react";
import Collection104 from "../../Collections/Collection104/Collection104";
import HeaderEleven from "../../Headers/HeaderEleven/HeaderEleven";
import SliderThree from "../../MainSlider/SliderThree/SliderThree";
import SaleTwentyFour from "../../Sale/SaleTwentyFour/SaleTwentyFour";
import SaleTwentyFive from "../../Sale/SaleTwentyFive/SaleTwentyFive";
import FeaturesTwo from "../../Features/FeaturesTwo/FeaturesTwo";
import FooterOne from "../../Footers/FooterThree/FooterThree";


const Template19 = () => {
  return (
    <>
      <HeaderEleven color="#000000" />
      <SliderThree height="100vh" top="40%" />
      <Container maxWidth="xxl">
        <Collection104 slides={6} title="Fashion & Clothes" />
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SaleTwentyFour />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFive margin={0} />
          </Grid>
        </Grid>
        <Collection104 slides={6} title="ELECTRONICS & COMPUTERS" />
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SaleTwentyFour />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFive margin={0} />
          </Grid>
        </Grid>
        <Collection104 slides={6} title="Toys & Games" />
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SaleTwentyFour />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFive margin={0} />
          </Grid>
        </Grid>
        <Collection104 slides={6} title="Home & Garden" />
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SaleTwentyFour />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFive margin={0} />
          </Grid>
        </Grid>
        <Collection104 slides={6} title="Sports & Fitness" />
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SaleTwentyFour />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFive margin={0} />
          </Grid>
        </Grid>
        <Collection104 slides={6} title="Gifts & Gadgets" />
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SaleTwentyFour />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFive margin={0} />
          </Grid>
        </Grid>
        <Collection104 slides={6} title="Gifts & Gadgets" />
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SaleTwentyFour />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFive margin={0} />
          </Grid>
        </Grid>
        <FeaturesTwo color="#222529" padding="40px 0 0 0"/>
      </Container>
      <FooterOne />
    </>
  );
};

export default Template19;
